initSidebarItems({"constant":[["CRATE_NODE_ID","Node id used to represent the root of the crate."],["DUMMY_NODE_ID","When parsing and doing expansions, we initially give all AST nodes this AST node value. Then later, in the renumber pass, we renumber them to have small, positive ids."]],"enum":[["AsmDialect","Inline assembly dialect."],["AttrStyle","Distinguishes between Attributes that decorate items and Attributes that are contained as statements within items. These two cases need to be distinguished for pretty-printing."],["BinOpKind",""],["BindingMode",""],["BlockCheckMode",""],["CaptureBy","A capture clause"],["Constness",""],["Defaultness",""],["ExprKind",""],["FloatTy",""],["ForeignItemKind","An item within an `extern` block"],["FunctionRetTy",""],["ImplItemKind",""],["ImplPolarity",""],["IntTy",""],["ItemKind",""],["LitIntType",""],["LitKind","Literal kind."],["MacStmtStyle",""],["MetaItemKind","A compile-time attribute item."],["Mutability",""],["PatKind",""],["PathListItemKind",""],["PathParameters","Parameters of a path segment."],["RangeLimits","Limit types of a range (inclusive or exclusive)"],["SelfKind","Alternative representation for `Arg`s describing `self` parameter of methods."],["StmtKind",""],["StrStyle",""],["TraitBoundModifier","A modifier on a bound, currently this is only used for `?Sized`, where the modifier is `Maybe`. Negative bounds should also be handled here."],["TraitItemKind",""],["TyKind","The different kinds of types recognized by the compiler"],["TyParamBound","The AST represents all type param bounds as types. typeck::collect::compute_bounds matches these against the \"special\" built-in traits (see middle::lang_items) and detects Copy, Send and Sync."],["UintTy",""],["UnOp",""],["UnsafeSource",""],["Unsafety",""],["VariantData","Fields and Ids of enum variants and structs"],["ViewPath_",""],["Visibility",""],["WherePredicate","A single predicate in a `where` clause"]],"struct":[["AngleBracketedParameterData","A path like `Foo<'a, T>`"],["Arg","An argument in a function header."],["Arm","An arm of a 'match'."],["AttrId",""],["Attribute_","Doc-comments are promoted to attributes that have is_sugared_doc = true"],["BareFnTy",""],["Block","A Block (`{ .. }`)."],["Crate",""],["EnumDef",""],["Expr","An expression"],["Field",""],["FieldPat","A single field in a struct pattern"],["FnDecl","Header (not the body) of a function declaration."],["ForeignItem",""],["ForeignMod","Foreign module declaration."],["Generics","Represents lifetimes and type parameters attached to a declaration of a function, enum, trait, etc."],["Ident","An identifier contains a Name (index into the interner table) and a SyntaxContext to track renaming and macro expansion per Flatt et al., \"Macros That Work Together\""],["ImplItem",""],["InlineAsm","Inline assembly."],["InlineAsmOutput","Inline assembly."],["Item","An item"],["Lifetime",""],["LifetimeDef","A lifetime definition, e.g. `'a: 'b+'c+'d`"],["Local","Local represents a `let` statement, e.g., `let <pat>:<ty> = <expr>;`"],["Mac_","Represents a macro invocation. The Path indicates which macro is being invoked, and the vector of token-trees contains the source of the macro invocation."],["MacroDef","A macro definition, in this crate or imported from another."],["MethodSig","Represents a method's signature in a trait declaration, or in an implementation."],["Mod","Module declaration."],["MutTy",""],["Name","A name is a part of an identifier, representing a string or gensym. It's the result of interning."],["ParenthesizedParameterData","A path like `Foo(A,B) -> C`"],["Pat",""],["Path","A \"Path\" is essentially Rust's notion of a name."],["PathSegment","A segment of a path: an identifier, an optional lifetime, and a set of types."],["PolyTraitRef",""],["QSelf","The explicit Self type in a \"qualified path\". The actual path, including the trait and the associated item, is stored separately. `position` represents the index of the associated item qualified with this Self type."],["Stmt","A statement"],["StructField","Field of a struct."],["ThinVec","A vector type optimized for cases where this size is usually 0 (c.f. `SmallVector`). The `Option<Box<..>>` wrapping allows us to represent a zero sized vector with `None`, which uses only a single (null) pointer."],["TraitItem","Represents an item declaration within a trait declaration, possibly including a default implementation. A trait item is either required (meaning it doesn't have an implementation, just a signature) or provided (meaning it has a default implementation)."],["TraitRef","TraitRef's appear in impls."],["Ty",""],["TyParam",""],["TypeBinding",""],["Variant_",""],["WhereBoundPredicate","A type bound."],["WhereClause","A `where` clause in a definition"],["WhereEqPredicate","An equality predicate (unsupported)."],["WhereRegionPredicate","A lifetime predicate."]],"type":[["Attribute","Meta-data associated with an item"],["BinOp",""],["CrateConfig","The set of MetaItems that define the compilation environment of the crate, used to drive conditional compilation"],["CrateNum",""],["ExplicitSelf",""],["Lit","A literal"],["Mac",""],["MetaItem","A spanned compile-time attribute item."],["NodeId",""],["PathListItem",""],["SpannedIdent",""],["TyParamBounds",""],["Variant",""],["ViewPath",""]]});