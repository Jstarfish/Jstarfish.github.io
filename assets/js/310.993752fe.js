(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{803:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("should_add_todo_item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 准备")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoItemRepository")]),t._v(" repository "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoItemRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("returnsFirstArg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoItemService")]),t._v(" service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoItemService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行  ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoItem")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTodoItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoParameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 断言  ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertThat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEqualTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清理(可选)")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我把这个测试分成了四段，分别是准备、执行、断言和清理，这也是一般测试都会具备的四个阶段，我们分别来看一下。")]),t._v(" "),a("p",[t._v("准备。这个阶段是为了测试所做的一些准备，比如启动外部依赖的服务，存储一些预置的数据。在我们这个例子里面就是设置所需组件的行为，然后将这些组件组装了起来。")]),t._v(" "),a("p",[t._v("执行。这个阶段是整个测试中最核心的部分，触发被测目标的行为。通常来说，它就是一个测试点，在大多数情况下，执行应该就是一个函数调用。如果是测试外部系统，就是发出一个请求。在我们这段代码里，它就是调用了一个函数。")]),t._v(" "),a("p",[t._v("断言。断言是我们的预期，它负责验证执行的结果是否正确。比如，被测系统是否返回了正确的应答。在这个例子，我们验证的是 Todo 项的内容是否是我们添加进去的内容。")]),t._v(" "),a("p",[t._v("清理。清理是一个可能会有的部分。如果在测试中使到了外部资源，在这个部分要及时地释放掉，保证测试环境被还原到一个最初的状态，就像什么都没发生过一样。比如，我们在测试过程中向数据库插入了数据，执行之后，要删除测试过程中插入的数据。一些测试框架对一些通用的情况已经提供支持，比如之前我们用到的临时文件。")])])}),[],!1,null,null,null);s.default=e.exports}}]);