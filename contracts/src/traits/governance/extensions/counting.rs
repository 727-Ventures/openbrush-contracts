// Copyright (c) 2023 727.ventures
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

pub use crate::traits::errors::GovernorError;
use openbrush::traits::AccountId;
use openbrush::traits::String;
#[openbrush::wrapper]
pub type GovernorCountingRef = dyn GovernorCounting;

pub enum VoteType {
    Against,
    For,
    Abstain,
}

#[openbrush::trait_definition]
pub trait GovernorCounting {
    #[ink(message)]
    fn counting_mode(&self) -> String;

    #[ink(message)]
    fn has_voted(&self, proposal_id: u128, voter: AccountId) -> bool;

    #[ink(message)]
    fn proposal_votes(&self, proposal_id: u128) -> (u128, u128, u128);
}
