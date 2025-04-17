(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{683:function(a,v,_){"use strict";_.r(v);var t=_(2),r=Object(t.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("blockquote",[_("p",[a._v("这个标题，我想了好久，其实应该叫 Kafka 数据高可靠，主要是想聊下三个最常见的问题（面试问题）")]),a._v(" "),_("ul",[_("li",[a._v("Kafka 如何保证消息不丢失？")]),a._v(" "),_("li",[a._v("Kafka 如何做到消息不重复？")]),a._v(" "),_("li",[a._v("Kafka 怎么保证消息不积压？")])])]),a._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),_("p",[a._v("消息队列的引入一般都是用来解决：系统解耦（异步通信）、流量控制这些场景的，程序的世界，怎么可能有完美的解决方案，只有最适合的方案，所以么，这些场景下的 MQ 会遇到一些小问题：")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("异步通信，就可能会出现数据一致性问题（消息丢失、消息重复）")])]),a._v(" "),_("li",[_("p",[a._v("流量控制，就可能会出现消息积压")])])]),a._v(" "),_("p",[a._v("再回顾下最经典的 Kafka 存储机制，一条消息从生产到消费完成可以划分成三个阶段，生产消息——消息存储——消费消息，我们遇到的问题也都从这三个方面")]),a._v(" "),_("p",[_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gh45cng275j30ny0bjwfr.jpg",alt:"img"}})]),a._v(" "),_("h2",{attrs:{id:"消息丢失问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息丢失问题"}},[a._v("#")]),a._v(" 消息丢失问题")]),a._v(" "),_("blockquote",[_("p",[a._v("那面对“在使用 MQ 消息队列时，如何确保消息不丢失”这个问题时，你要怎么回答呢？首先，你要分析其中有几个考点，比如：")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("如何知道有消息丢失？")])]),a._v(" "),_("li",[_("p",[a._v("哪些环节可能丢消息？")])]),a._v(" "),_("li",[_("p",[a._v("如何确保消息不丢失？")])])]),a._v(" "),_("p",[a._v("候选人在回答时，要先让面试官知道你的分析思路，然后再提供解决方案： 网络中的数据传输不可靠，想要解决如何不丢消息的问题，首先要知道哪些环节可能丢消息，以及我们如何知道消息是否丢失了，最后才是解决方案（而不是上来就直接说自己的解决方案）。就好比“架构设计”“架构”体现了架构师的思考过程，而“设计”才是最后的解决方案，两者缺一不可。")])]),a._v(" "),_("h3",{attrs:{id:"生产者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生产者"}},[a._v("#")]),a._v(" 生产者")]),a._v(" "),_("p",[a._v("生产者在生产消息的时候，会给每个发出的消息指定一个全局唯一的 ID，或者版本号，消费数据的时候就可以用来检验")]),a._v(" "),_("p",[a._v("这属于理论，怎么落地呢，可以用拦截器机制， 在生产端发送消息之前，通过拦截器将消息版本号注入消息中（版本号可以采用连续递增的 ID 生成，也可以通过分布式全局唯一 ID生成）。然后在消费端收到消息后，再通过拦截器检测版本号的连续性或消费状态，这样实现的好处是消息检测的代码不会侵入到业务代码中，可以通过单独的任务来定位丢失的消息，做进一步的排查。")]),a._v(" "),_("p",[a._v("这里需要你注意：如果同时存在多个消息生产端和消息消费端，通过版本号递增的方式就很难实现了，因为不能保证版本号的唯一性，此时只能通过全局唯一 ID 的方案来进行消息检测，具体的实现原理和版本号递增的方式一致。")]),a._v(" "),_("h2",{attrs:{id:"消息重复问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息重复问题"}},[a._v("#")]),a._v(" 消息重复问题")]),a._v(" "),_("p",[a._v("消息补偿的时候，一定会存在重复消息的情况，如何实现消费端的幂等")]),a._v(" "),_("h2",{attrs:{id:"消息积压问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息积压问题"}},[a._v("#")]),a._v(" 消息积压问题")]),a._v(" "),_("p",[a._v("消息积压，这个属于性能可靠，我们在 kafka 使用中所说的消息积压，指的其实就是消费端处理消息的能力出现了问题，和生产者和Kafka 集群其实没有多大关系")]),a._v(" "),_("blockquote",[_("p",[a._v("如果是线上突发问题，要临时扩容，增加消费端的数量，与此同时，降级一些非核心的业务。通过扩容和降级承担流量，这是为了表明你对应急问题的处理能力。")]),a._v(" "),_("p",[a._v("其次，才是排查解决异常问题，如通过监控，日志等手段分析是否消费端的业务逻辑代码出现了问题，优化消费端的业务处理逻辑。")]),a._v(" "),_("p",[a._v("最后，如果是消费端的处理能力不足，可以通过水平扩容来提供消费端的并发处理能力，但这里有一个考点需要特别注意， 那就是在扩容消费者的实例数的同时，必须同步扩容主题 Topic 的分区数量，确保消费者的实例数和分区数相等。如果消费者的实例数超过了分区数，由于分区是单线程消费，所以这样的扩容就没有效果。")]),a._v(" "),_("p",[a._v("比如在 Kafka 中，一个 Topic 可以配置多个 Partition（分区），数据会被写入到多个分区中，但在消费的时候，Kafka 约定一个分区只能被一个消费者消费，Topic 的分区数量决定了消费的能力，所以，可以通过增加分区来提高消费者的处理能力。")])]),a._v(" "),_("p",[a._v("这个也属于高性能的问题，所以还会引出一篇《Kafka 高性能》")])])}),[],!1,null,null,null);v.default=r.exports}}]);