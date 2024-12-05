(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{561:function(v,_,r){"use strict";r.r(_);var e=r(2),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"微服务杂谈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务杂谈"}},[v._v("#")]),v._v(" 微服务杂谈")]),v._v(" "),r("blockquote",[r("p",[v._v("来源：https://www.rowkey.me/blog/2019/05/30/msa/")])]),v._v(" "),r("p",[r("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/cd0b6fb4-8913-4228-855f-e883c90f373e.jpg",alt:""}})]),v._v(" "),r("p",[v._v("这几年在Java工程师招聘时，会看到很多人的简历都写着使用了Spring Cloud做微服务实现，使用Docker做自动化部署，并且也会把这些做为自己的亮点。而比较有趣的这其中以小公司出来的人为绝大多数，大的公司出来的人简历上倒是很少提这些东西。")]),v._v(" "),r("p",[v._v("对于我自己来说，从15年就开始关注这一块，看过马丁.福勒最开始的关于微服务的论文、也看过不少对微服务的论证的英文文章和书，也研究过Spring Cloud、Sofa等开源实现以及Service mesh。考虑到我们公司研发团队人力不足、基础设施不完善，当初是没有推行微服务的。但随着看到上述的那种简历越来越多，有时候我也会疑问：难道真的不用微服务就落后了吗？公司的同事如果不掌握这些就真的没有竞争力了吗。而随着最近公司业务的逐步提升，研发人员越来越多，借着在梳理公司的微服务落地计划时，也梳理了一下微服务的相关知识点，也是本文的主要内容。")]),v._v(" "),r("p",[v._v("开篇之前先声明我对微服务的几点态度:")]),v._v(" "),r("blockquote",[r("ol",[r("li",[v._v("架构模式有很多，微服务不是唯一的选择也不是什么银弹。国内很多中小公司引入微服务都是在盲目追新，也能看出做此种技术选型的工程师基础架构素质的不足。")]),v._v(" "),r("li",[v._v("“你必须长的足够高才能使用微服务”。微服务基础设施，尤其是容器技术、自动化部署、自动化测试这些不完备，微服务形同虚设，不会带来什么质的提升。")]),v._v(" "),r("li",[v._v("微服务架构的关键不在于具体的实现，而在于如何合理地划分服务边界以及组织架构是否相匹配。不考虑研发团队的规模和组成就盲目上微服务是不良的技术选型。")]),v._v(" "),r("li",[v._v("Spring Boot是Spring全家桶的上层封装，并不是什么崭新的技术，也不是什么值得觉得成为自己杀手锏的技术。")]),v._v(" "),r("li",[v._v("Spring Cloud中Spring Cloud Netflix的组件是经过生产环境验证的，其他的则建议慎重选择。")])])]),v._v(" "),r("h2",{attrs:{id:"微服务是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务是什么"}},[v._v("#")]),v._v(" 微服务是什么")]),v._v(" "),r("p",[v._v("微服务起源于2005年Peter Rodgers博士在云端运算博览会提出的微Web服务(Micro-Web-Service)，根本思想类似于Unix的管道设计理念。2014年，由Martin Fowler 与 James Lewis共同提出了微服务的概念，定义了微服务架构风格是一种通过一套小型服务来开发单个应用的方法，每个服务运行在自己的进程中，并通过轻量级的机制进行通讯（HTTP API）。关键的三点是"),r("strong",[v._v("small、automated以及lightweight")]),v._v("。")]),v._v(" "),r("p",[v._v("对比SOA，微服务可以看做是SOA的子集，是轻量级的SOA，粒度更细的服务，独立进程、数据分离，更注重"),r("strong",[v._v("敏捷、持续交付、DevOps以及去中心化实践")]),v._v("。其共同的"),r("strong",[v._v("架构原理")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("单一职责")]),v._v(" "),r("li",[v._v("关注分离：控制与逻辑相分离")]),v._v(" "),r("li",[v._v("模块化和分而治之")])]),v._v(" "),r("p",[r("strong",[v._v("特点")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("用服务进行组件化")]),v._v(" "),r("li",[v._v("围绕业务能力进行组织")]),v._v(" "),r("li",[v._v("是产品而非项目")]),v._v(" "),r("li",[v._v("端点智能化和哑管道: 控制逻辑都在端点，管道仅仅是传输")]),v._v(" "),r("li",[v._v("全自动化部署")]),v._v(" "),r("li",[v._v("语言和数据的去中心化控制")]),v._v(" "),r("li",[v._v("面向失败设计")]),v._v(" "),r("li",[v._v("渐进式设计")])]),v._v(" "),r("p",[v._v("综合来看，其优缺点如下：")]),v._v(" "),r("p",[r("strong",[v._v("优点")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("模块的强边界")]),v._v(" "),r("li",[v._v("独立部署")]),v._v(" "),r("li",[v._v("技术选型的多样性")])]),v._v(" "),r("p",[r("strong",[v._v("缺点")]),v._v("：")]),v._v(" "),r("ul",[r("li",[v._v("分布式带来编程复杂度，远程调用的消耗")]),v._v(" "),r("li",[v._v("舍弃强一致性，实现最终一致性")]),v._v(" "),r("li",[v._v("操作复杂性要求有一个成熟的运维团队或者运维基础设施")])]),v._v(" "),r("h2",{attrs:{id:"为什么要采用微服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要采用微服务"}},[v._v("#")]),v._v(" 为什么要采用微服务")]),v._v(" "),r("p",[v._v("是否选择微服务取决于你要设计的系统的复杂度。微服务是用来把控复杂系统的，但是随之而来的就是引入了微服务本身的复杂度。需要解决包括自动化部署、监控、容错处理、最终一致性等其他分布式系统面临的问题。即使已经有一些普遍使用的解决方案，但是仍然是有不小的成本的。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/91b3378a-de00-4582-b8aa-cea841c877ef.png",alt:""}})]),v._v(" "),r("p",[v._v("生产力和复杂度的关系如图所示，可见系统越复杂，微服务带来的收益越大。此外，无论是单体应用还是微服务，团队的技能都需要能够把控住。")]),v._v(" "),r("p",[v._v("马丁.福勒的一个观点是：除非管理单体应用的成本已经太复杂了（太大导致很难修改和部署），否则都不要考虑微服务。大部分应用都应该选择单体架构，做好单体应用的模块化而不是拆分成服务。")]),v._v(" "),r("p",[v._v("因此，"),r("strong",[v._v("系统一开始采用单体架构，做好模块化，之后随着系统变得越来越复杂、模块/服务间的边界越来越清晰，再重构为微服务架构是一个合理的架构演化路径。")])]),v._v(" "),r("p",[r("strong",[v._v("四个可以考虑上微服务的情况")]),v._v("：")]),v._v(" "),r("ol",[r("li",[v._v("多人开发一个模块/项目，提交代码频繁出现大量冲突。")]),v._v(" "),r("li",[v._v("模块间严重耦合，互相依赖，每次变动需要牵扯多个团队，单次上线需求太多，风险大。")]),v._v(" "),r("li",[v._v("主要业务和次要业务耦合，横向扩展流程复杂。")]),v._v(" "),r("li",[v._v("熔断降级全靠if-else。")])]),v._v(" "),r("p",[r("strong",[v._v("微服务的三个阶段")]),v._v("：")]),v._v(" "),r("ol",[r("li",[v._v("微服务1.0：仅使用注册发现，基于SpringCloud或者Dubbo进行开发。")]),v._v(" "),r("li",[v._v("微服务2.0：使用了熔断、限流、降级等服务治理策略，并配备完整服务工具和平台。")]),v._v(" "),r("li",[v._v("微服务3.0：Service Mesh将服务治理作为通用组件，下沉到平台层实现，应用层仅仅关注业务逻辑，平台层可以根据业务监控自动调度和参数调整，实现AIOps和智能调度。")])]),v._v(" "),r("h2",{attrs:{id:"微服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[v._v("#")]),v._v(" 微服务架构")]),v._v(" "),r("h3",{attrs:{id:"先决条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[v._v("#")]),v._v(" 先决条件")]),v._v(" "),r("ul",[r("li",[v._v("快速的环境提供能力：依赖于云计算、容器技术，快速交付环境。")]),v._v(" "),r("li",[v._v("基本的监控能力：包括基础的技术监控和业务监控。")]),v._v(" "),r("li",[v._v("快速的应用部署能力：需要部署管道提供快速的部署能力。")]),v._v(" "),r("li",[v._v("Devops文化：需要具有良好的持续交付能力，包括全链路追踪、快速环境提供和部署等，还需要快速的反应能力（对问题、故障的快速响应），开发和运维的协同工作。")])]),v._v(" "),r("p",[v._v("此外，根据康威定律和逆康威定律（技术架构倒逼组织架构改进），组织架构也是一个很关键的因素。对应于微服务架构，组织架构需要遵循以下原则：")]),v._v(" "),r("ol",[r("li",[v._v("一个微服务由一个团队维护，团队成员以三人为宜。")]),v._v(" "),r("li",[v._v("单个团队的任务和发展是独立的，不受其他因素影响。")]),v._v(" "),r("li",[v._v("团队是功能齐全、全栈、自治的，扁平、自我管理。")])]),v._v(" "),r("h3",{attrs:{id:"基础设施"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础设施"}},[v._v("#")]),v._v(" 基础设施")]),v._v(" "),r("p",[v._v("微服务的推行需要依赖于很多底层基础设施，包括提供微服务的编译、集成、打包、部署、配置等工作，采用PaaS平台解决微服务从开发到运行的全生命周期管理，同时提供异构环境管理、容器资源隔离与互通、服务伸缩漂移、服务升级与回退、服务熔断与降级、服务注册与发现。")]),v._v(" "),r("ol",[r("li",[v._v("最基本的基础设施\n"),r("ul",[r("li",[v._v("进程间通讯机制：微服务是独立进程的，需要确定之间的通讯方式。")]),v._v(" "),r("li",[v._v("服务发现+服务路由：提供服务注册中心，服务提供者和消费者通过服务发现获取服务的信息从而调用服务，实现服务的负载均衡等。")]),v._v(" "),r("li",[v._v("服务容错：微服务架构中，由于服务非常多，往往是一个服务挂了，整个请求链路的服务都受到影响，因此需要服务容错，在服务调用失败的时候能够处理错误或者快速失败，包括熔断、fallback、重试、流控和服务隔离等。")]),v._v(" "),r("li",[v._v("分布式事务支持：随着业务拆分为服务，那么有时候不可避免的就是跨服务的事务，即分布式事务的问题。原则是尽量避免分布式事务，如果无法避免那么可以使用消息系统或者CQRS和Event Sourcing方案来实现最终一致性。如果需要强一致性，则有两阶段提交、三阶段提交、TCC等分布式事务解决方案。")])])]),v._v(" "),r("li",[v._v("提升外部服务对接效率和内部开发效率\n"),r("ul",[r("li",[v._v("API网关：负责外部系统的访问，负责跨横切面的公共层面的工作，包括安全、日志、权限控制、传输加密、请求转发、流量控制等。典型的网关功能即对外暴露一个域名xx.com，根据第一级目录做反向路由xx.com/user，xx.com/trade。每一级目录，如user、trade对应一个服务的域名。此外，API网关也可以有服务编排的功能（不推荐）。")]),v._v(" "),r("li",[v._v("接口框架：规范服务之间通讯使用的数据格式、解析包、自解释文档，便于服务使用方快速上手等。")])])]),v._v(" "),r("li",[v._v("提升测试和运维效率\n"),r("ul",[r("li",[v._v("配置中心：运行时配置管理能够解决动态修改配置并批量生效的问题。包括配置版本管理、配置项管理、节点管理、配置同步等。")]),v._v(" "),r("li",[v._v("持续交付：包括持续集成、自动化部署等流程。目的就是小步迭代，快速交付。\n"),r("ul",[r("li",[v._v("持续集成：这一部分并非是微服务特定的，对于之前的单体应用，此部分一般来说也是必要的。主要是指通过自动化手段，持续地对代码进程编译构建、自动化测试，以得到快速有效的质量反馈，从而保证代码的顺利交付。自动化测试包括代码级别的单元测试、单个系统的集成测试、系统间的接口测试。")]),v._v(" "),r("li",[v._v("自动化部署：微服务架构，节点数动辄上百上千，自动化部署能够提高部署速度和部署频率，从而保证持续交付。包括版本管理、资源管理、部署操作、回滚操作等功能。而对于微服务的部署方式，包括"),r("strong",[v._v("蓝绿部署、滚动部署以及金丝雀部署")]),v._v("。")])])])])]),v._v(" "),r("li",[v._v("进一步提升运维效率\n"),r("ul",[r("li",[v._v("服务监控：微服务架构下节点数目众多，需要监控的机器、网络、进程、接口等的数量大大增加，需要一个强大的监控系统，能够提供实时搜集信息进行分析以及实时分析之上的预警。包括监控服务的"),r("strong",[v._v("请求次数、响应时间分布、最大/最小响应值、错误码分布")]),v._v("等")]),v._v(" "),r("li",[v._v("服务跟踪：跟踪一个请求的完整路径，包括"),r("strong",[v._v("请求发起时间、响应时间、响应码、请求参数、返回结果")]),v._v("等信息，也叫做全链路跟踪。通常的服务监控可以和服务监控做在一起，宏观信息由服务跟踪呈现，微观单个服务/节点的信息由服务监控呈现。服务跟踪目前的实现理论基本都是Google的Dapper论文。")]),v._v(" "),r("li",[v._v("服务安全：内网之间的微服务调用原则上讲应该是都可以互相访问写，一般并不需要权限控制，但有时候限于业务要求，会对接口、数据等方面有安全控制的要求。此部分可以以配置的方式存在于服务注册中心中，和服务绑定，在请求时由做为服务提供者的服务节点进行安全策略控制。配置则可以存储在配置中心以方便动态修改。")])])])]),v._v(" "),r("p",[v._v("在微服务数量很少的情况下，以上基础设施的优先级自上而下降低。否则，仅仅依赖人工操作，则投入产出比会很低。")]),v._v(" "),r("p",[v._v("还需要提到的是Docker容器技术。虽然这个对于微服务并不是必须的，但是容器技术"),r("strong",[v._v("轻量级、灵活、与应用依存、屏蔽环境差异")]),v._v("的特性对于持续交付的实现是至关重要的，即使对于传统的单体应用也能够给其带来交付效率的大幅提升。")]),v._v(" "),r("h3",{attrs:{id:"架构设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构设计模式"}},[v._v("#")]),v._v(" 架构设计模式")]),v._v(" "),r("p",[v._v("在引入微服务之后，传统的单体应用变为了一个一个服务，之前一个应用直接提供接口给客户端访问的架构不再适用。微服务架构下，针对不同设备的接口做为BFF层（Backend For Frontend），也叫做用户体验适配层，负责聚合、编排微服务的数据转换成前端需要的数据。服务之间的调用则在允许的情况下（允许延迟）尽可能使用异步消息传递方式，如此形成"),r("strong",[v._v("面向用户体验的微服务架构设计模式")]),v._v("。如下图所示：")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/da4d6e48-1ee4-4f0e-9620-ea9079c08922.png",alt:""}})]),v._v(" "),r("p",[r("strong",[v._v("Client -> API Gateway -> BFF（Backend For Frontend） -> Downstream Microservices")])]),v._v(" "),r("ul",[r("li",[v._v("后台采用微服务架构，微服务可以采用不同的编程语言和不同的存储机制。")]),v._v(" "),r("li",[v._v("前台采用BFF模式对不同的用户体验（如桌面浏览器，Native App，平板响应式Web）进行适配。")]),v._v(" "),r("li",[v._v("BFF、API Orchestration Layer，Edge Service Layer，Device Wrapper Layer是相同的概念。")]),v._v(" "),r("li",[v._v("BFF不能过多，过多会造成代码逻辑重复冗余。")]),v._v(" "),r("li",[v._v("可以将网关承担的功能，如Geoip、限流、安全认证等跨横切面功能和BFF做在同一层，虽然增加了BFF层的复杂性，但能够得到性能优势。")])]),v._v(" "),r("h3",{attrs:{id:"服务拆分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务拆分"}},[v._v("#")]),v._v(" 服务拆分")]),v._v(" "),r("p",[v._v("微服务架构最核心的环节，主要是对服务的"),r("strong",[v._v("横向拆分")]),v._v("。服务拆分就是讲一个完整的业务系统解耦为服务，"),r("strong",[v._v("服务需要职责单一，之间没有耦合关系，能够独立开发和维护")]),v._v("。")]),v._v(" "),r("p",[v._v("服务拆分不是一蹴而就的，需要在开发过程中不断地理清边界。在完全理清服务之前，尽量推迟对服务的拆分，尤其是对数据库的拆分。")]),v._v(" "),r("p",[r("strong",[v._v("拆分方法")]),v._v("如下：")]),v._v(" "),r("ul",[r("li",[v._v("基于业务逻辑拆分")]),v._v(" "),r("li",[v._v("基于可扩展拆分")]),v._v(" "),r("li",[v._v("基于可靠性拆分")]),v._v(" "),r("li",[v._v("基于性能拆分")])]),v._v(" "),r("p",[v._v("其中，对于无法修改的遗留系统，采用绞杀者模式：在遗留系统外面增加新的功能做成微服务方式，而不是直接修改原有系统，逐步的实现对老系统替换。")]),v._v(" "),r("p",[r("strong",[v._v("拆分过程需要遵守的规范")]),v._v("如下：")]),v._v(" "),r("ul",[r("li",[v._v("先少后多、先粗后细（粒度）")]),v._v(" "),r("li",[v._v("服务纵向拆分最多三层，两次调用：Controller、组合服务、基础服务")]),v._v(" "),r("li",[v._v("仅仅单向调用，禁止循环调用")]),v._v(" "),r("li",[v._v("串行调用改为并行调用或者异步化")]),v._v(" "),r("li",[v._v("接口应该幂等")]),v._v(" "),r("li",[v._v("接口数据定义严禁内嵌，透传")]),v._v(" "),r("li",[v._v("规范化工程名")]),v._v(" "),r("li",[v._v("先拆分服务，等服务粒度确定后再拆分数据库。")])]),v._v(" "),r("h3",{attrs:{id:"微服务框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务框架"}},[v._v("#")]),v._v(" 微服务框架")]),v._v(" "),r("p",[v._v("上面讲述了微服务架构的众多基础设施，如果每一个基础设施都需要自己开发的话是非常巨大的开发工作。目前市面上已经有不少开源的微服务框架可以选择。")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("Spring Boot")]),v._v(" "),r("p",[v._v("Spring Boot是用来简化新Spring应用的初始搭建以及开发过程的。其虽然不是微服务框架，但其设计的初衷本质就是微应用的底层框架，因此非常适合用于微服务基础设施的开发以及微服务的应用开发。尤其对于Spring技术栈的团队来说，基于Spring Boot开发微服务框架和应用是自然而然的一个选择。")])]),v._v(" "),r("li",[r("p",[v._v("Dubbo&&Motan")]),v._v(" "),r("p",[v._v("Dubbo阿里开源的服务治理框架。其出现在微服务理念兴起之前，可以看做是SOA框架的集大成之作。但其仅仅包含了微服务基础设施的部分功能，诸如熔断、服务跟踪、网关等都没有实现。")]),v._v(" "),r("ul",[r("li",[v._v("服务发现 ：服务发布、订阅、通知")]),v._v(" "),r("li",[v._v("高可用策略 ：失败重试（Failover）、快速失败（Failfast）、资源隔离 - 负载均衡 ：最少活跃连接、一致性 Hash、随机请求、轮询等")]),v._v(" "),r("li",[v._v("扩展性 ：支持 SPI 扩展（service provider interface）")]),v._v(" "),r("li",[v._v("其他 ：调用统计、访问日志等")])]),v._v(" "),r("p",[v._v("Motan则是微博开源的类似Dubbo的RPC框架，与Dubbo相比更轻量级。")])]),v._v(" "),r("li",[r("p",[v._v("Spring Cloud")]),v._v(" "),r("p",[v._v("Spring Cloud是基于Spring Boot实现的微服务框架，也可以看做一套微服务实现规范。基本涵盖了微服务基础设施的方方面面，包括配置管理、服务发现、断路器、智能路由、微代理、控制总线、全局锁、决策竞选、分布式会话和集群状态管理等。其基于Spring生态，社区支持非常好。但其很多组件都没有经过生产环境验证，需要慎重选择。")]),v._v(" "),r("p",[v._v("Spring Cloud Netflix是Spring Cloud的一个子项目，是Spring对Netflix OSS的集成实现。基于Netflix的大规模使用，其中的已经被广泛使用的组件包括：")]),v._v(" "),r("ul",[r("li",[v._v("Eureka： 服务注册和服务发现")]),v._v(" "),r("li",[v._v("Ribbon：弹性而智能的进程间和服务通讯机制，客户端负载均衡")]),v._v(" "),r("li",[v._v("Hystrix： 熔断器，在运行时提供延迟和容错的隔离")]),v._v(" "),r("li",[v._v("Zuul: 服务网关")])]),v._v(" "),r("p",[v._v("此外，另一个子项目Spring Cloud Alibaba则是Alibaba开源的基于Spring Boot的微服务框架，主要是对阿里云服务的支持。")])]),v._v(" "),r("li",[r("p",[v._v("Service Mesh")]),v._v(" "),r("p",[v._v("上述的微服务框架都是侵入式的，服务化的过程都需要进行代码改造。Service Mesh则是下一代微服务架构，最明显的特征就是无入侵。采用sidecar模式来解决系统架构微服务化后的服务间通信和治理问题。如下图所示：")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/4f6b7dea-a7cc-4b49-8ddc-a952c93e942b.png",alt:""}})]),v._v(" "),r("p",[v._v("目前主流的开源实现包括：")]),v._v(" "),r("ul",[r("li",[v._v("Linkerd和Envoy：以 sidecar 为核心，关注如何做好proxy，并完成一些通用控制平面的功能。缺乏对这些sidecar的管理和控制。")]),v._v(" "),r("li",[v._v("Istio和Conduit：目前最为流行的Service Mesh实现方案，集中在更加强大的控制平面(sidecar被称为数据平面)功能。前者由Google和IBM合作，并使用了Envoy作为sidecar部分的实现；后者则是Linkerd作者的作品。相比起来，Istio有巨头背景，功能强大，但可用性和易用性一直不高，Conduit则相对简单、功能聚焦。")])]),v._v(" "),r("p",[v._v("限于Service Mesh带来的性能延迟的开销以及sidecar对分布复杂性的增加，其对大规模部署(微服务数目多)、异构复杂(交互协议/开发语言类型多)的微服务架构带来的收益会更大。")])]),v._v(" "),r("li",[r("p",[v._v("Sofastack")]),v._v(" "),r("p",[v._v("蚂蚁金服开源的构建金融级分布式架构的一套中间件。包括微服务开发框架、RPC框架、服务注册中心、全链路追踪、服务监控、Service Mesh等一整套分布式应用开发工具。")]),v._v(" "),r("p",[v._v("特别值得一提的是SOFAMesh。其是对下一代微服务架构Service Mesh的大规模落地方案实践，基于 Istio改进和扩展而来，应该是国内最为成熟的开源Service Mesh方案。")])])]),v._v(" "),r("p",[v._v("此外，需要提到"),r("strong",[v._v("Kubernetes(K8s)")]),v._v("，其本身提供了部分的微服务特性支持（通过域名做服务发现），对代码无侵入。但服务调用、熔断这些都需要自己实现。")]),v._v(" "),r("p",[v._v("综上，目前公司技术团队技术栈是Spring，并且已有服务的实现都是基于Dubbo，因此选择Spring Cloud Netflix做为基础的微服务框架，对其中不成熟或者缺乏的组件，选择业界更为成熟的组件替代即可。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://imgkr.cn-bj.ufileos.com/6624b341-6133-4fa9-b547-1fb5e60af12b.png",alt:""}})]),v._v(" "),r("ul",[r("li",[v._v("API网关：Zuul")]),v._v(" "),r("li",[v._v("服务注册中心：Dubbo")]),v._v(" "),r("li",[v._v("配置中心：disconf")]),v._v(" "),r("li",[v._v("服务监控&&全链路追踪：CAT")]),v._v(" "),r("li",[v._v("服务开发框架：Spring Boot")]),v._v(" "),r("li",[v._v("日志监控、告警：ELK + Elasalert")]),v._v(" "),r("li",[v._v("流量控制：Sentinel")]),v._v(" "),r("li",[v._v("消息队列：Kafka")])]),v._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.ben-morris.com/whats-so-bad-about-monoliths-anyway/",target:"_blank",rel:"noopener noreferrer"}},[v._v("What’s so bad about monoliths anyway…?!"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"https://martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Microservice"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"https://martinfowler.com/bliki/MicroservicePremium.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("MicroservicePremium"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"https://martinfowler.com/articles/microservice-trade-offs.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Microservice Trade-Offs"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"https://martinfowler.com/bliki/MicroservicePrerequisites.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("MicroservicePrerequisites"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"https://martinfowler.com/bliki/MonolithFirst.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("MonolithFirst"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI2MzM3MzkyMg==&mid=2247486544&idx=1&sn=999be8b4f06150b96d9a46ada6bb9ded&chksm=eabd995dddca104bd3c6262d491572f7be9b2a763a43a388f66bd0e90e4bd60e5037727107e4&mpshare=1&scene=1&srcid=0201lT7ZBVBGmTki8bYnmDgl%23rd",target:"_blank",rel:"noopener noreferrer"}},[v._v("服务怎么拆？"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"https://www.thoughtworks.com/insights/blog/bff-soundcloud",target:"_blank",rel:"noopener noreferrer"}},[v._v("BFF@SoundCloud"),r("OutboundLink")],1)]),v._v(" "),r("li",[r("a",{attrs:{href:"http://www.importnew.com/28798.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Service Mesh 及其主流开源实现解析"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=i.exports}}]);