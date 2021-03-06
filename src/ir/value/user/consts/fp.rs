use SafeWrapper;
use ir::{Constant, Type, User};
use sys;

use std::ffi;

/// A floating point constant.
pub struct ConstantFP<'ctx>(Constant<'ctx>);
impl_subtype!(ConstantFP => Constant);

impl<'ctx> ConstantFP<'ctx>
{
    /// Creates a new floating point constant from a string.
    pub fn new_string(ty: &Type,
                      value: &str) -> Self {
        let value = ffi::CString::new(value).unwrap();

        unsafe {
            let inner = sys::LLVMRustConstantFPGetString(ty.inner(), value.as_ptr());
            wrap_value!(inner => User => Constant => ConstantFP)
        }
    }

    /// Creates a new floating point constant from a `f64`.
    pub fn new(ty: &Type, value: f64) -> Self {
        unsafe {
            let inner = sys::LLVMRustConstantFPGetDouble(ty.inner(), value);
            wrap_value!(inner => User => Constant => ConstantFP)
        }
    }
}
