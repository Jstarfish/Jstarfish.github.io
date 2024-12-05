(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{501:function(r,e,t){r.exports=t.p+"assets/img/spring-overview.7fe0ed38.png"},502:function(r,e,t){r.exports=t.p+"assets/img/spring-tree.344255ff.png"},705:function(r,e,t){"use strict";t.r(e);var v=t(2),s=Object(v.a)({},(function(){var r=this,e=r.$createElement,v=r._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("h2",{attrs:{id:"_1-spring是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring是什么"}},[r._v("#")]),r._v(" 1. Spring是什么")]),r._v(" "),v("ul",[v("li",[v("p",[r._v("Spring 是一个开源框架")])]),r._v(" "),v("li",[v("p",[r._v("Spring 为简化企业级应用开发而生，使用 Spring 可以使简单的 JavaBean实现以前只有 EJB 才能实现的功能")])]),r._v(" "),v("li",[v("p",[r._v("Spring 是一个 IOC(DI) 和 AOP 容器框架")])])]),r._v(" "),v("p",[r._v("具体描述 Spring")]),r._v(" "),v("ul",[v("li",[r._v("轻量级：Spring 是非侵入性的 - 基于 Spring 开发的应用中的对象可以不依赖于 Spring 的 API")]),r._v(" "),v("li",[r._v("依赖注入(DI --- dependency injection、IOC)")]),r._v(" "),v("li",[r._v("面向切面编程(AOP --- aspect oriented programming)")]),r._v(" "),v("li",[r._v("容器: Spring 是一个容器, 因为它包含并且管理应用对象的生命周期")]),r._v(" "),v("li",[r._v("框架: Spring 实现了使用简单的组件配置组合成一个复杂的应用. 在 Spring 中可以使用 XML 和 Java 注解组合这些对象")]),r._v(" "),v("li",[r._v("一站式：在 IOC 和 AOP 的基础上可以整合各种企业应用的开源框架和优秀的第三方类库（实际上 Spring 自身也提供了展现层的 SpringMVC和 持久层的 Spring JDBC）")])]),r._v(" "),v("p",[r._v("Spring的核心是"),v("strong",[r._v("控制反转")]),r._v("（IOC）和"),v("strong",[r._v("面向切面")]),r._v("（AOP）")]),r._v(" "),v("h2",{attrs:{id:"_2-spring特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring特点"}},[r._v("#")]),r._v(" 2. Spring特点")]),r._v(" "),v("ol",[v("li",[r._v("方便解耦，简化开发：通过IOC容器，将对象之间的依赖关系交给Spring控制，避免编码过度耦合")]),r._v(" "),v("li",[r._v("AOP编程的支持：面向切面编程，解决传统OOP难以解决的问题")]),r._v(" "),v("li",[r._v("声明式事物的支持")]),r._v(" "),v("li",[r._v("方便程序的测试：对Junit4的完美支持，方便通过注解@Test进行测试")]),r._v(" "),v("li",[r._v("方便整合集成各种优秀框架")]),r._v(" "),v("li",[r._v("降低Java EE API的使用难度")]),r._v(" "),v("li",[r._v("其源代码是经典学习案例")])]),r._v(" "),v("h2",{attrs:{id:"_3-spring-模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-模块"}},[r._v("#")]),r._v(" 3. Spring 模块")]),r._v(" "),v("p",[v("img",{attrs:{src:t(501),alt:""}})]),r._v(" "),v("p",[r._v("Spring 框架是一个分层架构，由 7 个定义良好的模块组成：")]),r._v(" "),v("h3",{attrs:{id:"core-container"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#core-container"}},[r._v("#")]),r._v(" Core Container")]),r._v(" "),v("p",[r._v("核心容器由"),v("code",[r._v("Spring - Core")]),r._v("、"),v("code",[r._v("Spring -bean")]),r._v("、"),v("code",[r._v("Spring -context")]),r._v("、"),v("code",[r._v("Spring -context-support")]),r._v("和"),v("code",[r._v("Spring - Expression")]),r._v(" (Spring表达式语言)模块组成 。 "),v("code",[r._v("spring-core")]),r._v("和"),v("code",[r._v("spring-beans")]),r._v("模块提供了框架的基本功能，包括IoC和依赖项注入特性。其主要组件是BeanFactory，它是工厂模式的实现。BeanFactory使用控制反转模式将程序的配置和依赖性规范与实际的应用程序代码分开")]),r._v(" "),v("h3",{attrs:{id:"aop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[r._v("#")]),r._v(" AOP")]),r._v(" "),v("p",[r._v("通过配置管理特性， "),v("code",[r._v("spring-aop")]),r._v(" 模块直接将面向切面的编程功能集成到了 Spring 框架中")]),r._v(" "),v("h3",{attrs:{id:"aspects"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aspects"}},[r._v("#")]),r._v(" Aspects")]),r._v(" "),v("p",[r._v("独立的"),v("code",[r._v("spring-aspects")]),r._v("模块提供了与AspectJ的集成")]),r._v(" "),v("h3",{attrs:{id:"instrumentation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#instrumentation"}},[r._v("#")]),r._v(" Instrumentation")]),r._v(" "),v("p",[v("code",[r._v("spring-instrument")]),r._v(" 模块提供了类检测支持和类加载器实现，以在某些应用程序服务器中使用 ，  "),v("code",[r._v("spring-instrument-tomcat")]),r._v("包含Tomcat的Spring检测代理")]),r._v(" "),v("h3",{attrs:{id:"messaging"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#messaging"}},[r._v("#")]),r._v(" Messaging")]),r._v(" "),v("p",[v("code",[r._v("spring-messaging")]),r._v(" 模块包含从 "),v("code",[r._v("Message")]),r._v("，"),v("code",[r._v("MessageChannel")]),r._v("，"),v("code",[r._v("MessageHandler")]),r._v(" 等其他基于消息的基础应用中得到的抽象。该模块还包含一系列的注解来讲消息映射到方法上，和SpringMVC注解类似")]),r._v(" "),v("h3",{attrs:{id:"data-access-integration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#data-access-integration"}},[r._v("#")]),r._v(" Data Access/Integration")]),r._v(" "),v("p",[r._v("数据访问/集成 由JDBC、ORM、OXM、JMS和 Transaction 模块组成")]),r._v(" "),v("p",[v("code",[r._v("spring-jdbc")]),r._v("提供JDBC抽象层 ，使我们从繁重的JDBC编程中解脱出来，并且不再需要为解析不同的数据库的异常而烦恼。")]),r._v(" "),v("p",[v("code",[r._v("spring-tx")]),r._v("支持对所有 POJO 和实现了特定接口的类进行编程式和申明式事务管理。")]),r._v(" "),v("p",[v("code",[r._v("spring-orm")]),r._v("整合了流行的 ORM 应用程序接口，包括JPA、JDO和Hibernate。使用该模块我们可以任意使用这些ORM框架和Spring的其他功能（如上面的申明式事务管理）进行组合。")]),r._v(" "),v("p",[v("code",[r._v("spring-oxm")]),r._v("为 OXM 的实现提供抽象层，如 JAXB、Castor、XMLBeans、JiBX 和XStream。")]),r._v(" "),v("p",[v("code",[r._v("spring-jms")]),r._v(" 是Java消息服务，包含产生和接受消息 。Spring Framework 4.1将它并入在"),v("code",[r._v("spring-messaging")]),r._v(" 模块。")]),r._v(" "),v("h3",{attrs:{id:"web"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[r._v("#")]),r._v(" Web")]),r._v(" "),v("p",[r._v("Web层由"),v("code",[r._v("spring-web")]),r._v("、"),v("code",[r._v("spring-webmvc")]),r._v("、"),v("code",[r._v("spring-websocket")]),r._v("和"),v("code",[r._v("spring-webmvc-portlet")]),r._v(" 模块组成")]),r._v(" "),v("p",[v("code",[r._v("spring-web")]),r._v(" 包含基本的面向网络的集成特性，如文件分部上传，使用Servet监听器和面向网络的应用上下文初始化IoC容器。他还包括 HTTP 客户端和网络相关的 Spring远程支持。")]),r._v(" "),v("p",[v("code",[r._v("spring-webmvc")]),r._v(" 也被成为 "),v("em",[r._v("Web-Servlet")]),r._v(" 模块，包含Spring的模型-视图-控制器（model-view-controller，"),v("a",{attrs:{href:"http://docs.spring.io/spring/docs/4.3.0.BUILD-SNAPSHOT/spring-framework-reference/htmlsingle/#mvc-introduction",target:"_blank",rel:"noopener noreferrer"}},[v("em",[r._v("MVC")]),v("OutboundLink")],1),r._v(") 和 REST Web Services。 Spring MVC 框架是得实体模型代码和网络表单清楚地分离开来，还可以轻松集成Spring框架的其他特性。")]),r._v(" "),v("p",[v("code",[r._v("spring-webmvc-portlet")]),r._v(" 也被称为 "),v("em",[r._v("Web-Portlet")]),r._v(" 模块，在Portlet 容器中实现MVC，并且能使用"),v("code",[r._v("spring-webmvc")]),r._v(" 模块的功能")]),r._v(" "),v("h3",{attrs:{id:"test"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[r._v("#")]),r._v(" Test")]),r._v(" "),v("p",[v("code",[r._v("spring -test")]),r._v("模块支持使用JUnit或TestNG对Spring组件进行单元测试和集成测试")]),r._v(" "),v("p",[r._v("《Spring 揭秘》中的Spring框架总体结构")]),r._v(" "),v("p",[v("img",{attrs:{src:t(502),alt:""}})]),r._v(" "),v("p",[r._v("官方文档： https://docs.spring.io/spring/docs/4.3.26.RELEASE/spring-framework-reference/htmlsingle/")])])}),[],!1,null,null,null);e.default=s.exports}}]);