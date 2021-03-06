use SafeWrapper;
use ir::{User, Instruction, Value, AtomicOrdering, SynchronizationScope, AtomicBinaryOp};
use sys;

pub struct AtomicRMWInst<'ctx>(Instruction<'ctx>);

impl<'ctx> AtomicRMWInst<'ctx>
{
    pub fn new(op: AtomicBinaryOp,
               pointer: &Value,
               value: &Value,
               ordering: AtomicOrdering,
               sync_scope: SynchronizationScope) -> Self {
        unsafe {
            let inner = sys::LLVMRustCreateAtomicRMWInst(op, pointer.inner(), value.inner(),
                ordering, sync_scope);
            wrap_value!(inner => User => Instruction => AtomicRMWInst)
        }
    }
}

impl_subtype!(AtomicRMWInst => Instruction);
