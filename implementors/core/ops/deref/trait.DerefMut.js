(function() {var implementors = {};
implementors["hllvm"] = ["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/binary_heap/struct.PeekMut.html\" title=\"struct alloc::binary_heap::PeekMut\">PeekMut</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/panic/struct.AssertUnwindSafe.html\" title=\"struct std::panic::AssertUnwindSafe\">AssertUnwindSafe</a>&lt;T&gt;","impl&lt;'mutex, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/mutex/struct.MutexGuard.html\" title=\"struct std::sync::mutex::MutexGuard\">MutexGuard</a>&lt;'mutex, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","impl&lt;'rwlock, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockWriteGuard.html\" title=\"struct std::sync::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/func/struct.FunctionType.html\" title=\"struct hllvm::ir::ty::func::FunctionType\">FunctionType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/integer/struct.IntegerType.html\" title=\"struct hllvm::ir::ty::integer::IntegerType\">IntegerType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/composite/strukt/struct.StructType.html\" title=\"struct hllvm::ir::ty::composite::strukt::StructType\">StructType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/composite/seq/array/struct.ArrayType.html\" title=\"struct hllvm::ir::ty::composite::seq::array::ArrayType\">ArrayType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/composite/seq/pointer/struct.PointerType.html\" title=\"struct hllvm::ir::ty::composite::seq::pointer::PointerType\">PointerType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/composite/seq/vector/struct.VectorType.html\" title=\"struct hllvm::ir::ty::composite::seq::vector::VectorType\">VectorType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/composite/seq/struct.SequentialType.html\" title=\"struct hllvm::ir::ty::composite::seq::SequentialType\">SequentialType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/ty/composite/struct.CompositeType.html\" title=\"struct hllvm::ir::ty::composite::CompositeType\">CompositeType</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/block/struct.Block.html\" title=\"struct hllvm::ir::value::block::Block\">Block</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/argument/struct.Argument.html\" title=\"struct hllvm::ir::value::argument::Argument\">Argument</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/inlineasm/struct.InlineAsm.html\" title=\"struct hllvm::ir::value::inlineasm::InlineAsm\">InlineAsm</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/atomiccmp/struct.AtomicCmpXchgInst.html\" title=\"struct hllvm::ir::value::user::inst::atomiccmp::AtomicCmpXchgInst\">AtomicCmpXchgInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/atomicrmw/struct.AtomicRMWInst.html\" title=\"struct hllvm::ir::value::user::inst::atomicrmw::AtomicRMWInst\">AtomicRMWInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/store/struct.StoreInst.html\" title=\"struct hllvm::ir::value::user::inst::store::StoreInst\">StoreInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/gep/struct.GetElementPtrInst.html\" title=\"struct hllvm::ir::value::user::inst::gep::GetElementPtrInst\">GetElementPtrInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/extract_elem/struct.ExtractElementInst.html\" title=\"struct hllvm::ir::value::user::inst::extract_elem::ExtractElementInst\">ExtractElementInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/insert_elem/struct.InsertElementInst.html\" title=\"struct hllvm::ir::value::user::inst::insert_elem::InsertElementInst\">InsertElementInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/insert_value/struct.InsertValueInst.html\" title=\"struct hllvm::ir::value::user::inst::insert_value::InsertValueInst\">InsertValueInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/select/struct.SelectInst.html\" title=\"struct hllvm::ir::value::user::inst::select::SelectInst\">SelectInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/fence/struct.FenceInst.html\" title=\"struct hllvm::ir::value::user::inst::fence::FenceInst\">FenceInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/landingpad/struct.LandingPadInst.html\" title=\"struct hllvm::ir::value::user::inst::landingpad::LandingPadInst\">LandingPadInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/binop/struct.BinaryOperatorInst.html\" title=\"struct hllvm::ir::value::user::inst::binop::BinaryOperatorInst\">BinaryOperatorInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/catchpad/struct.CatchPadInst.html\" title=\"struct hllvm::ir::value::user::inst::catchpad::CatchPadInst\">CatchPadInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/cleanuppad/struct.CleanupPadInst.html\" title=\"struct hllvm::ir::value::user::inst::cleanuppad::CleanupPadInst\">CleanupPadInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/call/struct.CallInst.html\" title=\"struct hllvm::ir::value::user::inst::call::CallInst\">CallInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/cmp/fcmp/struct.FCmpInst.html\" title=\"struct hllvm::ir::value::user::inst::cmp::fcmp::FCmpInst\">FCmpInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/cmp/icmp/struct.ICmpInst.html\" title=\"struct hllvm::ir::value::user::inst::cmp::icmp::ICmpInst\">ICmpInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/cmp/struct.CmpInst.html\" title=\"struct hllvm::ir::value::user::inst::cmp::CmpInst\">CmpInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/br/struct.BranchInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::br::BranchInst\">BranchInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/catchreturn/struct.CatchReturnInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::catchreturn::CatchReturnInst\">CatchReturnInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/catchswitch/struct.CatchSwitchInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::catchswitch::CatchSwitchInst\">CatchSwitchInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/cleanupreturn/struct.CleanupReturnInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::cleanupreturn::CleanupReturnInst\">CleanupReturnInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/indirectbr/struct.IndirectBrInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::indirectbr::IndirectBrInst\">IndirectBrInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/invoke/struct.InvokeInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::invoke::InvokeInst\">InvokeInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/resume/struct.ResumeInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::resume::ResumeInst\">ResumeInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/ret/struct.ReturnInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::ret::ReturnInst\">ReturnInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/switch/struct.SwitchInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::switch::SwitchInst\">SwitchInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/unreachable/struct.UnreachableInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::unreachable::UnreachableInst\">UnreachableInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/terminator/struct.TerminatorInst.html\" title=\"struct hllvm::ir::value::user::inst::terminator::TerminatorInst\">TerminatorInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/alloca/struct.AllocaInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::alloca::AllocaInst\">AllocaInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/load/struct.LoadInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::load::LoadInst\">LoadInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/extract_value/struct.ExtractValueInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::extract_value::ExtractValueInst\">ExtractValueInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/vaarg/struct.VAArgInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::vaarg::VAArgInst\">VAArgInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.CastInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::CastInst\">CastInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.AddrSpaceCastInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::AddrSpaceCastInst\">AddrSpaceCastInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.BitCastInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::BitCastInst\">BitCastInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.FPExtInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::FPExtInst\">FPExtInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.FPToSIInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::FPToSIInst\">FPToSIInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.FPToUIInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::FPToUIInst\">FPToUIInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.FPTruncInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::FPTruncInst\">FPTruncInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.IntToPtrInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::IntToPtrInst\">IntToPtrInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.PtrToIntInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::PtrToIntInst\">PtrToIntInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.SExtInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::SExtInst\">SExtInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.SIToFPInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::SIToFPInst\">SIToFPInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.TruncInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::TruncInst\">TruncInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.UIToFPInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::UIToFPInst\">UIToFPInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/cast/struct.ZExtInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::cast::ZExtInst\">ZExtInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/unary/struct.UnaryInst.html\" title=\"struct hllvm::ir::value::user::inst::unary::UnaryInst\">UnaryInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/shufflevec/struct.ShuffleVectorInst.html\" title=\"struct hllvm::ir::value::user::inst::shufflevec::ShuffleVectorInst\">ShuffleVectorInst</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/inst/struct.Instruction.html\" title=\"struct hllvm::ir::value::user::inst::Instruction\">Instruction</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/int/struct.ConstantInt.html\" title=\"struct hllvm::ir::value::user::consts::int::ConstantInt\">ConstantInt</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/fp/struct.ConstantFP.html\" title=\"struct hllvm::ir::value::user::consts::fp::ConstantFP\">ConstantFP</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/blockaddr/struct.BlockAddress.html\" title=\"struct hllvm::ir::value::user::consts::blockaddr::BlockAddress\">BlockAddress</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/aggzero/struct.ConstantAggregateZero.html\" title=\"struct hllvm::ir::value::user::consts::aggzero::ConstantAggregateZero\">ConstantAggregateZero</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/array/struct.ConstantArray.html\" title=\"struct hllvm::ir::value::user::consts::array::ConstantArray\">ConstantArray</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/vector/struct.ConstantVector.html\" title=\"struct hllvm::ir::value::user::consts::vector::ConstantVector\">ConstantVector</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/ptrnull/struct.ConstantPointerNull.html\" title=\"struct hllvm::ir::value::user::consts::ptrnull::ConstantPointerNull\">ConstantPointerNull</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/strukt/struct.ConstantStruct.html\" title=\"struct hllvm::ir::value::user::consts::strukt::ConstantStruct\">ConstantStruct</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/undef/struct.UndefValue.html\" title=\"struct hllvm::ir::value::user::consts::undef::UndefValue\">UndefValue</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/global/obj/func/struct.Function.html\" title=\"struct hllvm::ir::value::user::consts::global::obj::func::Function\">Function</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/global/obj/variable/struct.GlobalVariable.html\" title=\"struct hllvm::ir::value::user::consts::global::obj::variable::GlobalVariable\">GlobalVariable</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/global/obj/struct.GlobalObject.html\" title=\"struct hllvm::ir::value::user::consts::global::obj::GlobalObject\">GlobalObject</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/global/struct.GlobalValue.html\" title=\"struct hllvm::ir::value::user::consts::global::GlobalValue\">GlobalValue</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/consts/struct.Constant.html\" title=\"struct hllvm::ir::value::user::consts::Constant\">Constant</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"hllvm/ir/value/user/struct.User.html\" title=\"struct hllvm::ir::value::user::User\">User</a>&lt;'a&gt;",];
implementors["libc"] = ["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/binary_heap/struct.PeekMut.html\" title=\"struct alloc::binary_heap::PeekMut\">PeekMut</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/panic/struct.AssertUnwindSafe.html\" title=\"struct std::panic::AssertUnwindSafe\">AssertUnwindSafe</a>&lt;T&gt;","impl&lt;'mutex, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/mutex/struct.MutexGuard.html\" title=\"struct std::sync::mutex::MutexGuard\">MutexGuard</a>&lt;'mutex, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","impl&lt;'rwlock, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockWriteGuard.html\" title=\"struct std::sync::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>",];
implementors["syntex_syntax"] = ["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/binary_heap/struct.PeekMut.html\" title=\"struct alloc::binary_heap::PeekMut\">PeekMut</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/panic/struct.AssertUnwindSafe.html\" title=\"struct std::panic::AssertUnwindSafe\">AssertUnwindSafe</a>&lt;T&gt;","impl&lt;'mutex, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/mutex/struct.MutexGuard.html\" title=\"struct std::sync::mutex::MutexGuard\">MutexGuard</a>&lt;'mutex, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","impl&lt;'rwlock, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockWriteGuard.html\" title=\"struct std::sync::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
