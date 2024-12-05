(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{660:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img.starfish.ink/design-pattern/banner-singleton.jpg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("面试官：带笔了吧，那写两种单例模式的实现方法吧")]),t._v(" "),a("p",[t._v("沙沙沙刷刷刷~~~ 写好了")]),t._v(" "),a("p",[t._v("面试官：你这个是怎么保证线程安全的，那你知道，volatile 关键字? 类加载器？锁机制？？？？\n点赞+收藏 就学会系列，文章收录在 GitHub "),a("a",{attrs:{href:"https://github.com/Jstarfish/JavaKeeper",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaKeeper"),a("OutboundLink")],1),t._v(" ，N线互联网开发必备技能兵器谱")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i01piccdn.sogoucdn.com/d4a728c10d74ab67",alt:""}})]),t._v(" "),a("p",[t._v("单例模式，从我看 《Java 10分钟入门》那天就听过的一个设计模式，还被面试过好几次的设计模式问题，今天一网打尽~~")]),t._v(" "),a("p",[t._v("有一些对象我们确实只需要一个，比如，线程池、数据库连接、缓存、日志对象等，如果有多个的话，会造成程序的行为异常，资源使用过量或者不一致的问题。你也许会说，这种我用全局变量不也能实现吗，还整个单例模式，好像你很流弊的样子，如果将对象赋值给一个全局变量，那程序启动就会创建好对象，万一这个对象很耗资源，我们还可能在某些时候用不到，这就造成了资源的浪费，不合理，所以就有了单例模式。")]),t._v(" "),a("h2",{attrs:{id:"单例模式的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模式的定义"}},[t._v("#")]),t._v(" 单例模式的定义")]),t._v(" "),a("p",[a("strong",[t._v("单例模式确保一个类只有一个实例，并提供一个全局唯一访问点")])]),t._v(" "),a("h2",{attrs:{id:"单例模式的类图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模式的类图"}},[t._v("#")]),t._v(" 单例模式的类图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.starfish.ink/design-pattern/singleton-class.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"单例模式的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模式的实现"}},[t._v("#")]),t._v(" 单例模式的实现")]),t._v(" "),a("blockquote",[a("p",[t._v("要实现一个单例，我们需要关注的点无外乎下面几个:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("构造函数需要是 private 访问权限的，这样才能避免外部通过 new 创建实例;")])]),t._v(" "),a("li",[a("p",[t._v("考虑对象创建时的线程安全问题;")])]),t._v(" "),a("li",[a("p",[t._v("考虑是否支持延迟加载;")])]),t._v(" "),a("li",[a("p",[t._v("考虑 getInstance() 性能是否高(是否加锁)。")])])])]),t._v(" "),a("h3",{attrs:{id:"饿汉式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#饿汉式"}},[t._v("#")]),t._v(" 饿汉式")]),t._v(" "),a("ul",[a("li",[t._v("static 变量在类装载的时候进行初始化")]),t._v(" "),a("li",[t._v("多个实例的 static 变量会共享同一块内存区域")])]),t._v(" "),a("p",[t._v("用这两个知识点写出的单例类就是饿汉式了，初始化类的时候就创建，饥不择食，饿汉")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构造私有化，防止直接new")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//静态初始化器（static initializer）中创建实例，保证线程安全")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("饿汉式是线程安全的，JVM 在加载类时马上创建唯一的实例对象，且只会装载一次。")]),t._v(" "),a("p",[t._v("Java 实现的单例是一个虚拟机的范围，因为装载类的功能是虚拟机的，所以一个虚拟机通过自己的ClassLoader 装载饿汉式实现单例类的时候就会创建一个类实例。（如果一个虚拟机里有多个ClassLoader的话，就会有多个实例）")]),t._v(" "),a("blockquote",[a("p",[t._v("JDK 中，"),a("code",[t._v("java.lang.Runtime")]),t._v(" 就是经典的单例模式（饿汉式）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.starfish.ink/design-pattern/singleton-runtime.png",alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"懒汉式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒汉式"}},[t._v("#")]),t._v(" 懒汉式")]),t._v(" "),a("p",[t._v("懒汉式，就是实例在用到的时候才去创建，比较“懒”")]),t._v(" "),a("p",[t._v("单例模式的懒汉式实现方式体现了"),a("strong",[t._v("延迟加载")]),t._v("的思想（延迟加载也称懒加载 Lazy Load，就是一开始不要加载资源或数据，等到要使用的时候才加载）")]),t._v(" "),a("h4",{attrs:{id:"同步方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步方法"}},[t._v("#")]),t._v(" 同步方法")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解决了线程不安全问题，但是效率太低了，每个线程想获得类的实例的时候，都需要同步方法，不推荐")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            singleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("饿汉式不支持延迟加载，懒汉式有性能问题，不支持高并发。所以就有了双重检测实现方式。")]),t._v(" "),a("h4",{attrs:{id:"双重检查加锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双重检查加锁"}},[t._v("#")]),t._v(" 双重检查加锁")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//volatitle关键词确保，多线程正确处理singleton")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    singleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Double-Check 概念（进行两次检查）是多线程开发中经常使用的，为什么需要双重检查锁呢？因为第一次检查是确保之前是一个空对象，而非空对象就不需要同步了，空对象的线程然后进入同步代码块，如果不加第二次空对象检查，两个线程同时获取同步代码块，一个线程进入同步代码块，另一个线程就会等待，而这两个线程就会创建两个实例化对象，所以需要在线程进入同步代码块后再次进行空对象检查，才能确保只创建一个实例化对象。")]),t._v(" "),a("p",[t._v("双重检查加锁（double checked locking）线程安全、延迟加载、效率比较高")]),t._v(" "),a("p",[a("strong",[t._v("volatile")]),t._v("：volatile一般用于多线程的可见性，这里用来防止"),a("strong",[t._v("指令重排")]),t._v("（防止 "),a("code",[t._v("new Singleton")]),t._v(" 时指令重排序导致其他线程获取到未初始化完的对象）。被volatile 修饰的变量的值，将不会被本地线程缓存，所有对该变量的读写都是直接操作共享内存，从而确保多个线程能正确的处理该变量。")]),t._v(" "),a("h5",{attrs:{id:"指令重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令重排"}},[t._v("#")]),t._v(" 指令重排")]),t._v(" "),a("p",[t._v("指令重排是指在程序执行过程中, 为了性能考虑, 编译器和 CPU 可能会对指令重新排序。")]),t._v(" "),a("p",[t._v("Java 中创建一个对象，往往包含三个过程。对于 "),a("code",[t._v("singleton = new Singleton()")]),t._v("，这不是一个原子操作，在 JVM 中包含如下三个过程。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("给 singleton 分配内存")])]),t._v(" "),a("li",[a("p",[t._v("调用 Singleton 的构造函数来初始化成员变量，形成实例")])]),t._v(" "),a("li",[a("p",[t._v("将 singleton 对象指向分配的内存空间（执行完这步 singleton才是非 null 了）")])])]),t._v(" "),a("p",[t._v("但是，由于 JVM 会进行指令重排序，所以上面的第二步和第三步的顺序是不能保证的，最终的执行顺序可能是 1-2-3，也可能是 1-3-2。如果是 1-3-2，则在 3 执行完毕，2 未执行之前，被另一个线程抢占了，这时 instance 已经是非 null 了（但却没有初始化），所以这个线程会直接返回 instance，然后使用，那肯定就会报错了，所以要加入 volatile关键字。")]),t._v(" "),a("h3",{attrs:{id:"静态内部类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态内部类"}},[t._v("#")]),t._v(" 静态内部类")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingletonInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INSTANCE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SingletonInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INSTANCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("采用类加载的机制来保证初始化实例时只有一个线程；")]),t._v(" "),a("p",[t._v("静态内部类方式在 Singleton 类被装载的时候并不会立即实例化，而是在调用 getInstance 的时候，才去装载内部类 SingletonInstance ,从而完成 Singleton 的实例化")]),t._v(" "),a("p",[t._v("类的静态属性只会在第一次加载类的时候初始化，所以，JVM 帮我们保证了线程的安全性，在类初始化时，其他线程无法进入")]),t._v(" "),a("p",[t._v("优点：线程安全，利用静态内部类实现延迟加载，效率较高，推荐使用")]),t._v(" "),a("h3",{attrs:{id:"枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[t._v("#")]),t._v(" 枚举")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INSTANCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("借助 JDK5 添加的枚举实现单例，不仅可以避免多线程同步问题，还能防止反序列化重新创建新的对象，但是在枚举中的其他任何方法的线程安全由程序员自己负责。还有防止上面的通过反射机制调用私用构造器。")]),t._v(" "),a("p",[t._v("这种方式是《Effective Java》 作者 Josh Bloch 提倡的方式。")]),t._v(" "),a("h2",{attrs:{id:"单例模式注意事项和细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模式注意事项和细节"}},[t._v("#")]),t._v(" 单例模式注意事项和细节")]),t._v(" "),a("ul",[a("li",[t._v("单例模式保证了系统内存中该类只存在一个对象，节省了系统资源，对于一些需要频繁创建销毁的对象，使用单例模式可以提高系统性能")]),t._v(" "),a("li",[t._v("当想实例化一个单例类的时候，必须要记住使用相应的获取对象的方法，而不是使 用new")]),t._v(" "),a("li",[t._v("单例模式使用的场景：需要频繁的进行创建和销毁的对象、创建对象时耗时过多或 耗费资源过多(即:重量级对象)，但又经常用到的对象、工具类对象、频繁访问数 据库或文件的对象(比如数据源、session工厂等)")])])])}),[],!1,null,null,null);s.default=e.exports}}]);