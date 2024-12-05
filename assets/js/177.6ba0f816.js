(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{668:function(r,a,v){"use strict";v.r(a);var _=v(2),e=Object(_.a)({},(function(){var r=this,a=r.$createElement,v=r._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("blockquote",[v("p",[r._v("面试时，对 MQ 知识的考察离不开这几个问题，如何确保消息 100% 不丢失？有顺序？不重复？消息积压怎么办？")])]),r._v(" "),v("h2",{attrs:{id:"kafka-消息丢失问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#kafka-消息丢失问题"}},[r._v("#")]),r._v(" Kafka 消息丢失问题")]),r._v(" "),v("blockquote",[v("p",[r._v("那面对“在使用 MQ 消息队列时，如何确保消息不丢失”这个问题时，你要怎么回答呢？首先，你要分析其中有几个考点，比如：")]),r._v(" "),v("p",[r._v("如何知道有消息丢失？")]),r._v(" "),v("p",[r._v("哪些环节可能丢消息？")]),r._v(" "),v("p",[r._v("如何确保消息不丢失？")])]),r._v(" "),v("p",[v("strong",[r._v("Kafka 只对“已提交”的消息（committed message）做有限度的持久化保证。")])]),r._v(" "),v("p",[r._v("一条消息从生产到消费完成这个过程，可以划分三个阶段")]),r._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/81/05/81a01f5218614efea2838b0808709205.jpg",alt:""}})]),r._v(" "),v("h3",{attrs:{id:"生产者丢数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生产者丢数据"}},[r._v("#")]),r._v(" 生产者丢数据")]),r._v(" "),v("p",[r._v("可能会有哪些因素导致消息没有发送成功呢？其实原因有很多，例如网络抖动，导致消息压根就没有发送到 Broker 端；或者消息本身不合格导致 Broker 拒绝接收（比如消息太大了，超过了 Broker 的承受能力）等")]),r._v(" "),v("p",[r._v("解决此问题的方法非常简单："),v("strong",[r._v("Producer 永远要使用带有回调通知的发送 API，也就是说不要使用 producer.send(msg)，而要使用 producer.send(msg, callback)")]),r._v("。不要小瞧这里的 callback（回调），它能准确地告诉你消息是否真的提交成功了。一旦出现消息提交失败的情况，你就可以有针对性地进行处理。")]),r._v(" "),v("h3",{attrs:{id:"broker-丢数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#broker-丢数据"}},[r._v("#")]),r._v(" Broker 丢数据")]),r._v(" "),v("p",[r._v("在存储阶段正常情况下，只要 Broker 在正常运行，就不会出现丢失消息的问题，但是如果 Broker 出现了故障，比如进程死掉了或者服务器宕机了，还是可能会丢失消息的。")]),r._v(" "),v("p",[r._v("所以 Broker 会做副本，保证一条消息至少同步两个节点再返回 ack")]),r._v(" "),v("h3",{attrs:{id:"消费者丢数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消费者丢数据"}},[r._v("#")]),r._v(" 消费者丢数据")]),r._v(" "),v("p",[r._v("Consumer 端丢失数据主要体现在 Consumer 端要消费的消息不见了。Consumer 程序有个“位移”的概念，表示的是这个 Consumer 当前消费到的 Topic 分区的位置。下面这张图来自于官网，它清晰地展示了 Consumer 端的位移数据。")]),r._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/0c/37/0c97bed3b6350d73a9403d9448290d37.png",alt:""}})]),r._v(" "),v("p",[r._v("比如对于 Consumer A 而言，它当前的位移值就是 9；Consumer B 的位移值是 11。")]),r._v(" "),v("p",[r._v("这里的“位移”类似于我们看书时使用的书签，它会标记我们当前阅读了多少页，下次翻书的时候我们能直接跳到书签页继续阅读。")]),r._v(" "),v("p",[r._v("正确使用书签有两个步骤：第一步是读书，第二步是更新书签页。如果这两步的顺序颠倒了，就可能出现这样的场景：当前的书签页是第 90 页，我先将书签放到第 100 页上，之后开始读书。当阅读到第 95 页时，我临时有事中止了阅读。那么问题来了，当我下次直接跳到书签页阅读时，我就丢失了第 96～99 页的内容，即这些消息就丢失了。")]),r._v(" "),v("p",[r._v("同理，Kafka 中 Consumer 端的消息丢失就是这么一回事。要对抗这种消息丢失，办法很简单："),v("strong",[r._v("维持先消费消息（阅读），再更新位移（书签）的顺序")]),r._v("即可。这样就能最大限度地保证消息不丢失。")]),r._v(" "),v("p",[r._v("当然，这种处理方式可能带来的问题是消息的重复处理，类似于同一页书被读了很多遍，但这不属于消息丢失的情形。在专栏后面的内容中，我会跟你分享如何应对重复消费的问题。")]),r._v(" "),v("p",[v("strong",[r._v("如果是多线程异步处理消费消息，Consumer 程序不要开启自动提交位移，而是要应用程序手动提交位移")]),r._v("。")]),r._v(" "),v("h3",{attrs:{id:"最佳实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[r._v("#")]),r._v(" 最佳实践")]),r._v(" "),v("ol",[v("li",[r._v("不要使用 producer.send(msg)，而要使用 producer.send(msg, callback)。记住，一定要使用带有回调通知的 send 方法。")]),r._v(" "),v("li",[r._v("设置 acks = all。acks 是 Producer 的一个参数，代表了你对“已提交”消息的定义。如果设置成 all，则表明所有副本 Broker 都要接收到消息，该消息才算是“已提交”。这是最高等级的“已提交”定义。")]),r._v(" "),v("li",[r._v("设置 retries 为一个较大的值。这里的 retries 同样是 Producer 的参数，对应前面提到的 Producer 自动重试。当出现网络的瞬时抖动时，消息发送可能会失败，此时配置了 retries > 0 的 Producer 能够自动重试消息发送，避免消息丢失。")]),r._v(" "),v("li",[r._v("设置 unclean.leader.election.enable = false。这是 Broker 端的参数，它控制的是哪些 Broker 有资格竞选分区的 Leader。如果一个 Broker 落后原先的 Leader 太多，那么它一旦成为新的 Leader，必然会造成消息的丢失。故一般都要将该参数设置成 false，即不允许这种情况的发生。")]),r._v(" "),v("li",[r._v("设置 replication.factor >= 3。这也是 Broker 端的参数。其实这里想表述的是，最好将消息多保存几份，毕竟目前防止消息丢失的主要机制就是冗余。")]),r._v(" "),v("li",[r._v("设置 min.insync.replicas > 1。这依然是 Broker 端参数，控制的是消息至少要被写入到多少个副本才算是“已提交”。设置成大于 1 可以提升消息持久性。在实际环境中千万不要使用默认值 1。")]),r._v(" "),v("li",[r._v("确保 replication.factor > min.insync.replicas。如果两者相等，那么只要有一个副本挂机，整个分区就无法正常工作了。我们不仅要改善消息的持久性，防止数据丢失，还要在不降低可用性的基础上完成。推荐设置成 replication.factor = min.insync.replicas + 1。")]),r._v(" "),v("li",[r._v("确保消息消费完成再提交。Consumer 端有个参数 enable.auto.commit，最好把它设置成 false，并采用手动提交位移的方式。就像前面说的，这对于单 Consumer 多线程处理的场景而言是至关重要的。")])]),r._v(" "),v("h2",{attrs:{id:"kafka-消息重复问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#kafka-消息重复问题"}},[r._v("#")]),r._v(" Kafka 消息重复问题")]),r._v(" "),v("p",[r._v("在消息消费的过程中，如果出现失败的情况，通过补偿的机制发送方会执行重试，重试的过程就有可能产生重复的消息，那么如何解决这个问题？")]),r._v(" "),v("p",[r._v("这个问题其实可以换一种说法，就是如何解决消费端幂等性问题（幂等性，就是一条命令，任意多次执行所产生的影响均与一次执行的影响相同），只要消费端具备了幂等性，那么重复消费消息的问题也就解决了。")]),r._v(" "),v("p",[r._v("常用手段：")]),r._v(" "),v("p",[v("strong",[r._v("1. 利用数据库的唯一约束实现幂等")])]),r._v(" "),v("blockquote",[v("p",[r._v("例如我们刚刚提到的那个不具备幂等特性的转账的例子：将账户 X 的余额加 100 元。在这个例子中，我们可以通过改造业务逻辑，让它具备幂等性。")]),r._v(" "),v("p",[r._v("首先，我们可以限定，对于每个转账单每个账户只可以执行一次变更操作，在分布式系统中，这个限制实现的方法非常多，最简单的是我们在数据库中建一张转账流水表，这个表有三个字段：转账单 ID、账户 ID 和变更金额，然后给转账单 ID 和账户 ID 这两个字段联合起来创建一个唯一约束，这样对于相同的转账单 ID 和账户 ID，表里至多只能存在一条记录。")]),r._v(" "),v("p",[r._v("这样，我们消费消息的逻辑可以变为：“在转账流水表中增加一条转账记录，然后再根据转账记录，异步操作更新用户余额即可。”在转账流水表增加一条转账记录这个操作中，由于我们在这个表中预先定义了“账户 ID 转账单 ID”的唯一约束，对于同一个转账单同一个账户只能插入一条记录，后续重复的插入操作都会失败，这样就实现了一个幂等的操作。我们只要写一个 SQL，正确地实现它就可以了。")]),r._v(" "),v("p",[r._v("基于这个思路，不光是可以使用关系型数据库，只要是支持类似“INSERT IF NOT EXIST”语义的存储类系统都可以用于实现幂等，比如，你可以用 Redis 的 SETNX 命令来替代数据库中的唯一约束，来实现幂等消费。")])]),r._v(" "),v("p",[v("strong",[r._v("2. 全局唯一 ID")])]),r._v(" "),v("p",[r._v("适用范围最广的实现幂等性方法：记录并检查操作，也称为“Token 机制或者 GUID（全局唯一 ID）机制”，实现的思路特别简单：在执行数据更新操作之前，先检查一下是否执行过这个更新操作。")]),r._v(" "),v("p",[r._v("具体的实现方法是，在发送消息时，给每条消息指定一个全局唯一的 ID，消费时，先根据这个 ID 检查这条消息是否有被消费过，如果没有消费过，才更新数据，然后将消费状态置为已消费。")]),r._v(" "),v("blockquote",[v("p",[r._v("原理和实现是不是很简单？其实一点儿都不简单，在分布式系统中，这个方法其实是非常难实现的。首先，给每个消息指定一个全局唯一的 ID 就是一件不那么简单的事儿，方法有很多，但都不太好同时满足简单、高可用和高性能，或多或少都要有些牺牲。更加麻烦的是，在“检查消费状态，然后更新数据并且设置消费状态”中，三个操作必须作为一组操作保证原子性，才能真正实现幂等，否则就会出现 Bug。")]),r._v(" "),v("p",[r._v("比如说，对于同一条消息：“全局 ID 为 8，操作为：给 ID 为 666 账户增加 100 元”，有可能出现这样的情况：")]),r._v(" "),v("ul",[v("li",[r._v("t0 时刻：Consumer A 收到条消息，检查消息执行状态，发现消息未处理过，开始执行“账户增加 100 元”；")]),r._v(" "),v("li",[r._v("t1 时刻：Consumer B 收到条消息，检查消息执行状态，发现消息未处理过，因为这个时刻，Consumer A 还未来得及更新消息执行状态。")])]),r._v(" "),v("p",[r._v("这样就会导致账户被错误地增加了两次 100 元，这是一个在分布式系统中非常容易犯的错误，一定要引以为戒。")]),r._v(" "),v("p",[r._v("对于这个问题，当然我们可以用事务来实现，也可以用锁来实现，但是在分布式系统中，无论是分布式事务还是分布式锁都是比较难解决问题。")]),r._v(" "),v("p",[r._v("这点不是本文的讨论范围")])]),r._v(" "),v("p",[r._v("最简单的实现方案，就是在数据库中建一张消息日志表， 这个表有两个字段：消息 ID 和消息执行状态。")]),r._v(" "),v("p",[r._v("因为我们每次都会在插入之前检查是否消息已存在，所以就不会出现一条消息被执行多次的情况，这样就实现了一个幂等的操作。当然，基于这个思路，不仅可以使用关系型数据库，也可以通过 Redis 来代替数据库实现唯一约束的方案。")]),r._v(" "),v("p",[r._v("在这里我多说一句，想要解决“消息丢失”和“消息重复消费”的问题，有一个前提条件就是要实现一个全局唯一 ID 生成的技术方案。这也是面试官喜欢考察的问题，你也要掌握。")]),r._v(" "),v("p",[r._v("在分布式系统中，全局唯一 ID 生成的实现方法有数据库自增主键、UUID、Redis，Twitter-Snowflake 算法，我总结了几种方案的特点，你可以参考下。")]),r._v(" "),v("p",[v("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/8F/79/Ciqc1GAIDXuAZ2iUAAIGj0vJThg862.png",alt:""}})]),r._v(" "),v("h2",{attrs:{id:"kafka-消息保序问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#kafka-消息保序问题"}},[r._v("#")]),r._v(" Kafka 消息保序问题")]),r._v(" "),v("p",[r._v("从业务上把需要有序的打到同一个partition，大多数情况只需要业务上保证有序就可以，不用全局有序")]),r._v(" "),v("h2",{attrs:{id:"kafka-消息积压问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#kafka-消息积压问题"}},[r._v("#")]),r._v(" Kafka 消息积压问题")]),r._v(" "),v("p",[r._v("如果出现积压，那一定是性能问题，想要解决消息从生产到消费上的性能问题，就首先要知道哪些环节可能出现消息积压，然后在考虑如何解决。")]),r._v(" "),v("p",[r._v("因为消息发送之后才会出现积压的问题，所以和消息生产端没有关系，又因为绝大部分的消息队列单节点都能达到每秒钟几万的处理能力，相对于业务逻辑来说，性能不会出现在中间件的消息存储上面。毫无疑问，出问题的肯定是消息消费阶段，那么从消费端入手，如何回答呢？")]),r._v(" "),v("h4",{attrs:{id:"水平扩容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#水平扩容"}},[r._v("#")]),r._v(" 水平扩容")]),r._v(" "),v("p",[r._v("消费端的性能优化除了优化消费业务逻辑以外，也可以通过水平扩容，增加消费端的并发数来提升总体的消费性能。特别需要注意的一点是，**在扩容 Consumer 的实例数量的同时，必须同步扩容主题中的分区（也叫队列）数量，确保 Consumer 的实例数和分区数量是相等的。**如果 Consumer 的实例数量超过分区数量，这样的扩容实际上是没有效果的。原因我们之前讲过，因为对于消费者来说，在每个分区上实际上只能支持单线程消费。")]),r._v(" "),v("p",[r._v("如果是线上突发问题，要临时扩容，增加消费端的数量，与此同时，降级一些非核心的业务。通过扩容和降级承担流量，这是为了表明你对应急问题的处理能力。")]),r._v(" "),v("p",[r._v("其次，才是排查解决异常问题，如通过监控，日志等手段分析是否消费端的业务逻辑代码出现了问题，优化消费端的业务处理逻辑。")]),r._v(" "),v("p",[r._v("最后，如果是消费端的处理能力不足，可以通过水平扩容来提供消费端的并发处理能力，但这里有一个考点需要特别注意， 那就是在扩容消费者的实例数的同时，必须同步扩容主题 Topic 的分区数量，确保消费者的实例数和分区数相等。如果消费者的实例数超过了分区数，由于分区是单线程消费，所以这样的扩容就没有效果。")]),r._v(" "),v("p",[r._v("比如在 Kafka 中，一个 Topic 可以配置多个 Partition（分区），数据会被写入到多个分区中，但在消费的时候，Kafka 约定一个分区只能被一个消费者消费，Topic 的分区数量决定了消费的能力，所以，可以通过增加分区来提高消费者的处理能力。")])])}),[],!1,null,null,null);a.default=e.exports}}]);