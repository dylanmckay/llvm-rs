use ContextRef;
use libc;

pub enum OpaqueModule { }
pub type ModuleRef = *mut OpaqueModule;

extern "C" {
    pub fn LLVMRustCreateModule(id: *const libc::c_char,
                                ctx: ContextRef) -> ModuleRef;
}

#[cfg(test)]
mod test {
    use super::*;
    use test_support::Context;

    use std::ffi::CString;

    #[test]
    fn can_create_module() {
        let ctx = Context::new();
        let module_name = CString::new("hello").unwrap();

        unsafe {
            LLVMRustCreateModule(module_name.as_ptr(), ctx.inner);
        }
    }
}
