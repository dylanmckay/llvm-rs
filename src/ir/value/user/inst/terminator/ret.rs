use ir::{User, Context, Instruction, Value, TerminatorInst};
use sys;

use std::ptr;

pub struct ReturnInst<'ctx>(TerminatorInst<'ctx>);

impl<'ctx> ReturnInst<'ctx>
{
    pub fn new(ret_val: Option<&Value>,
               context: &Context) -> Self {
        let ret_val = ret_val.map(Value::inner).unwrap_or(ptr::null_mut());

        unsafe {
            let val = sys::LLVMRustCreateReturnInst(context.inner(), ret_val);
            ReturnInst(TerminatorInst(Instruction(User(Value::new(val)))))
        }
    }
}

impl_upcast!(ReturnInst => TerminatorInst);