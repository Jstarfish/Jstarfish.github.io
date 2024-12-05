(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{665:function(e,t,a){"use strict";a.r(t);var v=a(2),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"不懂-zookeeper-没关系-这一篇给你讲的明明白白"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不懂-zookeeper-没关系-这一篇给你讲的明明白白"}},[e._v("#")]),e._v(" 不懂 ZooKeeper？没关系，这一篇给你讲的明明白白")]),e._v(" "),a("blockquote",[a("p",[e._v("本来想系统回顾下 ZooKeeper的，可是网上没找到一篇合自己胃口的文章，写的差不多的，感觉大部分都是基于《从Paxos到ZooKeeper 分布式一致性原理与实践》写的，所以自己读了一遍，加上项目中的使用，做个整理。加油，奥利给！")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://zookeeper.apache.org/images/zookeeper_small.gif",alt:"img"}})]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("面试常常被要求「熟悉分布式技术」，当年搞 “XXX管理系统” 的时候，我都不知道分布式系统是个啥。"),a("strong",[e._v("分布式系统是一个硬件或软件组件分布在不同的网络计算机中上，彼此之间仅仅通过消息传递进行通信和协调的系统")]),e._v("。")]),e._v(" "),a("p",[e._v("计算机系统从集中式到分布式的变革伴随着包括"),a("strong",[e._v("分布式网络")]),e._v("、"),a("strong",[e._v("分布式事务")]),e._v("、"),a("strong",[e._v("分布式数据一致性")]),e._v("等在内的一系列问题和挑战，同时也催生了一大批诸如"),a("code",[e._v("ACID")]),e._v("、"),a("code",[e._v("CAP")]),e._v("和 "),a("code",[e._v("BASE")]),e._v(" 等经典理论的快速发展。")]),e._v(" "),a("p",[e._v("为了解决分布式一致性问题，涌现出了一大批经典的一致性协议和算法，最为著名的就是二阶段提交协议（2PC），三阶段提交协议（3PC）和"),a("code",[e._v("Paxos")]),e._v("算法。"),a("code",[e._v("Zookeeper")]),e._v("的一致性是通过基于 "),a("code",[e._v("Paxos")]),e._v(" 算法的 "),a("code",[e._v("ZAB")]),e._v(" 协议完成的。一致性协议之前的文章也有介绍："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/1rcUGpj7M0bJvdiSLRkFrQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("「走进分布式一致性协议」从2PC、3PC、Paxos 到 ZAB"),a("OutboundLink")],1),e._v("，这里就不再说了。")]),e._v(" "),a("h2",{attrs:{id:"一-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-概述"}},[e._v("#")]),e._v(" 一. 概述")]),e._v(" "),a("h3",{attrs:{id:"_1-1-定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-定义"}},[e._v("#")]),e._v(" 1.1 定义")]),e._v(" "),a("p",[e._v("ZooKeeper 官网是这么介绍的：”"),a("strong",[e._v("Apache ZooKeeper 致力于开发和维护一个支持高度可靠的分布式协调的开源服务器")]),e._v("“")]),e._v(" "),a("h3",{attrs:{id:"_1-2-zookeeper是个啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-zookeeper是个啥"}},[e._v("#")]),e._v(" 1.2 ZooKeeper是个啥")]),e._v(" "),a("p",[e._v("ZooKeeper 是 Apache 软件基金会的一个软件项目，它为大型「"),a("strong",[e._v("分布式计算")]),e._v("」提供开源的分布式配置服务、同步服务和命名注册。")]),e._v(" "),a("p",[e._v("Zookeeper 最早起源于雅虎研究院的一个研究小组。在当时，研究人员发现，在雅虎内部很多大型系统基本都需要依赖一个类似的系统来进行分布式协调，但是这些系统往往都存在分布式单点问题。所以，雅虎的开发人员就试图开发一个通用的无单点问题的"),a("strong",[e._v("分布式协调框架")]),e._v("，以便让开发人员将精力集中在处理业务逻辑上，Zookeeper 就这样诞生了。后来捐赠给了 "),a("code",[e._v("Apache")]),e._v(" ，现已成为 "),a("code",[e._v("Apache")]),e._v(" 顶级项目。")]),e._v(" "),a("blockquote",[a("p",[e._v("关于“ZooKeeper”这个项目的名字，其实也有一段趣闻。在立项初期，考虑到之前内部很多项目都是使用动物的名字来命名的（例如著名的Pig项目)，雅虎的工程师希望给这个项目也取一个动物的名字。时任研究院的首席科学家 RaghuRamakrishnan 开玩笑地说：“再这样下去，我们这儿就变成动物园了！”此话一出，大家纷纷表示就叫动物园管理员吧一一一因为各个以动物命名的分布式组件放在一起，雅虎的整个分布式系统看上去就像一个大型的动物园了，而 Zookeeper 正好要用来进行分布式环境的协调一一于是，Zookeeper 的名字也就由此诞生了。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i01piccdn.sogoucdn.com/dc1f7cde4a337e77",alt:""}})]),e._v(" "),a("p",[e._v("ZooKeeper 是用于维护配置信息，命名，提供分布式同步和提供组服务的集中式服务。所有这些类型的服务都以某种形式被分布式应用程序使用。每次实施它们时，都会进行很多工作来修复不可避免的 bug 和竞争条件。由于难以实现这类服务，因此应用程序最初通常会跳过它们，这会使它们在存在更改的情况下变得脆弱并且难以管理。即使部署正确，这些服务的不同实现也会导致管理复杂。")]),e._v(" "),a("p",[e._v("ZooKeeper 的目标是将这些不同服务的精华提炼为一个非常简单的接口，用于集中协调服务。服务本身是分布式的，并且高度可靠。服务将实现共识，组管理和状态协议，因此应用程序不需要自己实现它们。")]),e._v(" "),a("h3",{attrs:{id:"_1-3-zookeeper工作机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-zookeeper工作机制"}},[e._v("#")]),e._v(" 1.3 ZooKeeper工作机制")]),e._v(" "),a("p",[e._v("ZooKeeper 从设计模式角度来理解：就是一个基于"),a("strong",[e._v("观察者模式")]),e._v("设计的分布式服务管理框架，它负责存储和管理大家都关心的数据，然后接受观察者的注册，一旦这些数据的状态发生变化，ZK 就将负责通知已经在 ZK 上注册的那些观察者做出相应的反应，从而实现集群中类似 Master/Slave 管理模式。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.starfish.ink/zookeeper/zk-work.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_1-4-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-特性"}},[e._v("#")]),e._v(" 1.4 特性")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gds0fy5hsyj30go055dga.jpg",alt:"图片来源：官网wiki"}})]),e._v(" "),a("ol",[a("li",[a("p",[e._v("ZooKeeper：一个领导者（leader），多个跟随者（follower）组成的集群。")])]),e._v(" "),a("li",[a("p",[e._v("Leader 负责进行投票的发起和决议，更新系统状态。")])]),e._v(" "),a("li",[a("p",[e._v("Follower 用于接收客户请求并向客户端返回结果，在选举 Leader 过程中参与投票。")])]),e._v(" "),a("li",[a("p",[e._v("集群中只要有半数以上节点存活，Zookeeper 集群就能正常服务。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("全局数据一致")]),e._v("（单一视图）：每个 Server 保存一份相同的数据副本，Client 无论连接到哪个 Server，数据都是一致的。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("顺序一致性：")]),e._v(" 从同一客户端发起的事务请求，最终将会严格地按照顺序被应用到 ZooKeeper 中去。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("原子性：")]),e._v(" 所有事务请求的处理结果在整个集群中所有机器上的应用情况是一致的，也就是说，要么整个集群中所有的机器都成功应用了某一个事务，要么都没有应用。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("实时性")]),e._v("，在一定时间范围内，client 能读到最新数据。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("可靠性：")]),e._v(" 一旦一次更改请求被应用，更改的结果就会被持久化，直到被下一次更改覆盖。")])])]),e._v(" "),a("h3",{attrs:{id:"_1-5-设计目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-设计目标"}},[e._v("#")]),e._v(" 1.5 设计目标")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("简单的数据结构")]),e._v(" ：Zookeeper 使得分布式程序能够通过一个共享的树形结构的名字空间来进行相互协调，即Zookeeper 服务器内存中的数据模型由一系列被称为"),a("code",[e._v("ZNode")]),e._v("的数据节点组成，"),a("strong",[e._v("Zookeeper 将全量的数据存储在内存中，以此来提高服务器吞吐、减少延迟的目的")]),e._v("。")]),e._v(" "),a("li",[a("strong",[e._v("可以构建集群")]),e._v(" ： Zookeeper 集群通常由一组机器构成，组成 Zookeeper 集群的每台机器都会在内存中维护当前服务器状态，并且每台机器之间都相互通信。")]),e._v(" "),a("li",[a("strong",[e._v("顺序访问")]),e._v(" ： 对于来自客户端的每个更新请求，Zookeeper 都会"),a("strong",[e._v("分配一个全局唯一的递增编号")]),e._v("，这个编号反映了所有事务操作的先后顺序。")]),e._v(" "),a("li",[a("strong",[e._v("高性能")]),e._v(" ：Zookeeper 和 Redis 一样全量数据存储在内存中，100% 读请求压测 QPS 12-13W")])]),e._v(" "),a("h3",{attrs:{id:"_1-6-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-数据结构"}},[e._v("#")]),e._v(" 1.6 数据结构")]),e._v(" "),a("p",[e._v("Zookeeper 数据模型的结构与 Unix 文件系统的结构相似，整体上可以看做是一棵树，每个节点称作一个 "),a("strong",[e._v("「ZNode」")]),e._v("。每个 ZNode 默认能存储 "),a("strong",[e._v("1MB")]),e._v(" 的数据，每个 ZNode 都可以通过其路径唯一标识。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ged03jwznbj31m20u0qaq.jpg",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_1-7-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-应用场景"}},[e._v("#")]),e._v(" 1.7 应用场景")]),e._v(" "),a("p",[a("strong",[e._v("ZooKeeper 是一个典型的分布式数据一致性解决方案，分布式应用程序可以基于 ZooKeeper 实现诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能")])]),e._v(" "),a("h4",{attrs:{id:"统一命名服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一命名服务"}},[e._v("#")]),e._v(" 统一命名服务")]),e._v(" "),a("p",[e._v("在分布式系统中，通过使用命名服务，客户端应用能够根据指定名字来获取资源或服务的地址，提供者等信息。被命名的实体通常可以是集群中的机器，提供的服务地址，进程对象等等——这些我们都可以统称他们为"),a("strong",[e._v("名字")]),e._v("（Name）。其中较为常见的就是一些分布式服务框架（如RPC、RMI）中的服务地址列表。通过调用 Zookeeper 提供的创建节点的 API，能够很容易创建一个全局唯一的 path，这个 path 就可以作为一个名称。")]),e._v(" "),a("p",[e._v("阿里巴巴开源的分布式服务框架 Dubbo 就使用 ZooKeeper 来作为其命名服务，维护全局的服务地址列表。")]),e._v(" "),a("h4",{attrs:{id:"数据发布与订阅-配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据发布与订阅-配置中心"}},[e._v("#")]),e._v(" 数据发布与订阅（配置中心）")]),e._v(" "),a("p",[e._v("发布与订阅模型，即所谓的配置中心，顾名思义就是发布者将数据发布到 ZooKeeper 节点上，供订阅者动态获取数据，实现配置信息的集中式管理和动态更新。例如全局的配置信息，服务式服务框架的服务地址列表等就非常适合使用。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("分布式环境下，配置文件管理和同步是一个常见问题")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("一个集群中，所有节点的配置信息是一致的，比如 Hadoop 集群、集群中的数据库配置信息等全局配置")])]),e._v(" "),a("li",[a("p",[e._v("对配置文件修改后，希望能够快速同步到各个节点上。")])])])]),e._v(" "),a("li",[a("p",[e._v("配置管理可交由 ZooKeeper 实现")]),e._v(" "),a("ul",[a("li",[e._v("可将配置信息写入 ZooKeeper 上的一个 Znode")]),e._v(" "),a("li",[e._v("各个节点监听这个 Znode")]),e._v(" "),a("li",[e._v("一旦 Znode 中的数据被修改，ZooKeeper 将通知各个节点")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ged0h6hqulj31pv0t012t.jpg",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"统一集群管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一集群管理"}},[e._v("#")]),e._v(" 统一集群管理")]),e._v(" "),a("p",[e._v("所谓集群管理无在乎两点：是否有机器退出和加入、选举 Master。")]),e._v(" "),a("h5",{attrs:{id:"管理节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理节点"}},[e._v("#")]),e._v(" 管理节点")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("分布式环境中，"),a("strong",[e._v("实时掌握")]),e._v("每个节点的状态是必要的，比如我们要知道集群中各机器状态、收集各个机器的运行时状态数据、服务器动态上下线等。")])]),e._v(" "),a("li",[a("p",[e._v("交由 ZooKeeper 实现的方式")]),e._v(" "),a("ul",[a("li",[e._v("可将节点信息写入 ZooKeeper 上的一个 Znode")]),e._v(" "),a("li",[e._v("监听这个 Znode 可获取它的实时状态变化")]),e._v(" "),a("li",[e._v("典型应用：HBase 中 Master 状态监控和选举。")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img.starfish.ink/zookeeper/zk-manage-node.jpg",alt:""}})]),e._v(" "),a("h5",{attrs:{id:"master选举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master选举"}},[e._v("#")]),e._v(" Master选举")]),e._v(" "),a("p",[e._v("在分布式环境中，相同的业务应用分布在不同的机器上，有些业务逻辑（例如一些耗时的计算，网络I/O处理），往往只需要让整个集群中的某一台机器进行执行，其余机器可以共享这个结果，这样可以大大减少重复劳动，提高性能，于是这个master选举便是这种场景下的碰到的主要问题。")]),e._v(" "),a("p",[e._v("利用 Zookeeper 的强一致性，能够很好的保证在分布式高并发情况下节点的创建一定是全局唯一的，即：同时有多个客户端请求创建 "),a("code",[e._v("/currentMaster")]),e._v(" 节点，最终一定只有一个客户端请求能够创建成功。Zookeeper 通过这种节点唯一的特性，可以创建一个 Master 节点，其他客户端 Watcher 监控当前 Master 是否存活，一旦 Master 挂了，其他机器再创建这样的一个 Master 节点，用来重新选举。")]),e._v(" "),a("h4",{attrs:{id:"软负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软负载均衡"}},[e._v("#")]),e._v(" 软负载均衡")]),e._v(" "),a("p",[e._v("分布式系统中，负载均衡是一种很普遍的技术，为了保证高可用性，通常同一个应用或同一个服务的提供方都会部署多份，达到对等服务。可以是硬件的负载均衡，如 F5，也可以是软件的负载，我们熟知的 Nginx，或者这里介绍的 Zookeeper。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gfbe1t699oj31gw0u0nat.jpg",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"分布式协调-通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式协调-通知"}},[e._v("#")]),e._v(" 分布式协调/通知")]),e._v(" "),a("p",[e._v("Zookeeper 中特有的 「"),a("strong",[e._v("Watcher")]),e._v("」 注册与异步通知机制，能够很好的实现分布式环境下不同机器，甚至不同系统之间的协调和通知，从而实现对数据变更的实时处理。")]),e._v(" "),a("p",[e._v("使用方法通常是不同系统都对 ZK 上同一个 znode 进行注册，监听 znode 的变化（包括 znode 本身内容及子节点的），其中一个系统 update 了 znode，那么另一个系统能够收到通知，并作出相应处理。")]),e._v(" "),a("ul",[a("li",[e._v("心跳检测中可以让检测系统和被检测系统之间并不直接关联起来，而是通过 ZK 上某个节点关联，减少系统耦合;")]),e._v(" "),a("li",[e._v("系统调度模式中，假设某系统有控制台和推送系统两部分组成，控制台的职责是控制推送系统进行相应的推送工作。管理人员在控制台作的一些操作，实际上是修改了 ZK 上某些节点的状态，而 ZK 就把这些变化通知给他们注册 Watcher 的客户端，即推送系统，于是，作出相应的推送任务。")])]),e._v(" "),a("h4",{attrs:{id:"分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),a("p",[e._v("分布式锁，这个主要得益于 ZooKeeper 为我们保证了数据的强一致性。")]),e._v(" "),a("p",[e._v("锁服务可以分为两类，一个是"),a("strong",[e._v("保持独占")]),e._v("，另一个是"),a("strong",[e._v("控制时序")]),e._v("。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("所谓保持独占，就是所有试图来获取这个锁的客户端，最终只有一个可以成功获得这把锁。通常的做法是把 zk 上的一个 znode 看作是一把锁，通过 "),a("code",[e._v("create znode")]),e._v(" 的方式来实现。所有客户端都去创建 "),a("code",[e._v("/distribute_lock")]),e._v(" 节点，最终成功创建的那个客户端也即拥有了这把锁。")])]),e._v(" "),a("li",[a("p",[e._v("控制时序，就是所有试图来获取这个锁的客户端，最终都是会被安排执行，只是有个全局时序了。做法和上面基本类似，只是这里 "),a("code",[e._v("/distribute_lock")]),e._v(" 已预先存在，客户端在它下面创建临时有序节点（这个可以通过节点的属性控制："),a("code",[e._v("CreateMode.EPHEMERAL_SEQUENTIAL")]),e._v("来指定）。ZK 的父节点（"),a("code",[e._v("/distribute_lock")]),e._v("）维持一份 sequence，保证子节点创建的时序性，从而也形成了每个客户端的全局时序。")])])]),e._v(" "),a("p",[e._v("个人感觉还是用 Redis 实现分布式锁更加方便。")]),e._v(" "),a("blockquote",[a("p",[e._v("PS：阿里中间件团队：“其实，ZK 并非天生就是为这些应用场景设计的，都是后来众多开发者根据其框架的特性，利用其提供的一系列API接口（或者称为原语集），摸索出来的典型使用方法。”")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"_2-hello-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-hello-zookeeper"}},[e._v("#")]),e._v(" 2. Hello ZooKeeper")]),e._v(" "),a("p",[e._v("ZooKeeper 的三种部署方式：")]),e._v(" "),a("ol",[a("li",[e._v("单机模式，即部署在单台机器上的一个 ZK 服务，适用于学习、了解 ZK 基础功能")]),e._v(" "),a("li",[e._v("伪分布模式，即部署在一台机器上的多个（原则上大于3个）ZK 服务，伪集群，适用于学习、开发和测试")]),e._v(" "),a("li",[e._v("全分布式模式（复制模式），即在多台机器上部署服务，真正的集群模式，生产环境中使用")])]),e._v(" "),a("blockquote",[a("p",[e._v("计划写三篇的，第二篇会实战 coding，运用各种 API，到时候再装集群，本节先来个单机玩~~")])]),e._v(" "),a("h3",{attrs:{id:"_2-1-本地模式安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-本地模式安装部署"}},[e._v("#")]),e._v(" 2.1 本地模式安装部署")]),e._v(" "),a("h4",{attrs:{id:"_2-1-1-安装前准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-安装前准备"}},[e._v("#")]),e._v(" 2.1.1 安装前准备")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("安装 Jdk")])]),e._v(" "),a("li",[a("p",[e._v("拷贝或下载 Zookeeper 安装包到 Linux 系统下(这里有个小问题，如果你下载 ZK 版本是3.5+ 的话，要下载 bin.tar.gz，愚笨的我最先没看到官网说明，一顿操作各种报错找不到 Main 方法)")])]),e._v(" "),a("li",[a("p",[e._v("解压到指定目录")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-zxvf")]),e._v(" apache-zookeeper-3.5.7-bin.tar.gz\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"_2-1-2-配置修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-配置修改"}},[e._v("#")]),e._v(" 2.1.2 配置修改")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("将 zookeeper-3.5.7/conf 这个路径下的 "),a("code",[e._v("zoo_sample.cfg")]),e._v(" 修改为 "),a("code",[e._v("zoo.cfg")]),e._v(" ；")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" zoo_sample.cfg zoo.cfg\n")])])])]),e._v(" "),a("li",[a("p",[e._v("打开 zoo.cfg 文件，修改 dataDir 路径：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("dataDir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("XXX/zookeeper-3.5.7/zkData\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"_2-1-3-操作-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-操作-zookeeper"}},[e._v("#")]),e._v(" 2.1.3 操作 Zookeeper")]),e._v(" "),a("ol",[a("li",[e._v("启动 Zookeeper:  "),a("code",[e._v("bin/zkServer.sh start")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("/usr/local/bin/java\nZooKeeper JMX enabled by default\nUsing config: /home/sync360/test/apache-zookeeper-3.5.7-bin/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/conf/zoo.cfg\nStarting zookeeper "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". STARTED\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("查看进程是否启动: "),a("code",[e._v("jps")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4020")]),e._v(" Jps\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" QuorumPeerMain\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("查看状态："),a("code",[e._v("bin/zkServer.sh status")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("/usr/local/bin/java\nZooKeeper JMX enabled by default\nUsing config: /home/apache-zookeeper-3.5.7-bin/bin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/conf/zoo.cfg\nClient port found: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v(". Client address: localhost.\nMode: standalone\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("启动客户端："),a("code",[e._v("bin/zkCli.sh")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("Connecting to localhost:2181\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-03-25 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":41:19,112 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("main:Environment@109"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" - Client environment:zookeeper.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.5")]),e._v(".7-f0fdd52973d373ffd9c86b81d99842dc2c7f660e, built on 02/10/2020 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(":30 GMT\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-03-25 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":41:19,183 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("myid:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" - INFO  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("main:ClientCnxn@1653"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" - zookeeper.request.timeout value is "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(". feature "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nWelcome to ZooKeeper"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nWATCHER::\n\nWatchedEvent state:SyncConnected type:None path:null\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[e._v("退出客户端："),a("code",[e._v("quit")])])]),e._v(" "),a("li",[a("p",[e._v("停止 Zookeeper:  "),a("code",[e._v("bin/zkServer.sh stop")])])])]),e._v(" "),a("h3",{attrs:{id:"_2-2-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-常用命令"}},[e._v("#")]),e._v(" 2.2 常用命令")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("命令基本语法")]),e._v(" "),a("th",[e._v("功能描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("help")]),e._v(" "),a("td",[e._v("显示所有操作命令")])]),e._v(" "),a("tr",[a("td",[e._v("ls path [watch]")]),e._v(" "),a("td",[e._v("使用 ls 命令来查看当前znode中所包含的内容")])]),e._v(" "),a("tr",[a("td",[e._v("ls2 path [watch]")]),e._v(" "),a("td",[e._v("查看当前节点数据并能看到更新次数等数据")])]),e._v(" "),a("tr",[a("td",[e._v("create")]),e._v(" "),a("td",[e._v("普通创建-s  含有序列-e  临时（重启或者超时消失）")])]),e._v(" "),a("tr",[a("td",[e._v("get path [watch]")]),e._v(" "),a("td",[e._v("获得节点的值")])]),e._v(" "),a("tr",[a("td",[e._v("set")]),e._v(" "),a("td",[e._v("设置节点的具体值")])]),e._v(" "),a("tr",[a("td",[e._v("stat")]),e._v(" "),a("td",[e._v("查看节点状态")])]),e._v(" "),a("tr",[a("td",[e._v("delete")]),e._v(" "),a("td",[e._v("删除节点")])]),e._v(" "),a("tr",[a("td",[e._v("rmr")]),e._v(" "),a("td",[e._v("递归删除节点")])])])]),e._v(" "),a("h4",{attrs:{id:"ls-查看当前-zk-中所包含的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ls-查看当前-zk-中所包含的内容"}},[e._v("#")]),e._v(" ls 查看当前 zk 中所包含的内容")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" /\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("lazyegg, zookeeper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h4",{attrs:{id:"create-创建一个新的-znode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-创建一个新的-znode"}},[e._v("#")]),e._v(" create 创建一个新的 znode")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" create /test\nCreated /test\n")])])]),a("h4",{attrs:{id:"get-查看新的-znode-的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-查看新的-znode-的值"}},[e._v("#")]),e._v(" get 查看新的 znode 的值")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("zk: localhost:2181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("CONNECTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" get /test\nnull\n")])])]),a("p",[e._v("可以看到值为 null，我们刚才设置了一个没有值的节点，也可以通过 "),a("code",[e._v("create /zoo dog")]),e._v(" 直接创建有内容的节点")]),e._v(" "),a("h4",{attrs:{id:"set-对-zk-所关联的字符串进行设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-对-zk-所关联的字符串进行设置"}},[e._v("#")]),e._v(" set 对 zk 所关联的字符串进行设置")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" /test hello\n")])])]),a("h4",{attrs:{id:"delete-删除节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-删除节点"}},[e._v("#")]),e._v(" delete 删除节点")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("delete /test\n")])])]),a("h3",{attrs:{id:"_2-3-配置参数解读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-配置参数解读"}},[e._v("#")]),e._v(" 2.3 配置参数解读")]),e._v(" "),a("p",[e._v("在 Zookeeper 的设计中，如果是集群模式，那所有机器上的 zoo.cfg 文件内容应该都是一致的。")]),e._v(" "),a("p",[e._v("Zookeeper 中的配置文件 "),a("code",[e._v("zoo.cfg")]),e._v(" 中参数含义解读如下：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("tickTime =2000：通信心跳数")]),e._v(" "),a("p",[e._v("Zookeeper 使用的基本时间，服务器之间或客户端与服务器之间维持心跳的时间间隔，也就是每个 tickTime时间就会发送一个心跳，时间单位为毫秒")]),e._v(" "),a("p",[e._v("它用于心跳机制，并且设置最小的 session 超时时间为两倍心跳时间。(session的最小超时时间是2*tickTime)；")])]),e._v(" "),a("li",[a("p",[e._v("initLimit =10：主从初始通信时限，集群中的 Follower 跟随者服务器与 Leader 领导者服务器之间初始连接时能容忍的最多心跳数（tickTime的数量），用它来限定集群中的 ZK 服务器连接到 Leader 的时限；")])]),e._v(" "),a("li",[a("p",[e._v("syncLimit =5：主从同步通信时限，集群中 Leader 与 Follower 之间的最大响应时间单位，假如响应超过"),a("code",[e._v("syncLimit * tickTime")]),e._v("，Leader 认为 Follwer 死掉，从服务器列表中删除 Follwer；")])]),e._v(" "),a("li",[a("p",[e._v("dataDir：数据文件目录+数据持久化路径；")])]),e._v(" "),a("li",[a("p",[e._v("clientPort =2181：客户端连接端口")])])]),e._v(" "),a("h2",{attrs:{id:"_3-你要知道的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-你要知道的概念"}},[e._v("#")]),e._v(" 3. 你要知道的概念")]),e._v(" "),a("ul",[a("li",[e._v("ZooKeeper 本身就是一个分布式程序（只要半数以上节点存活，ZooKeeper 就能正常服务）。")]),e._v(" "),a("li",[e._v("为了保证高可用，最好是以集群形态来部署 ZooKeeper，这样只要集群中大部分机器是可用的（能够容忍一定的机器故障），那么 ZooKeeper 本身仍然是可用的。")]),e._v(" "),a("li",[a("strong",[e._v("ZooKeeper 将数据保存在内存中，这也就保证了高吞吐量和低延迟")]),e._v("（但是内存限制了能够存储的容量不太大，此限制也是保持 znode 中存储的数据量较小的进一步原因）。")]),e._v(" "),a("li",[a("strong",[e._v("ZooKeeper 是高性能的。 在“读”多于“写”的应用程序中尤其的高性能，因为“写”会导致所有的服务器间同步状态。")]),e._v("（“读”多于“写”是协调服务的典型场景。）")]),e._v(" "),a("li",[e._v("ZooKeeper 底层其实只提供了两个功能：\n"),a("ul",[a("li",[e._v("管理（存储、读取）用户程序提交的数据")]),e._v(" "),a("li",[e._v("为用户程序提交数据节点监听服务")])])])]),e._v(" "),a("p",[e._v("这里引入一个简单的例子，逐个介绍一些 ZK 中的概念。")]),e._v(" "),a("p",[e._v("在分布式系统中经常会遇到这种情况，多个应用读取同一个配置。例如：Client1，Client2 两个应用都会读取配置 B 中的内容，一旦 B 中的内容出现变化，就会通知 Client1 和 Client2。")]),e._v(" "),a("p",[e._v("一般的做法是在 Client1，Client2 中按照时钟频率询问 B 的变化，或者使用观察者模式来监听 B 的变化，发现变化以后再更新两个客户端。那么 ZooKeeper 如何协调这种场景？")]),e._v(" "),a("p",[e._v("这两个客户端连接到 ZooKeeper 的服务器，并获取其中存放的 B。保存 B 值的地方在 ZooKeeper 服务端中就称为 "),a("strong",[e._v("ZNode")]),e._v("。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gfbvc9a07cj31c70u0tif.jpg",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"_3-1-数据节点-znode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据节点-znode"}},[e._v("#")]),e._v(" 3.1 数据节点（Znode）")]),e._v(" "),a("p",[e._v('在谈到分布式的时候，我们通常说的“节点"是指组成集群的每一台机器。然而，在 Zookeeper 中，“节点"分为两类，第一类同样是指构成集群的机器，我们称之为「'),a("strong",[e._v("机器节点")]),e._v("」；第二类则是指数据模型中的数据单元，我们称之为「"),a("strong",[e._v("数据节点")]),e._v("」一一"),a("strong",[e._v("ZNode")]),e._v("。上图中的 A、B 就是一个数据结点。")]),e._v(" "),a("p",[e._v("Zookeeper 将所有数据存储在内存中，数据模型是一棵树（Znode Tree)，由斜杠（/）进行分割的路径，就是一个 Znode，例如 "),a("code",[e._v("/Configuration/B")]),e._v("。每个 Znode 上都会保存自己的数据内容，同时还会保存一系列属性信息。")]),e._v(" "),a("p",[e._v("在 Zookeeper 中，Znode 可以分为"),a("strong",[e._v("持久节点")]),e._v("和"),a("strong",[e._v("临时节点")]),e._v("两类。")]),e._v(" "),a("ul",[a("li",[e._v("所谓持久节点是指一旦这个 ZNode 被创建了，除非主动进行 ZNode 的移除操作，否则这个 ZNode 将一直保存在 Zookeeper 上。")]),e._v(" "),a("li",[e._v("而临时节点就不一样了，它的生命周期和客户端会话绑定，一旦客户端会话失效，那么这个客户端创建的所有临时节点都会被移除。")])]),e._v(" "),a("p",[e._v("另外，ZooKeeper 还允许用户为每个节点添加一个特殊的属性："),a("strong",[e._v("SEQUENTIAL")]),e._v("。也被叫做 "),a("strong",[e._v("顺序结点")]),e._v("，一旦节点被标记上这个属性，那么在这个节点被创建的时候，Zookeeper 会自动在其节点名后面追加上一个整型数字，这个整型数字是一个由父节点维护的自增数字。")]),e._v(" "),a("h4",{attrs:{id:"_3-2-事件监听器-watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-事件监听器-watcher"}},[e._v("#")]),e._v(" 3.2 事件监听器（Watcher）")]),e._v(" "),a("p",[e._v("上面说了 ZooKeeper 用来存放数据的 ZNode，并且把 B 的值存储在里面。如果 B 被更新了，两个客户端（Client1、Client2）如何获得通知呢？")]),e._v(" "),a("p",[e._v("Zookeeper 允许用户在指定节点上注册一些 Watcher，当 Znode 发生变化时，将"),a("strong",[e._v("触发并删除")]),e._v("一个 watch。当 watch 被触发时客户端会收到一个数据包，指示 znode 已经被修改。如果客户端和 ZooKeeper 服务器之间的连接中断，客户端将收到本地通知。"),a("strong",[e._v("该机制是 Zookeeper 实现分布式协调服务的重要特性")]),e._v("。")]),e._v(" "),a("p",[a("strong",[e._v("3.6.0中的新增功能")]),e._v("：客户端还可以在 znode 上设置永久性的递归监视，这些监视在触发时不会删除，并且会以递归方式触发已注册 znode 以及所有子 znode 的更改。")]),e._v(" "),a("p",[e._v("ZooKeeper 客户端（Client）会在指定的节点（/Configuration/B）上注册一个 Watcher，ZNode 上的 B 被更新的时候，服务端就会通知 Client1 和 Client2。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gfbzxka44aj31c70u04am.jpg",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"_3-3-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-版本"}},[e._v("#")]),e._v(" 3.3 版本")]),e._v(" "),a("p",[e._v("有了 Watcher 机制，就可以实现分布式协调/通知了，假设有这样的场景，两个客户端同时对 B 进行写入操作，这两个客户端就会存在竞争关系，通常需要对 B 进行加锁操作，ZK 通过 version 版本号来控制实现乐观锁中的“写入校验”机制。")]),e._v(" "),a("p",[e._v("Zookeeper 的每个 ZNode 上都会存储数据，对应于每个 ZNode，Zookeeper 都会为其维护一个叫作 "),a("strong",[e._v("Stat")]),e._v(" 的数据结构，Stat 中记录了这个 ZNode 的三个数据版本，分别是 "),a("strong",[e._v("version")]),e._v("（当前ZNode的版本）、"),a("strong",[e._v("cversion")]),e._v("（当前ZNode 子节点的版本）和 "),a("strong",[e._v("aversion")]),e._v("（当前ZNode的ACL版本）。")]),e._v(" "),a("blockquote",[a("p",[e._v("znode 里都有些啥呢？")])]),e._v(" "),a("h4",{attrs:{id:"_3-4-stat-结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-stat-结构体"}},[e._v("#")]),e._v(" 3.4 Stat 结构体")]),e._v(" "),a("p",[e._v("Znodes 维护了一个 stat 结构，其中包含数据更改、ACL更改的版本号、时间戳等。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("状态属性")]),e._v(" "),a("th",[e._v("说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("czxid")]),e._v(" "),a("td",[e._v("创建节点的事务zxid。 每次修改 ZK 状态都会收到一个zxid形式的时间戳，也就是 ZK 事务ID。事务ID是 ZK 中所有修改总的次序。每个修改都有唯一的zxid，如果zxid1小于zxid2，那么zxid1在zxid2之前发生")])]),e._v(" "),a("tr",[a("td",[e._v("ctime")]),e._v(" "),a("td",[e._v("znode被创建的毫秒数(从1970年开始)")])]),e._v(" "),a("tr",[a("td",[e._v("mzxid")]),e._v(" "),a("td",[e._v("znode最后更新的事务zxid")])]),e._v(" "),a("tr",[a("td",[e._v("mtime")]),e._v(" "),a("td",[e._v("znode最后修改的毫秒数(从1970年开始)")])]),e._v(" "),a("tr",[a("td",[e._v("pzxid")]),e._v(" "),a("td",[e._v("znode最后更新的子节点zxid")])]),e._v(" "),a("tr",[a("td",[e._v("version")]),e._v(" "),a("td",[e._v("数据节点版本号")])]),e._v(" "),a("tr",[a("td",[e._v("cversion")]),e._v(" "),a("td",[e._v("子节点版本号，znode子节点修改次数")])]),e._v(" "),a("tr",[a("td",[e._v("aversion")]),e._v(" "),a("td",[e._v("znode访问控制列表的变化号")])]),e._v(" "),a("tr",[a("td",[e._v("ephemeralOwner")]),e._v(" "),a("td",[e._v("如果是临时节点，这个是znode拥有者的session id。如果不是临时节点则是0")])]),e._v(" "),a("tr",[a("td",[e._v("dataLength")]),e._v(" "),a("td",[e._v("znode的数据长度")])]),e._v(" "),a("tr",[a("td",[e._v("numChildren")]),e._v(" "),a("td",[e._v("znode子节点数量")])])])]),e._v(" "),a("h4",{attrs:{id:"_3-5-会话-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-会话-session"}},[e._v("#")]),e._v(" 3.5 会话（Session）")]),e._v(" "),a("p",[e._v("Session 指的是 ZooKeeper 服务器与客户端会话。")]),e._v(" "),a("p",[a("strong",[e._v("在 ZooKeeper 中，一个客户端连接是指客户端和服务器之间的一个 TCP 长连接")]),e._v("。客户端启动的时候，首先会与服务器建立一个 TCP 连接，从第一次连接建立开始，客户端会话的生命周期也开始了。"),a("strong",[e._v("通过这个连接，客户端能够通过心跳检测与服务器保持有效的会话，也能够向 Zookeeper 服务器发送请求并接受响应，同时还能够通过该连接接收来自服务器的 Watch 事件通知。")])]),e._v(" "),a("p",[e._v("Session 作为会话实体，用来代表客户端会话，其包括 4 个属性：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("SessionID")]),e._v("，用来全局唯一识别会话；")]),e._v(" "),a("li",[a("strong",[e._v("TimeOut")]),e._v("，会话超时事件。客户端在创造 Session 实例的时候，会设置一个会话超时的时间。当由于服务器压力太大、网络故障或是客户端主动断开连接等各种原因导致客户端连接断开时，只要在 sessionTimeout 规定的时间内能够重新连接上集群中任意一台服务器，那么之前创建的会话仍然有效；")]),e._v(" "),a("li",[a("strong",[e._v("TickTime")]),e._v("，下次会话超时时间点；")]),e._v(" "),a("li",[a("strong",[e._v("isClosing")]),e._v("，当服务端如果检测到会话超时失效了，会通过设置这个属性将会话关闭。")])]),e._v(" "),a("h4",{attrs:{id:"_3-6-acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-acl"}},[e._v("#")]),e._v(" 3.6 ACL")]),e._v(" "),a("p",[e._v("Zookeeper 采用 ACL（Access Control Lists）策略来进行权限控制，类似于 UNIX 文件系统的权限控制。Zookeeper 定义了如下 5 种权限：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("CREATE")]),e._v(": 创建子节点的权限")]),e._v(" "),a("li",[a("strong",[e._v("READ")]),e._v(": 获取节点数据和子节点列表的权限")]),e._v(" "),a("li",[a("strong",[e._v("WRITE")]),e._v(": 更新节点数据的权限")]),e._v(" "),a("li",[a("strong",[e._v("DELETE")]),e._v(": 删除子节点的权限")]),e._v(" "),a("li",[a("strong",[e._v("ADMIN")]),e._v(": 设置节点ACL的权限")])]),e._v(" "),a("p",[e._v("其中尤其需要注意的是，CREATE 和 DELETE 这两种权限都是针对子节点的权限控制。")]),e._v(" "),a("h4",{attrs:{id:"_3-7-集群角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-集群角色"}},[e._v("#")]),e._v(" 3.7 集群角色")]),e._v(" "),a("p",[e._v("最典型集群模式：Master/Slave 模式（主备模式）。在这种模式中，通常 Master 服务器作为主服务器提供写服务，其他的 Slave 从服务器通过异步复制的方式获取 Master 服务器最新的数据提供读服务。")]),e._v(" "),a("p",[e._v("但是，在 ZooKeeper 中没有选择传统的 Master/Slave 概念，而是引入了"),a("strong",[e._v("Leader")]),e._v("、"),a("strong",[e._v("Follower")]),e._v(" 和 "),a("strong",[e._v("Observer")]),e._v(" 三种角色。")]),e._v(" "),a("ul",[a("li",[e._v("Leader： 为客户端提供"),a("strong",[e._v("读和写")]),e._v("的服务，负责投票的发起和决议，更新系统状态")]),e._v(" "),a("li",[e._v("Follower： 为客户端提供读服务，如果是写服务则转发给 Leader。在选举过程中参与投票")]),e._v(" "),a("li",[e._v("Observer： 为客户端提供读服务器，如果是写服务则转发给 Leader。不参与选举过程中的投票，也不参与“过半写成功”策略。在不影响写性能的情况下提升集群的读性能。此角色是在 zookeeper3.3 系列新增的角色。")])]),e._v(" "),a("h5",{attrs:{id:"server-状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-状态"}},[e._v("#")]),e._v(" server 状态")]),e._v(" "),a("ul",[a("li",[e._v("LOOKING：寻找Leader状态")]),e._v(" "),a("li",[e._v("LEADING：领导者状态，表明当前服务器角色是 Leader")]),e._v(" "),a("li",[e._v("FOLLOWING：跟随者状态，表明当前服务器角色是 Follower")]),e._v(" "),a("li",[e._v("OBSERVING：观察者状态，表明当前服务器角色是 Observer")])]),e._v(" "),a("h3",{attrs:{id:"选举机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选举机制"}},[e._v("#")]),e._v(" 选举机制")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ged7gzchv0j31j30u0dwy.jpg",alt:"zk-vote"}})]),e._v(" "),a("ol",[a("li",[e._v("服务器1启动，此时只有它一台服务器启动了，它发出去的报文没有任何响应，所以它的选举状态一直是LOOKING 状态。")]),e._v(" "),a("li",[e._v("服务器2启动，它与最开始启动的服务器1进行通信，互相交换自己的选举结果，由于两者都没有历史数据，所以 id 值较大的服务器2胜出，但是由于没有达到超过半数以上的服务器都同意选举它(这个例子中的半数以上是3)，所以服务器1、2还是继续保持 LOOKING 状态。")]),e._v(" "),a("li",[e._v("服务器3启动，根据前面的理论分析，服务器3成为服务器1、2、3中的老大，而与上面不同的是，此时有三台服务器选举了它，所以它成为了这次选举的Leader。")]),e._v(" "),a("li",[e._v("服务器4启动，根据前面的分析，理论上服务器4应该是服务器1、2、3、4中最大的，但是由于前面已经有半数以上的服务器选举了服务器3，所以它只能接受当小弟的命了。")]),e._v(" "),a("li",[e._v("服务器5启动，同4一样当小弟。")])]),e._v(" "),a("h3",{attrs:{id:"watcher-监听器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watcher-监听器"}},[e._v("#")]),e._v(" Watcher 监听器")]),e._v(" "),a("p",[e._v("Zookeeper 中最有特色且最不容易理解的是监视(Watches)。")]),e._v(" "),a("p",[e._v("Zookeeper 所有的读操作——"),a("strong",[e._v("getData()")]),e._v("，"),a("strong",[e._v("getChildren()")]),e._v("， 和 "),a("strong",[e._v("exists()")]),e._v(" 都可以设置监视(watch)，监视事件可以理解为一次性的触发器， 官方定义如下： a watch event is one-time trigger, sent to the client that set the watch, which occurs when the data for which the watch was set changes。对此需要作出如下理解：")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("One-time trigger（一次性触发）")])]),e._v(" "),a("p",[e._v("当设置监视的数据发生改变时，该监视事件会被发送到客户端，例如，如果客户端调用了 "),a("code",[e._v('getData("/znode1", true)')]),e._v(" 并且稍后 "),a("code",[e._v("/znode1")]),e._v(" 节点上的数据发生了改变或者被删除了，客户端将会获取到 "),a("code",[e._v("/znode1")]),e._v(" 发生变化的监视事件，而如果 "),a("code",[e._v("/znode1")]),e._v(" 再一次发生了变化，除非客户端再次对 "),a("code",[e._v("/znode1")]),e._v(" 设置监视，否则客户端不会收到事件通知。(3.6之后可以设置永久监视)")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Sent to the client（发送至客户端）")])]),e._v(" "),a("p",[e._v("Zookeeper 客户端和服务端是通过 socket 进行通信的，由于网络存在故障，所以监视事件很有可能不会成功到达客户端，监视事件是异步发送至监视者的，Zookeeper 本身提供了保序性(ordering guarantee)：即客户端只有首先看到了监视事件后，才会感知到它所设置监视的 znode 发生了变化(a client will never see a change for which it has set a watch until it first sees the watch event)。 网络延迟或者其他因素可能导致不同的客户端在不同的时刻感知某一监视事件，但是不同的客户端所看到的一切具有一致的顺序。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("The data for which the watch was set（被设置 watch 的数据）")])]),e._v(" "),a("p",[e._v("这意味着 znode 节点本身具有不同的改变方式。你也可以想象 Zookeeper 维护了两条监视链表：数据监视和子节点监视(data watches and child watches)， "),a("code",[e._v("getData()")]),e._v(" 和 "),a("code",[e._v("exists()")]),e._v(" 设置数据监视，"),a("code",[e._v("getChildren()")]),e._v(" 设置子节点监视。 或者，你也可以想象 Zookeeper 设置的不同监视返回不同的数据，"),a("code",[e._v("getData()")]),e._v(" 和 "),a("code",[e._v("exists()")]),e._v("返回 znode 节点的相关信息，而 "),a("code",[e._v("getChildren()")]),e._v(" 返回子节点列表。因此， "),a("code",[e._v("setData()")]),e._v(" 会触发设置在某一节点上所设置的数据监视(假定数据设置成功)，而一次成功的 "),a("code",[e._v("create()")]),e._v(" 操作则会触发当前节点上所设置的数据监视以及父节点的子节点监视。一次成功的 "),a("code",[e._v("delete()")]),e._v(" 操作将会触发当前节点的数据监视和子节点监视事件，同时也会触发该节点父节点的 "),a("code",[e._v("child watch")]),e._v("。")])])]),e._v(" "),a("p",[e._v("Zookeeper 中的监视是轻量级的，因此容易设置、维护和分发。当客户端与 Zookeeper 服务器端失去联系时，客户端并不会收到监视事件的通知，只有当客户端重新连接后，若在必要的情况下，以前注册的监视会重新被注册并触发，对于开发人员来说这通常是透明的。只有一种情况会导致监视事件的丢失，即：通过 "),a("code",[e._v("exists()")]),e._v(" 设置了某个 znode 节点的监视，但是如果某个客户端在此 znode 节点被创建和删除的时间间隔内与 zookeeper 服务器失去了联系，该客户端即使稍后重新连接 zookeepe r服务器后也得不到事件通知。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.yht7.com/upload/image/20200225/up-091052521680481615ca62218a4deacfa1f.JPEG",alt:"图片来源：yht7"}})]),e._v(" "),a("p",[e._v("从上图可以看到，Watcher 机制包括三个角色：客户端线程、客户端的 WatchManager 以及 ZooKeeper 服务器。Watcher 机制就是这三个角色之间的交互，整个过程分为注册、存储和通知三个步骤：")]),e._v(" "),a("ol",[a("li",[e._v("客户端向 ZooKeeper 服务器注册一个 Watcher 监听；")]),e._v(" "),a("li",[e._v("把这个监听信息存储到客户端的 WatchManager 中；")]),e._v(" "),a("li",[e._v("当 ZooKeeper 中的节点发生变化时，会通知客户端，客户端会调用相应 Watcher 对象中的回调方法。")])]),e._v(" "),a("blockquote",[a("p",[e._v("文章持续更新，可以微信搜「 "),a("strong",[e._v("JavaKeeper")]),e._v(" 」第一时间阅读，无套路领取 500+ 本电子书和 30+ 视频教学和源码，本文 "),a("strong",[e._v("GitHub")]),e._v(" "),a("a",{attrs:{href:"https://github.com/Jstarfish/JavaKeeper",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/JavaKeeper"),a("OutboundLink")],1),e._v(" 已经收录，Javaer 开发、面试必备技能兵器谱，有你想要的。")])]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考：")]),e._v(" "),a("p",[e._v("《从Paxos到ZooKeeper 分布式一致性原理与实践》")]),e._v(" "),a("p",[e._v("《阿里中间件团队博客》http://jm.taobao.org/2011/10/08/1232/")]),e._v(" "),a("p",[e._v("《Zookeeper官方文档》https://zookeeper.apache.org/doc/")]),e._v(" "),a("p",[e._v("《尚硅谷Zookeeper》")]),e._v(" "),a("p",[e._v("https://cloud.tencent.com/developer/article/1578401")])])}),[],!1,null,null,null);t.default=_.exports}}]);