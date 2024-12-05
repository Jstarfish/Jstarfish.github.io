(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{664:function(t,e,a){"use strict";a.r(e);var v=a(2),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"分布式架构中的一些名词理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式架构中的一些名词理解"}},[t._v("#")]),t._v(" 分布式架构中的一些名词理解")]),t._v(" "),a("blockquote",[a("p",[t._v("一说分布式架构，就会看到各种 SOA、RMI、RPC 等等一脸懵逼的词汇，而且还特别容易混淆各种概念，记住这些吧，就不会质疑自己程序员的身份了。")])]),t._v(" "),a("h3",{attrs:{id:"soa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soa"}},[t._v("#")]),t._v(" SOA")]),t._v(" "),a("p",[t._v("SOA(Service Oriented Architecture) ，中文意思就是"),a("strong",[t._v("面向服务架构")]),t._v("，它其实就是一种软件架构设计思想，不是具体的某种技术实现。")]),t._v(" "),a("p",[t._v("为什么会出现这种思想呢？")]),t._v(" "),a("p",[t._v("举一个列子，我们的某个产品，立项初期只有 PC 端的 Web 网站，提供了注册、登录和各种业务功能，后来项目火了，老板说需要做移动端的对应产品，Android 、IOS 一起搞，用户管理用同一个 DB，这时候我们就会发现如果在各个版本都做一套注册、登录这样的功能，不止效率低，而且要有相同的业务改动，这几个地方都要改。")]),t._v(" "),a("p",[t._v("这时候，Java 程序员、Android 程序员、IOS 程序员就商量说能不能搞个单独的项目提供注册、登录这样的用户服务，我们可以通过调用该服务的方法或者函数去实现功能，这样一来，以后就算又要做各种小程序版本，也可以去使用这个服务，不需要单独开发了。")]),t._v(" "),a("p",[t._v("这其实就属于 SOA 的思想。")]),t._v(" "),a("p",[t._v("后来随着产品的流量越来越大，项目也越来越大，我们会拆分出各种各样的服务，当服务越来越多，调用方也越来越多的时候，他们之间的关系就变得比较混乱了，作为开发者，我们肯定要清楚的知道调用方和服务方的各种关系和数据，所以就又出现了 『"),a("strong",[t._v("服务治理")]),t._v(" 』这样的概念，（可以类比环境治理），包括服务的监控，权限管理等等这样的功能，比如  dubbo 或者 SpringCloud 这类。")]),t._v(" "),a("blockquote",[a("p",[t._v("SOA 是一种设计方法，其中包含多个服务， 而服务之间通过配合最终会提供一系列的功能。一个服务通常以独立的形式存在于操作系统进程中。服务之间通过网络调用，而非采用进程内调用的方式进行通信。   ——《微服务设计》")])]),t._v(" "),a("p",[t._v("SOAP、REST、RPC 就是根据这种设计模式构建出来的规范，其中 SOAP 通俗理解就是 http+xml 的形式，REST 就是 http+json 的形式，RPC 大都是基于 socket 的形式")]),t._v(" "),a("h3",{attrs:{id:"soap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soap"}},[t._v("#")]),t._v(" SOAP")]),t._v(" "),a("p",[t._v("Simple Object Access Protocol，即简单对象访问协议， 简称 SOAP。")]),t._v(" "),a("p",[t._v("SOAP 是一个用于分布式环境的、轻量级的、基于 XML 进行信息交换的通信协议，主要用于 Web 服务（web service）中。")]),t._v(" "),a("p",[t._v("还是用刚才的例子，现在我们的项目又拆分出来订单服务，我们要查询订单，")]),t._v(" "),a("p",[t._v("用一个简单的例子来说明 SOAP 使用过程，一个 SOAP 消息可以发送到一个具有 Web Service 功能的 Web 站点。")]),t._v(" "),a("p",[t._v("https://segmentfault.com/a/1190000003772529")]),t._v(" "),a("p",[t._v("例如，一个含有房价信息的数据库，消息的参数中标明这是一个查询消息，此站点将返回一个 XML 格式的信息，其中包含了查询结果（价格，位置，特点，或者其他信息）。由于数据是用一种标准化的可分析的结构来传递的，所以可以直接被第三方站点所利用。")]),t._v(" "),a("h3",{attrs:{id:"rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[t._v("#")]),t._v(" RPC")]),t._v(" "),a("p",[t._v("了解上面的RMI，它的主要的流程就是Client<--\x3estub<--\x3e[NETWORK]<--\x3eskeleton<--\x3eServer，还有一个比较重要的概念就是RMIRegistry，其实大家网上去查RPC的时候流程其实都差不多，可能叫法和底层东西有点不一样，其实其实现所遵循的模型还是类似的。主要的区别的话是RMI是只适用于java的，而RPC任何语言都可以；第二点就是他们两者的调用方式不一样，最终的目标还是一致")]),t._v(" "),a("p",[t._v("其与RMI大致的区别")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("RPC 跨语言，而 RMI只支持Java。")])]),t._v(" "),a("li",[a("p",[t._v("RMI 调用远程对象方法，允许方法返回 Java 对象以及基本数据类型，而RPC 不支持对象的概念，传送到 RPC服务的消息由外部数据表示 (External Data Representation, XDR) 语言表示，这种语言抽象了字节序类和数据类型结构之间的差异。只有由 XDR 定义的数据类型才能被传递， 可以说 RMI 是面向对象方式的 Java RPC 。")])]),t._v(" "),a("li",[a("p",[t._v("在方法调用上，RMI中，远程接口使每个远程方法都具有方法签名（url）。如果一个方法在服务器上执行，但是没有相匹配的签名被添加到这个远程接口上，那么这个新方法就不能被RMI客户方所调用。")])])]),t._v(" "),a("p",[t._v("在RPC中，当一个请求到达RPC服务器时，这个请求就包含了一个参数集和一个文本值，通常形成“classname.methodname”的形式。这就向RPC服务器表明，被请求的方法在为 “classname”的类中，名")]),t._v(" "),a("p",[t._v("叫“methodname”。然后RPC服务器就去搜索与之相匹配的类和方法，并把它作为那种方法参数类型的输入。这里的")]),t._v(" "),a("p",[t._v("参数类型是与RPC请求中的类型是匹配的。一旦匹配成功，这个方法就被调用了，其结果被编码后返回客户方。说的直白一点就是rmi是自己写一个url，如果正确就获得相应的stub，而rpc的url是从注册中心去拿的，不会出现url不对的情况")]),t._v(" "),a("p",[t._v("http://blog.jobbole.com/92290/")]),t._v(" "),a("h3",{attrs:{id:"rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[t._v("#")]),t._v(" rest")]),t._v(" "),a("p",[t._v("比如有个url：http:www.test.com/user/1，这个地址既要表示删除id为1的用户、又要表示修改id为1的用户，还要表达获取id为1的用户，那么，就要用到http1.1的不同的请求方法：get、post、delete、put，")]),t._v(" "),a("p",[t._v("对于rest这个东西，其实本人一点也没有接触吧，一下两个网址，本人认为比较好，大伙可以去看一下，本人就rest就不多阐述了（怕误导大家，哈哈）")]),t._v(" "),a("p",[t._v("http://www.ruanyifeng.com/blog/2011/09/restful.html")]),t._v(" "),a("p",[t._v("http://www.jianshu.com/p/65ab865a5e9f")]),t._v(" "),a("h3",{attrs:{id:"rmi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rmi"}},[t._v("#")]),t._v(" RMI")]),t._v(" "),a("p",[t._v("SOA思想提出以后，就有很多基于在这个模型上的产物，很多适用于分布式的产物，同时也是越来越庞大系统的产物。Java RMI （Remote Method Invocation 远程方法调用）是用Java在JDK1.1中实现的，它大大增强了Java开发分布式应用的能力。而RMI就是开发百分之百纯Java的网络分布式应用系统的核心解决方案，所以如果不是java的系统就不能使用RMI，这也是其缺点之一。RMI全部的宗旨就是尽可能简化远程接口对象的使用，相当于在服务器端暴露服务，通过bind或者rebind方法注册到RMIRegistry中，注册的信息中包含url，以及相应的类。客户端在在注册中心根据url得到远程对象（stub，存根），然后调用stub远程调用方法。")]),t._v(" "),a("h3",{attrs:{id:"soa架构和微服务架构的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soa架构和微服务架构的区别"}},[t._v("#")]),t._v(" SOA架构和微服务架构的区别")]),t._v(" "),a("blockquote",[a("p",[t._v("首先SOA和微服务架构是一个层面的东西，而对于ESB和微服务网关是一个层面的东西，一个谈到是架构风格和方法，一个谈的是实现工具或组件。")]),t._v(" "),a("p",[t._v("1.SOA（Service Oriented Architecture）“面向服务的架构”:他是一种设计方法，其中包含多个服务， 服务之间通过相互依赖最终提供一系列的功能。一个服务通常以独立的形式存在与操作系统进程中。各个服务之间通过网络调用。")]),t._v(" "),a("p",[t._v("2.微服务架构:其实和 SOA 架构类似,微服务是在 SOA 上做的升华，微服务架构强调的一个重点是“业务需要彻底的组件化和服务化”，原有的单个业务系统会拆分为多个可以独立开发、设计、运行的小应用。这些小应用之间通过服务完成交互和集成。")]),t._v(" "),a("p",[t._v("微服务架构 = 80%的SOA服务架构思想 + 100%的组件化架构思想 + 80%的领域建模思想")])]),t._v(" "),a("h3",{attrs:{id:"api网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api网关"}},[t._v("#")]),t._v(" API网关")]),t._v(" "),a("p",[t._v("API网关是一个服务器，是系统的唯一入口。")]),t._v(" "),a("p",[t._v("API 网关并不是微服务场景中必须的组件，如下图，不管有没有 API 网关，后端微服务都可以通过 API 很好地支持"),a("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%AE%A2%E6%88%B7%E7%AB%AF&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A578705309%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("客户端"),a("OutboundLink")],1),t._v("的访问。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pica.zhimg.com/80/v2-0903a05306217b52effca6ebb80b45ea_1440w.jpg?source=1940ef5c",alt:"img"}})]),t._v(" "),a("p",[t._v("但对于服务数量众多、复杂度比较高、规模比较大的业务来说，引入 API 网关也有一系列的好处：")]),t._v(" "),a("ul",[a("li",[t._v("聚合接口使得服务对调用者透明，客户端与后端的耦合度降低")]),t._v(" "),a("li",[t._v("聚合后台服务，节省流量，提高性能，提升用户体验")]),t._v(" "),a("li",[t._v("提供安全、流控、过滤、缓存、计费、监控等 API 管理功能")])]),t._v(" "),a("p",[t._v("从面向对象设计的角度看，它与外观模式类似。API网关封装了系统内部架构，为每个客户端提供一个定制的API。它可能还具有其它职责，如身份验证、监控、负载均衡、缓存、请求分片与管理、静态响应处理。API网关方式的核心要点是，所有的客户端和消费端都通过统一的网关接入微服务，在网关层处理所有的非业务功能。通常，网关也是提供REST/HTTP的访问API。服务端通过API-GW注册和管理服务。")]),t._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("http://www.jianshu.com/p/2c78554a3f36")])]),t._v(" "),a("li",[a("p",[t._v("http://blog.csdn.net/guyuealian/article/details/51992182")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);