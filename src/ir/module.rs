use ir::{Context, FunctionType, Attribute, Value, Function};
use Upcast;

use sys;
use std::marker;

use std::ffi;

/// An LLVM module.
/// `'ctx` - The lifetime of the context.
pub struct Module<'ctx>
{
    inner: sys::ModuleRef,
    phantom: marker::PhantomData<&'ctx ()>,
}

impl<'ctx> Module<'ctx>
{
    /// Creates a new module.
    pub fn new(id: &str, context: &'ctx Context) -> Self {
        let id = ffi::CString::new(id).unwrap();

        Module {
            inner: unsafe { sys::LLVMRustCreateModule(id.as_ptr(), context.inner()) },
            phantom: marker::PhantomData,
        }
    }

    pub fn get_or_insert_function(&self,
                                  name: &str,
                                  func_ty: &FunctionType,
                                  attributes: &[Attribute]) -> Function {
        let name = ffi::CString::new(name).unwrap();
        let mut attrs: Vec<_> = attributes.iter().map(Attribute::inner).collect();

        let func = unsafe {
            sys::LLVMRustModuleGetOrInsertFunction(self.inner,
                                                   name.as_ptr(),
                                                   func_ty.upcast_ref().inner(),
                                                   attrs.as_mut_ptr(),
                                                   attrs.len())
        };

        Function::from_value(Value::new(func))
    }

    /// Dumps the module to standard error.
    pub fn dump(&self) {
        unsafe { sys::LLVMRustModuleDump(self.inner) }
    }

    /// Gets the inner module reference.
    pub fn inner(&self) -> sys::ModuleRef { self.inner }
}