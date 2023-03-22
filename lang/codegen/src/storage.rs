// Copyright (c) 2012-2022 Supercolony
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the"Software"),
// to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

use proc_macro2::{
    Ident,
    TokenStream,
};
use quote::{
    format_ident,
    quote,
    quote_spanned,
    ToTokens,
};
use syn::{
    parse2,
    spanned::Spanned,
    Data,
    DataEnum,
    DataStruct,
    DataUnion,
    Field,
    Fields,
};

/// `Storable` derive implementation for `struct` types.
fn storable_struct_derive(storage_key: &TokenStream, s: &synstructure::Structure) -> TokenStream {
    let struct_ident = s.ast().ident.clone();
    assert_eq!(s.variants().len(), 1, "can only operate on structs");
    let variant: &synstructure::VariantInfo = &s.variants()[0];
    let decode_body = variant.construct(|field, index| {
        let new_field = convert_into_storage_field(&struct_ident, None, &storage_key, index, field);
        let ty = &new_field.ty;
        let span = ty.span();
        quote_spanned!(span =>
            <#ty as ::ink::storage::traits::Storable>::decode(__input)?
        )
    });
    let encode_body = variant.each(|binding| {
        let span = binding.ast().ty.span();
        quote_spanned!(span =>
            ::ink::storage::traits::Storable::encode(#binding, __dest);
        )
    });

    s.gen_impl(quote! {
        gen impl ::ink::storage::traits::Storable for @Self {
           #[inline(always)]
           #[allow(non_camel_case_types)]
           fn decode<__ink_I: ::scale::Input>(__input: &mut __ink_I) -> ::core::result::Result<Self, ::scale::Error> {
                if ::ink::env::contains_contract_storage(&#storage_key).is_some() {
                    let storage_get = ::ink::env::contains_contract_storage(&<Self as ::openbrush::traits::StorageGetMarker>::GET_KEY).is_some();

                    if !storage_get {
                        ::ink::env::set_contract_storage(&<Self as ::openbrush::traits::StorageGetMarker>::GET_KEY, &());
                        let instance = ::ink::env::get_contract_storage::<::ink::primitives::Key, Self>(&#storage_key).unwrap().unwrap();
                        ::ink::env::clear_contract_storage(&<Self as ::openbrush::traits::StorageGetMarker>::GET_KEY);
                        return ::core::result::Result::Ok(instance);
                    } else {
                        return ::core::result::Result::Ok(#decode_body);
                    }
                }
                else {
                    let mut instance = Self::default();
                    <Self as ::openbrush::traits::Initializable>::initialize(&mut instance);
                    ::ink::env::set_contract_storage(&#storage_key, &instance);
                    ::core::result::Result::Ok(instance)
                }
           }

           #[inline(always)]
           #[allow(non_camel_case_types)]
           fn encode<__ink_O: ::scale::Output + ?::core::marker::Sized>(&self, __dest: &mut __ink_O) {
                match self { #encode_body }
           }
        }
    })
}

/// `Storable` derive implementation for `enum` types.
fn storable_enum_derive(storage_key: &TokenStream, s: &synstructure::Structure) -> TokenStream {
    assert!(
        !s.variants().is_empty(),
        "encountered invalid empty enum type deriving Storable trait"
    );

    if s.variants().len() > 256 {
        return syn::Error::new(
            s.ast().span(),
            "Currently only enums with at most 256 variants are supported.",
        )
        .to_compile_error()
    }

    let enum_ident = s.ast().ident.clone();

    let decode_body = s
        .variants()
        .iter()
        .map(|variant| {
            let variant_ident = variant.ast().ident.clone();
            variant.construct(|field, index| {
                let new_field =
                    convert_into_storage_field(&enum_ident, Some(&variant_ident), &storage_key, index, field);
                let ty = &new_field.ty;
                let span = ty.span();
                quote_spanned!(span =>
                    <#ty as ::ink::storage::traits::Storable>::decode(__input)?
                )
            })
        })
        .enumerate()
        .fold(quote! {}, |acc, (index, variant)| {
            let index = index as u8;
            quote! {
                #acc
                #index => #variant,
            }
        });

    let encode_body = s.variants().iter().enumerate().map(|(index, variant)| {
        let pat = variant.pat();
        let index = index as u8;
        let fields = variant.bindings().iter().map(|field| {
            let span = field.ast().ty.span();
            quote_spanned!(span =>
                ::ink::storage::traits::Storable::encode(#field, __dest);
            )
        });
        quote! {
            #pat => {
                { <::core::primitive::u8 as ::ink::storage::traits::Storable>::encode(&#index, __dest); }
                #(
                    { #fields }
                )*
            }
        }
    });
    s.gen_impl(quote! {
        gen impl ::ink::storage::traits::Storable for @Self {
           #[inline(always)]
           #[allow(non_camel_case_types)]
           fn decode<__ink_I: ::scale::Input>(__input: &mut __ink_I) -> ::core::result::Result<Self, ::scale::Error> {
                if ::ink::env::contains_contract_storage(&#storage_key).is_some() {
                    let storage_get = ::ink::env::contains_contract_storage(&<Self as ::openbrush::traits::StorageGetMarker>::GET_KEY).is_some();

                    if !storage_get {
                        ::ink::env::set_contract_storage(&<Self as ::openbrush::traits::StorageGetMarker>::GET_KEY, &());
                        let instance = ::ink::env::get_contract_storage::<::ink::primitives::Key, Self>(&#storage_key).unwrap().unwrap();
                        ::ink::env::clear_contract_storage(&<Self as ::openbrush::traits::StorageGetMarker>::GET_KEY);
                        return ::core::result::Result::Ok(instance);
                    } else {
                        ::core::result::Result::Ok(
                           match <::core::primitive::u8 as ::ink::storage::traits::Storable>::decode(__input)? {
                               #decode_body
                               _ => unreachable!("encountered invalid enum discriminant"),
                            }
                        )
                    }
                }
                else {
                    let mut instance = Self::default();
                    <Self as ::openbrush::traits::Initializable>::initialize(&mut instance);
                    ::ink::env::set_contract_storage(&#storage_key, &instance);
                    ::core::result::Result::Ok(instance)
                }
           }

           #[inline(always)]
           #[allow(non_camel_case_types)]
           fn encode<__ink_O: ::scale::Output + ?::core::marker::Sized>(&self, __dest: &mut __ink_O) {
               match self {
                   #(
                       #encode_body
                   )*
               }
           }
        }
    })
}

/// Derives `ink_storage`'s `Storable` trait for the given `struct` or `enum`.
pub fn storable_derive(storage_key: &TokenStream, mut s: synstructure::Structure) -> TokenStream {
    s.bind_with(|_| synstructure::BindStyle::Move)
        .add_bounds(synstructure::AddBounds::Fields)
        .underscore_const(true);
    match &s.ast().data {
        syn::Data::Struct(_) => storable_struct_derive(storage_key, &s),
        syn::Data::Enum(_) => storable_enum_derive(storage_key, &s),
        _ => {
            panic!("cannot derive `Storable` for Rust `union` items")
        }
    }
}

pub fn occupy_storage_derive(storage_key: &TokenStream, mut s: synstructure::Structure) -> TokenStream {
    s.add_bounds(synstructure::AddBounds::None).underscore_const(true);
    let occupy_storage = s.gen_impl(quote! {
        gen impl ::openbrush::traits::OccupyStorage for @Self {
            const KEY: ::core::primitive::u32 = #storage_key;
        }
    });
    let storage = s.gen_impl(quote! {
        gen impl ::openbrush::traits::Storage<Self> for @Self {
            fn get(&self) -> &Self {
                self
            }

            fn get_mut(&mut self) -> &mut Self {
                self
            }
        }
    });
    let occupied_storage = s.gen_impl(quote! {
        gen impl ::openbrush::traits::OccupiedStorage<{ #storage_key }> for @Self {
            type WithData = Self;
        }
    });

    quote! {
        #occupy_storage
        #storage
        #occupied_storage
    }
}

pub fn storage_key_derive(storage_key: &TokenStream, mut s: synstructure::Structure) -> TokenStream {
    s.add_bounds(synstructure::AddBounds::None).underscore_const(true);

    s.gen_impl(quote! {
        gen impl ::ink::storage::traits::StorageKey for @Self {
            const KEY: ::ink::primitives::Key = #storage_key;
        }
    })
}

fn storable_hint_inner(storage_key: &TokenStream, s: synstructure::Structure) -> TokenStream {
    let ident = s.ast().ident.clone();
    let salt_ident = format_ident!("__ink_generic_salt");

    let mut generics = s.ast().generics.clone();
    generics
        .params
        .push(parse2(quote! { #salt_ident : ::ink::storage::traits::StorageKey }).unwrap());

    let (impl_generics, _, where_clause) = generics.split_for_impl();
    let (_, ty_generics_original, _) = s.ast().generics.split_for_impl();

    quote! {
        impl #impl_generics ::ink::storage::traits::StorableHint<#salt_ident> for #ident #ty_generics_original #where_clause {
            type Type = #ident #ty_generics_original;
            type PreferredKey = ::ink::storage::traits::ManualKey<#storage_key>;
        }
    }
}

pub fn storable_hint_derive(storage_key: &TokenStream, s: synstructure::Structure) -> TokenStream {
    let derive = storable_hint_inner(storage_key, s);

    quote! {
        const _ : () = {
            #derive
        };
    }
}

fn generate_struct(s: &synstructure::Structure, struct_item: DataStruct, storage_key: &TokenStream) -> TokenStream {
    let struct_ident = s.ast().ident.clone();
    let vis = s.ast().vis.clone();
    let types = s.ast().generics.clone();
    let attrs = s.ast().attrs.clone();
    let (_, _, where_closure) = s.ast().generics.split_for_impl();

    let fields = struct_item
        .fields
        .iter()
        .enumerate()
        .map(|(i, field)| convert_into_storage_field(&struct_ident, None, &storage_key, i, field));

    match struct_item.fields {
        Fields::Unnamed(_) => {
            quote! {
                #(#attrs)*
                #vis struct #struct_ident #types #where_closure (
                    #(#fields),*
                );
            }
        }
        _ => {
            quote! {
                #(#attrs)*
                #vis struct #struct_ident #types #where_closure {
                    #(#fields),*
                }
            }
        }
    }
}

fn generate_enum(s: &synstructure::Structure, enum_item: DataEnum, storage_key: &TokenStream) -> TokenStream {
    let enum_ident = s.ast().ident.clone();
    let vis = s.ast().vis.clone();
    let attrs = s.ast().attrs.clone();
    let types = s.ast().generics.clone();
    let (_, _, where_closure) = s.ast().generics.split_for_impl();

    let variants = enum_item.variants.into_iter().map(|variant| {
        let attrs = variant.attrs;
        let variant_ident = &variant.ident;
        let discriminant = if let Some((eq, expr)) = variant.discriminant {
            quote! { #eq #expr}
        } else {
            quote! {}
        };

        let fields: Vec<_> = variant
            .fields
            .iter()
            .enumerate()
            .map(|(i, field)| convert_into_storage_field(&enum_ident, Some(variant_ident), &storage_key, i, field))
            .collect();

        let fields = match variant.fields {
            Fields::Named(_) => quote! { { #(#fields),* } },
            Fields::Unnamed(_) => quote! { ( #(#fields),* ) },
            Fields::Unit => quote! {},
        };

        quote! {
            #(#attrs)*
            #variant_ident #fields #discriminant
        }
    });

    quote! {
        #(#attrs)*
        #vis enum #enum_ident #types #where_closure {
            #(#variants),*
        }
    }
}

fn generate_union(s: &synstructure::Structure, union_item: DataUnion, storage_key: &TokenStream) -> TokenStream {
    let union_ident = s.ast().ident.clone();
    let vis = s.ast().vis.clone();
    let attrs = s.ast().attrs.clone();
    let types = s.ast().generics.clone();
    let (_, _, where_closure) = s.ast().generics.split_for_impl();

    let fields = union_item
        .fields
        .named
        .iter()
        .enumerate()
        .map(|(i, field)| convert_into_storage_field(&union_ident, None, &storage_key, i, field));

    quote! {
        #(#attrs)*
        #vis union #union_ident #types #where_closure {
            #(#fields),*
        }
    }
}

fn convert_into_storage_field(
    struct_ident: &Ident,
    variant_ident: Option<&syn::Ident>,
    storage_key: &TokenStream,
    index: usize,
    field: &Field,
) -> Field {
    let field_name = if let Some(field_ident) = &field.ident {
        field_ident.to_string()
    } else {
        index.to_string()
    };

    let variant_name = if let Some(variant_ident) = variant_ident {
        variant_ident.to_string()
    } else {
        "".to_string()
    };

    let key = ::ink_primitives::KeyComposer::compute_key(
        struct_ident.to_string().as_str(),
        variant_name.as_str(),
        field_name.as_str(),
    )
    .expect("unable to compute the storage key for the field");

    let mut new_field = field.clone();
    let ty = field.ty.clone().to_token_stream();
    let span = field.ty.span();
    let new_ty = syn::Type::Verbatim(quote_spanned!(span =>
        <#ty as ::ink::storage::traits::AutoStorableHint<
            ::ink::storage::traits::ManualKey<#key, ::ink::storage::traits::ManualKey<#storage_key>>,
        >>::Type
    ));
    new_field.ty = new_ty;
    new_field
}

fn storage_get_marker_derive(s: synstructure::Structure) -> TokenStream {
    let ident = s.ast().ident.clone();
    s.gen_impl(quote! {
        gen impl ::openbrush::traits::StorageGetMarker for @Self {
            const GET_KEY: u32 = ::openbrush::utils::ConstHasher::hash(::openbrush::utils::const_format::concatcp!(
                ::core::module_path!(),
                "::",
                ::core::stringify!(#ident),
                "::GET_KEY"
            ));
        }
    })
}

pub fn upgradeable_storage(attrs: TokenStream, s: synstructure::Structure) -> TokenStream {
    let storage_key = attrs.clone();

    let item = match s.ast().data.clone() {
        Data::Struct(struct_item) => generate_struct(&s, struct_item, &storage_key),
        Data::Enum(enum_item) => generate_enum(&s, enum_item, &storage_key),
        Data::Union(union_item) => generate_union(&s, union_item, &storage_key),
    };

    let occupy_storage = occupy_storage_derive(&storage_key, s.clone());
    let storage_key_derived = storage_key_derive(&storage_key, s.clone());
    let storable_hint = storable_hint_derive(&storage_key, s.clone());
    let storage_get_marker = storage_get_marker_derive(s.clone());
    let storable = storable_derive(&storage_key, s.clone());

    let out = quote! {
        #[cfg_attr(feature = "std", derive(
            ::scale_info::TypeInfo,
            ::ink::storage::traits::StorageLayout
        ))]
        #[::ink::storage_item(derive = false)]
        #item

        #storable
        #storage_key_derived
        #storable_hint
        #storage_get_marker

        #occupy_storage
    };

    out.into()
}
