pub use self::func::FunctionType;

pub mod func;

use ir::Context;
use sys;

use std::marker;

/// An LLVM type.
pub struct Type<'ctx>
{
    inner: sys::TypeRef,
    phantom: marker::PhantomData<&'ctx ()>,
}

impl<'ctx> Type<'ctx>
{
    /// Gets the `void` type.
    pub fn void(context: &Context) -> Self {
        let inner = unsafe { sys::LLVMRustTypeGetVoidTy(context.inner()) };
        Type::new(inner)
    }

    /// Gets an integer type.
    pub fn integer(num_bits: usize,
                   context: &Context) -> Self {
        let inner = unsafe { sys::LLVMRustIntegerTypeGet(context.inner(),
                                                         num_bits as _) };
        Type::new(inner)
    }

    /// Dump the type to standard error.
    pub fn dump(&self) {
        unsafe {
            sys::LLVMRustTypeDump(self.inner);
        }
    }

    /// Gets the inner type reference.
    pub fn inner(&self) -> sys::TypeRef { self.inner }

    fn new(inner: sys::TypeRef) -> Self {
        Type { inner: inner, phantom: marker::PhantomData }
    }
}
