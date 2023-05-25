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

pub use crate::{
    psp22,
    psp22::extensions::metadata,
    traits::psp22::{
        extensions::metadata::*,
        *,
    },
};
use openbrush::storage::Lazy;

use openbrush::traits::{
    Storage,
    StorageAccess,
    String,
};
pub use psp22::{
    Internal as _,
    Transfer as _,
};

pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

#[derive(Default, Debug)]
#[openbrush::storage_item(STORAGE_KEY)]
pub struct Data {
    pub name: Option<String>,
    pub symbol: Option<String>,
    pub decimals: u8,
    pub _reserved: Option<()>,
}

#[cfg(not(feature = "upgradeable"))]
pub type DataType = Data;
#[cfg(feature = "upgradeable")]
pub type DataType = Lazy<Data>;

#[cfg(feature = "upgradeable")]
impl<T: Storage<DataType> + StorageAccess<Data>> PSP22Metadata for T {
    default fn token_name(&self) -> Option<String> {
        self.data().get_or_default().name.clone()
    }

    default fn token_symbol(&self) -> Option<String> {
        self.data().get_or_default().symbol.clone()
    }

    default fn token_decimals(&self) -> u8 {
        self.data().get_or_default().decimals.clone()
    }
}
