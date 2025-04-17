(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{581:function(_,v,t){"use strict";t.r(v);var e=t(2),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/banner-mysql-index.png",alt:""}})]),_._v(" "),t("blockquote",[t("p",[_._v("Hello，我是海星。")]),_._v(" "),t("p",[_._v("先来一道经典的服务端面试题，看下你会吗")]),_._v(" "),t("p",[_._v("“如果有这样一个查询 "),t("code",[_._v("select * from table where a=1 group by b order by c;")]),_._v(" 如果每个字段都有一个单列索引，索引会生效吗？如果是复合索引，能说下几种情况吗？“")]),_._v(" "),t("p",[_._v("这篇文章算是一个 MySQL 索引的知识梳理，包括索引的一些概念、B 树的结构、和索引的原理以及一些索引策略的知识，祝好")])]),_._v(" "),t("h2",{attrs:{id:"一、索引基础回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、索引基础回顾"}},[_._v("#")]),_._v(" 一、索引基础回顾")]),_._v(" "),t("h3",{attrs:{id:"索引是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引是什么"}},[_._v("#")]),_._v(" 索引是什么")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("MYSQL 官方对索引的定义为：索引（Index）是帮助 MySQL 高效获取数据的数据结构，所以说"),t("strong",[_._v("索引的本质是：数据结构")])])]),_._v(" "),t("li",[t("p",[_._v("索引的目的在于提高查询效率，可以类比字典、 火车站的车次表、图书的目录等 。")])]),_._v(" "),t("li",[t("p",[_._v("可以简单的理解为“排好序的快速查找数据结构”，数据本身之外，"),t("font",{attrs:{color:"#FF0000"}},[t("strong",[_._v("数据库还维护着一个满足特定查找算法的数据结构")])]),_._v("，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法。这种数据结构，就是索引。")],1),_._v(" "),t("blockquote",[t("p",[_._v("常见的索引模型其实有很多，哈希表、有序数组，各种搜索树都可以实现索引结构")])]),_._v(" "),t("p",[_._v("下图是一种可能的索引方式示例（二叉搜索树）")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/search-index-demo.png",alt:""}})]),_._v(" "),t("p",[_._v("上图左边是一张简单的"),t("code",[_._v("学生成绩表")]),_._v("，只有学号 id 和成绩 score 两列（最左边的是数据的物理地址）")]),_._v(" "),t("p",[_._v("比如我们想要快速查指定成绩的学生，通过构建一个右边的二叉搜索树当索引，索引节点就是成绩数据，节点指向对应数据记录物理地址的指针，这样就可以运用二叉查找在一定的复杂度内获取到对应的数据，从而快速检索出符合条件的学生信息。")])]),_._v(" "),t("li",[t("p",[_._v("索引本身也很大，不可能全部存储在内存中，"),t("strong",[_._v("一般以索引文件的形式存储在磁盘上")])])])]),_._v(" "),t("h3",{attrs:{id:"优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[_._v("#")]),_._v(" 优势")]),_._v(" "),t("ul",[t("li",[_._v("索引大大减少了服务器需要扫描的数据量（提高数据检索效率）")]),_._v(" "),t("li",[_._v("索引可以帮助服务器避免排序和临时表（降低数据排序的成本，降低 CPU 的消耗）")]),_._v(" "),t("li",[_._v("索引可以将随机 I/O 变为顺序 I/O（降低数据库 IO 成本）")])]),_._v(" "),t("h3",{attrs:{id:"劣势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[_._v("#")]),_._v(" 劣势")]),_._v(" "),t("ul",[t("li",[_._v("索引也是一张表，保存了主键和索引字段，并指向实体表的记录，所以也需要占用内存")]),_._v(" "),t("li",[_._v("虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行 INSERT、UPDATE 和 DELETE。\n因为更新表时，MySQL 不仅要保存数据，还要保存一下索引文件每次更新添加了索引列的字段，都会调整因为更新所带来的键值变化后的索引信息")])]),_._v(" "),t("h3",{attrs:{id:"索引分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引分类"}},[_._v("#")]),_._v(" 索引分类")]),_._v(" "),t("p",[_._v("我们从 3 个角度看下索引的分类")]),_._v(" "),t("p",[t("strong",[_._v("从逻辑角度")])]),_._v(" "),t("ul",[t("li",[_._v("主键索引：主键索引是一种特殊的唯一索引，不允许有空值")]),_._v(" "),t("li",[_._v("普通索引或者单列索引：每个索引只包含单个列，一个表可以有多个单列索引")]),_._v(" "),t("li",[_._v("多列索引（复合索引、联合索引）：复合索引指多个字段上创建的索引，只有在查询条件中使用了创建索引时的第一个字段，索引才会被使用。")]),_._v(" "),t("li",[_._v("唯一索引或者非唯一索引")]),_._v(" "),t("li",[_._v("Full-Text 全文索引：它查找的是文本中的关键词，而不是直接比较索引中的值")]),_._v(" "),t("li",[_._v("空间索引：空间索引是对空间数据类型的字段建立的索引")])]),_._v(" "),t("p",[t("strong",[_._v("数据结构角度")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("Hash 索引：主要就是通过 Hash 算法，将数据库字段数据转换成定长的 Hash 值，与这条数据的行指针一并存入 Hash 表的对应位置；如果发生 Hash 碰撞，则在对应 Hash 键下以链表形式存储。查询时，就再次对待查关键字再次执行相同的 Hash 算法，得到 Hash 值，到对应 Hash 表对应位置取出数据即可，Memory 引擎是支持非唯一哈希索引的，如果发生 Hash 碰撞，会以链表的方式存放多个记录在同一哈希条目中。使用 Hash 索引的数据库并不多， 目前有 Memory 引擎和 NDB 引擎支持 Hash 索引。")]),_._v(" "),t("p",[_._v("缺点是，只支持等值比较查询，像 = 、 in() 这种，不支持范围查找，比如 where id > 10 这种，也不能排序。")])]),_._v(" "),t("li",[t("p",[_._v("B+ 树索引（下文会详细讲）")])])]),_._v(" "),t("p",[t("strong",[_._v("从物理存储角度")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("聚集索引（clustered index）")])]),_._v(" "),t("li",[t("p",[_._v("非聚集索引（non-clustered index），也叫辅助索引（secondary index）")]),_._v(" "),t("p",[_._v("聚集索引和非聚集索引都是 B+ 树结构")])])]),_._v(" "),t("h2",{attrs:{id:"二、mysql-索引结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、mysql-索引结构"}},[_._v("#")]),_._v(" 二、MySQL 索引结构")]),_._v(" "),t("p",[_._v("索引可以有很多种结构类型，这样可以为不同的场景提供更好的性能。")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("首先要明白索引（index）是在存储引擎（storage engine）层面实现的，而不是 server 层面")]),_._v("。不是所有的存储引擎都支持所有的索引类型。即使多个存储引擎支持某一索引类型，它们的实现和行为也可能有所差别。")]),_._v(" "),t("p",[_._v("像有的 二* 面试官上来就会问："),t("code",[_._v("MySQL 为什么不用 Hash 结构做索引?")])]),_._v(" "),t("p",[_._v("我会直接来一句，不好意思，MySQL 也会用 Hash 做索引，Memory 存储引擎就支持 Hash 索引。只是场景用的少，Hash 结构更适用于只有等值查询的场景")]),_._v(" "),t("p",[_._v("为什么不用二叉搜索树呢？ 这就很简单了，二叉树的叉叉上只有两个数，数据量太多的话，那得多少层呀。")])]),_._v(" "),t("h3",{attrs:{id:"磁盘-io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#磁盘-io"}},[_._v("#")]),_._v(" 磁盘 IO")]),_._v(" "),t("p",[_._v("介绍索引结构之前，我们先了解下"),t("a",{attrs:{href:"https://tech.meituan.com/2014/06/30/mysql-index.html",title:"MySQL索引原理及慢查询优化",target:"_blank",rel:"noopener noreferrer"}},[_._v("磁盘IO与预读"),t("OutboundLink")],1)]),_._v(" "),t("blockquote",[t("p",[_._v("磁盘读取数据靠的是机械运动，每次读取数据花费的时间可以分为寻道时间、旋转延迟、传输时间三个部分")]),_._v(" "),t("ul",[t("li",[_._v("寻道时间指的是磁臂移动到指定磁道所需要的时间，主流磁盘一般在 5ms 以下；")]),_._v(" "),t("li",[_._v("旋转延迟就是我们经常听说的磁盘转速，比如一个磁盘 7200 转，表示每分钟能转 7200 次，也就是说 1 秒钟能转 120 次，旋转延迟就是 "),t("code",[_._v("1/120/2 = 4.17ms")]),_._v("；")]),_._v(" "),t("li",[_._v("传输时间指的是从磁盘读出或将数据写入磁盘的时间，一般在零点几毫秒，相对于前两个时间可以忽略不计。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/disk-io.png",alt:""}})]),_._v(" "),t("p",[_._v("那么访问一次磁盘的时间，即一次磁盘 IO 的时间约等于 "),t("code",[_._v("5+4.17 = 9ms")]),_._v(" 左右，听起来还挺不错的，但要知道一台 500 -MIPS 的机器每秒可以执行 5 亿条指令，因为指令依靠的是电的性质，换句话说执行一次 IO 的时间可以执行 40 万条指令，数据库动辄十万百万乃至千万级数据，每次 9 毫秒的时间，显然是个灾难。下图是计算机硬件延迟的对比图，供大家参考：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/7f46a0a4.png",alt:""}})]),_._v(" "),t("p",[_._v("考虑到磁盘 IO 是非常高昂的操作，计算机操作系统做了一些优化，当一次 IO 时，不光把当前磁盘地址的数据，而是把相邻的数据也都读取到内存缓冲区内，因为局部预读性原理告诉我们，当计算机访问一个地址的数据的时候，与其相邻的数据也会很快被访问到。每一次 IO 读取的数据我们称之为"),t("strong",[_._v("一页(page)")]),_._v("。具体一页有多大数据跟操作系统有关，一般为 4k 或 8k，也就是我们读取一页内的数据时候，实际上才发生了一次 IO，这个理论对于索引的数据结构设计非常有帮助。")])]),_._v(" "),t("p",[_._v("那是不应该有一种数据结构，可以在每次查找数据时把磁盘 IO 次数控制在一个很小的数量级， B+ 树就这样应用而生。")]),_._v(" "),t("h3",{attrs:{id:"心里有点-b-树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#心里有点-b-树"}},[_._v("#")]),_._v(" 心里有点 B 树")]),_._v(" "),t("p",[_._v("有一点面试经验的同学，可能都碰到过这么一道面试题：MySQL InnoDB  索引为什么用 B+ 树，不用 B 树")]),_._v(" "),t("blockquote",[t("p",[_._v("B-Tree == B Tree，他两是一个东西，没有 B 减树 这玩意")])]),_._v(" "),t("p",[_._v("先大概（仔细）看下维基百科的概述：")]),_._v(" "),t("blockquote",[t("p",[_._v("在 B 树中，内部（非叶子）节点可以拥有可变数量的子节点（数量范围预先定义好）。当数据被插入或从一个节点中移除，它的子节点数量发生变化。为了维持在预先设定的数量范围内，内部节点可能会被合并或者分离。因为子节点数量有一定的允许范围，所以B 树不需要像其他自平衡查找树那样频繁地重新保持平衡，但是由于节点没有被完全填充，可能浪费了一些空间。子节点数量的上界和下界依特定的实现而设置。例如，在一个 2-3 B树（通常简称"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/2-3%E6%A0%91",target:"_blank",rel:"noopener noreferrer"}},[_._v("2-3树"),t("OutboundLink")],1),_._v("），每一个内部节点只能有 2 或 3 个子节点。")]),_._v(" "),t("p",[t("strong",[_._v("B 树中每一个内部节点会包含一定数量的键，键将节点的子树分开")]),_._v("。例如，如果一个内部节点有 3 个子节点（子树），那么它就必须有两个键： "),t("em",[_._v("a")]),_._v("1 和 "),t("em",[_._v("a")]),_._v("2 。左边子树的所有值都必须小于 "),t("em",[_._v("a")]),_._v("1 ，中间子树的所有值都必须在 "),t("em",[_._v("a")]),_._v("1 和 "),t("em",[_._v("a")]),_._v("2 之间，右边子树的所有值都必须大于 "),t("em",[_._v("a")]),_._v("2 。")]),_._v(" "),t("p",[_._v("在存取节点数据所耗时间远超过处理节点数据所耗时间的情况下，Ｂ树在可选的实现中拥有很多优势，因为存取节点的开销被分摊到里层节点的多次操作上。这通常出现在当节点存储在二级存储器如硬盘存储器上。通过最大化内部里层节点的子节点的数量，树的高度减小，存取节点的开销被缩减。另外，重新平衡树的动作也更少出现。子节点的最大数量取决于，每个子节点必需存储的信息量，和完整磁盘块的大小或者二次存储器中类似的容量。虽然 2-3 树更易于解释，实际运用中，Ｂ树使用"),t("a",{attrs:{href:"https://zh.wikipedia.org/w/index.php?title=%E4%BA%8C%E7%BA%A7%E5%AD%98%E5%82%A8%E5%99%A8&action=edit&redlink=1",target:"_blank",rel:"noopener noreferrer"}},[_._v("二级存储器"),t("OutboundLink")],1),_._v("，需要大量数目的子节点来提升效率。")]),_._v(" "),t("p",[_._v("而 B+ 树 又是 B 树的变种，B+ 树结构，所有的数据都存放在叶子节点上，且把叶子节点通过指针连接到一起，形成了一条数据链表，以加快相邻数据的检索效率。")])]),_._v(" "),t("p",[_._v("推荐一个数据结构可视化网站：https://www.cs.usfca.edu/~galles/visualization/Algorithms.html，可以用来生成各种数据结构")]),_._v(" "),t("p",[_._v("将 "),t("code",[_._v("[11,13,15,16,20,23,25,30,23,27]")]),_._v(" 用 B 树 和 B+ 树存储，看下结构")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/BTree-vs-B%2BTree.png",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"b-树和-b-树区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-树和-b-树区别"}},[_._v("#")]),_._v(" "),t("strong",[_._v("B 树和 B+ 树区别")])]),_._v(" "),t("p",[_._v("B-Tree 和 B+Tree  都是为磁盘等外存储设备设计的一种平衡查找树。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("关键词")]),_._v(" "),t("th",[_._v("B-树")]),_._v(" "),t("th",[_._v("B+树")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("最大分支，最小分支")]),_._v(" "),t("td",[_._v("每个结点最多有m个分支（子树），最少⌈m/2⌉（中间结点）个分支或者2个分支（是根节点非叶子结点）。")]),_._v(" "),t("td",[_._v("同左")]),_._v(" "),t("td",[_._v("m阶对应的就是就是最大分支")])]),_._v(" "),t("tr",[t("td",[_._v("n个关键字与分支的关系")]),_._v(" "),t("td",[_._v("分支等于n+1")]),_._v(" "),t("td",[_._v("分支等于n")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("关键字个数（B+树关键字个数要多）")]),_._v(" "),t("td",[_._v("大于等于⌈m/2⌉-1小于等于m-1")]),_._v(" "),t("td",[_._v("大于等于⌈m/2⌉小于等于m")]),_._v(" "),t("td",[_._v("B+树关键字个数要多，+体现在的地方。")])]),_._v(" "),t("tr",[t("td",[_._v("叶子结点相同点")]),_._v(" "),t("td",[_._v("每个节点中的元素互不相等且按照从小到大排列；所有的叶子结点都位于同一层。")]),_._v(" "),t("td",[_._v("同左")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("叶子结点不相同")]),_._v(" "),t("td",[_._v("不包含信息")]),_._v(" "),t("td",[_._v("叶子结点包含信息，指针指向记录。")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("叶子结点之间的关系")]),_._v(" "),t("td",[_._v("无")]),_._v(" "),t("td",[_._v("B+树上有一个指针指向关键字最小的叶子结点，所有叶子节点之间链接成一个线性链表")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("非叶子结点")]),_._v(" "),t("td",[_._v("一个关键字对应一个记录的存储地址")]),_._v(" "),t("td",[_._v("只起到索引的作用")]),_._v(" "),t("td",[_._v("无")])]),_._v(" "),t("tr",[t("td",[_._v("存储结构")]),_._v(" "),t("td",[_._v("相同")]),_._v(" "),t("td",[_._v("同左")]),_._v(" "),t("td",[_._v("无")])])])]),_._v(" "),t("h3",{attrs:{id:"为什么要用-b-树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用-b-树"}},[_._v("#")]),_._v(" 为什么要用 B+ 树")]),_._v(" "),t("p",[_._v("心里有了磁盘 IO 和 B  树的概念，接下来就顺理成章了。磁盘 IO 次数越少，那查询效率肯定就越高。而 IO 次数又取决于 B+ 树的高度")]),_._v(" "),t("p",[_._v("我们以 InnoDB 存储引擎来说明。")]),_._v(" "),t("p",[_._v("系统从磁盘读取数据到内存时是以磁盘块（block）为基本单位的，位于同一个磁盘块中的数据会被一次性读取出来，而不是需要什么取什么。")]),_._v(" "),t("p",[_._v("InnoDB 存储引擎中有页（Page）的概念，页是其磁盘管理的最小单位。InnoDB 存储引擎中默认每个页的大小为16KB，可通过参数 "),t("code",[_._v("innodb_page_size")]),_._v(" 将页的大小设置为 4K、8K、16K，在 MySQL 中可通过如下命令查看页的大小："),t("code",[_._v("show variables like 'innodb_page_size';")])]),_._v(" "),t("p",[_._v("而系统一个磁盘块的存储空间往往没有这么大，因此 InnoDB 每次申请磁盘空间时都会是若干地址连续磁盘块来达到页的大小 16KB。InnoDB 在把磁盘数据读入到磁盘时会以页为基本单位，在查询数据时如果一个页中的每条数据都能有助于定位数据记录的位置，这将会减少磁盘 I/O 次数，提高查询效率。")]),_._v(" "),t("h4",{attrs:{id:"举个例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[_._v("#")]),_._v(" 举个例子")]),_._v(" "),t("p",[_._v("索引是为了更快的查询到数据，MySQL 数据行可能会很多内容")]),_._v(" "),t("p",[_._v("以范围查找为例简单看下，B Tree 结构查询 [10-25] 的数据（从根节点开始，随机查找一样的道理，只是我画的图只有 2 层，说服力强的不是那么明显罢了）")]),_._v(" "),t("ol",[t("li",[_._v("加载根节点，第一个节点元素15，大于10【磁盘 I/O 操作第 1 次】")]),_._v(" "),t("li",[_._v("通过根节点的左子节点地址加载，找到 11，13【磁盘 I/O 操作第 2 次】")]),_._v(" "),t("li",[_._v("重新加载根节点，找到中间节点数据 16，20【磁盘 I/O 操作第 3 次】")]),_._v(" "),t("li",[_._v("再次加载根节点，23 小于 25，再加载右子节点，找到 25，结束【磁盘 I/O 操作第 4 次】")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-B%2BTree-store.png",alt:""}})]),_._v(" "),t("p",[_._v("而 B+ 树对范围查找就简单了，数据都在最下边的叶子节点下，而且链起来了，我只需找到第一个然后遍历就行（暂且不考虑页分裂等其他问题）。")]),_._v(" "),t("h4",{attrs:{id:"解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[_._v("#")]),_._v(" 解答")]),_._v(" "),t("blockquote",[t("p",[_._v("为什么 MySQL 索引要用 B+ 树不是 B 树？")])]),_._v(" "),t("p",[_._v("B+Tree 是在 B-Tree 基础上的一种优化，使其更适合实现外存储索引结构。")]),_._v(" "),t("p",[_._v("用 B+ 树不用 B 树考虑的是 IO 对性能的影响，B 树的每个节点都存储数据，而 B+ 树只有叶子节点才存储数据，所以查找相同数据量的情况下，B 树的高度更高，IO 更频繁。数据库索引是存储在磁盘上的，当数据量大时，就不能把整个索引全部加载到内存了，只能逐一加载每一个磁盘页（对应索引树的节点）。其中在  MySQL 底层对 B+ 树进行进一步优化："),t("strong",[_._v("在叶子节点中是双向链表，且在链表的头结点和尾节点也是循环指向的")]),_._v("。")]),_._v(" "),t("p",[_._v("B-Tree 结构图每个节点中不仅要包含数据的 key 值，还有 data 值。而每一个页的存储空间是有限的，如果 data 数据较大时将会导致每个节点（即一个页）能存储的 key 的数量很小，当存储的数据量很大时同样会导致 B-Tree 的深度较大，增大查询时的磁盘 I/O 次数，进而影响查询效率。在 B+Tree 中，"),t("strong",[_._v("所有数据记录节点都是按照键值大小顺序存放在同一层的叶子节点上")]),_._v("，而非叶子节点上只存储 key 值信息，这样可以大大加大每个节点存储的 key 值数量，降低 B+Tree 的高度。")]),_._v(" "),t("blockquote",[t("p",[_._v("IO 次数取决于 B+ 数的高度 h，假设当前数据表的数据为 N，每个磁盘块的数据项的数量是 m，则有 "),t("code",[_._v("h=㏒(m+1)N")]),_._v("，当数据量 N 一定的情况下，m 越大，h 越小；而 "),t("code",[_._v("m = 磁盘块的大小 / 数据项的大小")]),_._v("，磁盘块的大小也就是一个数据页的大小，是固定的，如果数据项占的空间越小，数据项的数量越多，树的高度越低。这就是为什么每个数据项，即索引字段要尽量的小，比如 int 占 4 字节，要比 bigint 8 字节少一半。这也是为什么 B+ 树要求把真实的数据放到叶子节点而不是内层节点，一旦放到内层节点，磁盘块的数据项会大幅度下降，导致树增高。当数据项等于 1 时将会退化成线性表。")])]),_._v(" "),t("h2",{attrs:{id:"三、myisam-和-innodb-索引原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、myisam-和-innodb-索引原理"}},[_._v("#")]),_._v(" 三、MyISAM 和 InnoDB 索引原理")]),_._v(" "),t("h3",{attrs:{id:"myisam-主键索引与辅助索引的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-主键索引与辅助索引的结构"}},[_._v("#")]),_._v(" MyISAM 主键索引与辅助索引的结构")]),_._v(" "),t("p",[_._v("MyISAM 引擎的索引文件和数据文件是分离的。"),t("strong",[_._v("MyISAM 引擎索引结构的叶子节点的数据域，存放的并不是实际的数据记录，而是数据记录的地址")]),_._v('。索引文件与数据文件分离，这样的索引称为"'),t("strong",[_._v("非聚簇索引")]),_._v('"。MyISAM 的主索引与辅助索引区别并不大，主键索引就是一个名为 PRIMARY 的唯一非空索引。')]),_._v(" "),t("blockquote",[t("p",[_._v("术语 “聚簇” 表示数据行和相邻的键值紧凑的存储在一起")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-MyISAM-Index.png",alt:""}})]),_._v(" "),t("p",[_._v("在 MyISAM 中，索引（含叶子节点）存放在单独的 "),t("code",[_._v(".myi")]),_._v(" 文件中，叶子节点存放的是数据的物理地址偏移量（通过偏移量访问就是随机访问，速度很快）。")]),_._v(" "),t("p",[_._v("主索引是指主键索引，键值不可能重复；辅助索引则是普通索引，键值可能重复。")]),_._v(" "),t("p",[_._v("通过索引查找数据的流程：先从索引文件中查找到索引节点，从中拿到数据的文件指针，再到数据文件中通过文件指针定位了具体的数据。")]),_._v(" "),t("p",[_._v("辅助索引类似。")]),_._v(" "),t("h3",{attrs:{id:"innodb-主键索引与辅助索引的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-主键索引与辅助索引的结构"}},[_._v("#")]),_._v(" InnoDB 主键索引与辅助索引的结构")]),_._v(" "),t("p",[t("strong",[_._v("InnoDB 引擎索引结构的叶子节点的数据域，存放的就是实际的数据记录")]),_._v("（对于主索引，此处会存放表中所有的数据记录；对于辅助索引此处会引用主键，检索的时候通过主键到主键索引中找到对应数据行），或者说，"),t("strong",[_._v("InnoDB 的数据文件本身就是主键索引文件")]),_._v('，这样的索引被称为"“'),t("strong",[_._v("聚簇索引")]),_._v("”，一个表只能有一个聚簇索引。")]),_._v(" "),t("h4",{attrs:{id:"主键索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主键索引"}},[_._v("#")]),_._v(" 主键索引：")]),_._v(" "),t("p",[_._v("我们知道 InnoDB 索引是聚集索引，它的索引和数据是存入同一个 "),t("code",[_._v(".idb")]),_._v(" 文件中的，因此它的索引结构是在同一个树节点中同时存放索引和数据，如下图中最底层的叶子节点有三行数据，对应于数据表中的 id、name、score 数据项。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-InnoDB-Index-primary.png",alt:""}})]),_._v(" "),t("p",[_._v("在 Innodb 中，索引分叶子节点和非叶子节点，非叶子节点就像新华字典的目录，单独存放在索引段中，叶子节点则是顺序排列的，在数据段中。")]),_._v(" "),t("p",[_._v("InnoDB 的数据文件可以按照表来切分（只需要开启"),t("code",[_._v("innodb_file_per_table)")]),_._v("，切分后存放在"),t("code",[_._v("xxx.ibd")]),_._v("中，不切分存放在 "),t("code",[_._v("xxx.ibdata")]),_._v("中。")]),_._v(" "),t("p",[_._v("从 MySQL 5.6.6 版本开始，它的默认值就是 ON 了。")]),_._v(" "),t("blockquote",[t("p",[_._v("扩展点：建议将这个值设置为 ON。因为，一个表单独存储为一个文件更容易管理，而且在你不需要这个表的时候，通过 drop table 命令，系统就会直接删除这个文件。而如果是放在共享表空间中，即使表删掉了，空间也是不会回收的。")]),_._v(" "),t("p",[_._v("所以会碰到这种情况，数据库占用空间太大后，把一个最大的表删掉了一半的数据，表文件的大小还是没变~")]),_._v(" "),t("p",[_._v("在 MySQL 8.0 版本以前，表结构是存在以.frm 为后缀的文件里。而 MySQL 8.0 版本，则已经允许把表结构定义放在系统数据表中了。")])]),_._v(" "),t("h4",{attrs:{id:"辅助-非主键-索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#辅助-非主键-索引"}},[_._v("#")]),_._v(" 辅助（非主键）索引：")]),_._v(" "),t("p",[_._v("这次我们以示例中学生表中的 name 列建立辅助索引，它的索引结构跟主键索引的结构有很大差别，在最底层的叶子结点有两行数据，第一行的字符串是辅助索引，按照 ASCII 码进行排序，第二行的整数是主键的值。")]),_._v(" "),t("p",[_._v("这就意味着，对 name 列进行条件搜索，需要两个步骤：")]),_._v(" "),t("ol",[t("li",[_._v("在辅助索引上检索 name，到达其叶子节点获取对应的主键；")]),_._v(" "),t("li",[_._v("使用主键在主索引上再进行对应的检索操作")])]),_._v(" "),t("p",[_._v("这也就是所谓的“"),t("strong",[_._v("回表查询")]),_._v("”")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-InnoDB-Index.png",alt:""}})]),_._v(" "),t("p",[t("strong",[_._v("InnoDB 索引结构需要注意的点")])]),_._v(" "),t("ol",[t("li",[_._v("数据文件本身就是索引文件")]),_._v(" "),t("li",[_._v("表数据文件本身就是按 B+Tree 组织的一个索引结构文件")]),_._v(" "),t("li",[_._v("聚集索引中叶节点包含了完整的数据记录")]),_._v(" "),t("li",[_._v("InnoDB 表必须要有主键，并且推荐使用整型自增主键")])]),_._v(" "),t("p",[_._v("正如我们上面介绍 InnoDB 存储结构，索引与数据是共同存储的，不管是主键索引还是辅助索引，在查找时都是通过先查找到索引节点才能拿到相对应的数据，如果我们在设计表结构时没有显式指定索引列的话，MySQL 会从表中选择数据不重复的列建立索引，如果没有符合的列，则 MySQL 自动为 InnoDB 表生成一个隐含字段作为主键，并且这个字段长度为 6 个字节，类型为整型。")]),_._v(" "),t("blockquote",[t("p",[_._v("你可能在一些建表规范里面见到过类似的描述，要求建表语句里一定要有自增主键。当然事无绝对，我们来分析一下哪些场景下应该使用自增主键，而哪些场景下不应该。")]),_._v(" "),t("p",[_._v("自增主键的插入数据模式，正符合了递增插入的场景。每次插入一条新记录，都是追加操作，都不涉及到挪动其他记录，也不会触发叶子节点的分裂。")]),_._v(" "),t("p",[_._v("而有业务逻辑的字段做主键，则往往不容易保证有序插入，这样写数据成本相对较高。")]),_._v(" "),t("p",[_._v("除了考虑性能外，我们还可以从存储空间的角度来看。假设你的表中确实有一个唯一字段，比如字符串类型的身份证号，那应该用身份证号做主键，还是用自增字段做主键呢？")]),_._v(" "),t("p",[_._v("由于每个非主键索引的叶子节点上都是主键的值。如果用身份证号做主键，那么每个二级索引的叶子节点占用约 20 个字节，而如果用整型做主键，则只要 4 个字节，如果是长整型（bigint）则是 8 个字节。")]),_._v(" "),t("p",[t("strong",[_._v("显然，主键长度越小，普通索引的叶子节点就越小，普通索引占用的空间也就越小。")])]),_._v(" "),t("p",[_._v("所以，从性能和存储空间方面考量，自增主键往往是更合理的选择。")]),_._v(" "),t("p",[_._v("有没有什么场景适合用业务字段直接做主键的呢？还是有的。比如，有些业务的场景需求是这样的：")]),_._v(" "),t("ol",[t("li",[_._v("只有一个索引；")]),_._v(" "),t("li",[_._v("该索引必须是唯一索引。")])]),_._v(" "),t("p",[_._v("你一定看出来了，这就是典型的 KV 场景。")]),_._v(" "),t("p",[_._v("由于没有其他索引，所以也就不用考虑其他索引的叶子节点大小的问题。")]),_._v(" "),t("p",[_._v("这时候我们就要优先考虑上一段提到的“尽量使用主键查询”原则，直接将这个索引设置为主键，可以避免每次查询需要搜索两棵树。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-secondary-index.png",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"四、索引策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、索引策略"}},[_._v("#")]),_._v(" 四、索引策略")]),_._v(" "),t("h3",{attrs:{id:"哪些情况需要创建索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况需要创建索引"}},[_._v("#")]),_._v(" 哪些情况需要创建索引")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("主键自动建立唯一索引")])]),_._v(" "),t("li",[t("p",[_._v("频繁作为查询条件的字段")])]),_._v(" "),t("li",[t("p",[_._v("查询中与其他表关联的字段，外键关系建立索引")])]),_._v(" "),t("li",[t("p",[_._v("单键/组合索引的选择问题，who? 高并发下倾向创建组合索引")])]),_._v(" "),t("li",[t("p",[_._v("查询中排序的字段，排序字段通过索引访问大幅提高排序速度")])]),_._v(" "),t("li",[t("p",[_._v("查询中统计或分组字段")])])]),_._v(" "),t("h3",{attrs:{id:"哪些情况不要创建索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况不要创建索引"}},[_._v("#")]),_._v(" 哪些情况不要创建索引")]),_._v(" "),t("ol",[t("li",[_._v("表记录太少")]),_._v(" "),t("li",[_._v("经常增删改的表")]),_._v(" "),t("li",[_._v("数据重复且分布均匀的表字段，只应该为最经常查询和最经常排序的数据列建立索引（如果某个数据类包含太多的重复数据，建立索引没有太大意义）")]),_._v(" "),t("li",[_._v("频繁更新的字段不适合创建索引（会加重IO负担）")]),_._v(" "),t("li",[_._v("where 条件里用不到的字段不创建索引")])]),_._v(" "),t("h3",{attrs:{id:"高效索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高效索引"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84%E7%B4%A2%E5%BC%95%E7%AD%96%E7%95%A5",title:"《高性能MySQL》"}},[_._v("高效索引")])]),_._v(" "),t("blockquote",[t("p",[_._v("整理自《高性能 MySQL》")])]),_._v(" "),t("h4",{attrs:{id:"独立的列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#独立的列"}},[_._v("#")]),_._v(" 独立的列")]),_._v(" "),t("p",[t("strong",[_._v("如果查询中的列不是独立的，MySQL 就不会使用索引")]),_._v("。“独立的列”是指索引不能是表达式的一部分，也不能是函数的参数。")]),_._v(" "),t("p",[_._v("比如：")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("EXPLAIN SELECT * FROM mydb.sys_user where user_id = 2;\n")])])]),t("p",[_._v("在 sys_user 表中，user_id 是主键，有主键索引，索引 explain 出来结果就是：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/explain-1.png",alt:""}})]),_._v(" "),t("p",[_._v("可见这次查询使用了PRIMARY KEY来优化查询，如果变成这样：")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("EXPLAIN SELECT * FROM mydb.sys_user where user_id + 1 = 2;\n")])])]),t("p",[_._v("结果就是：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/explain-2.png",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"前缀索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引"}},[_._v("#")]),_._v(" 前缀索引")]),_._v(" "),t("p",[_._v("前缀索引其实就是对文本的前几个字符（具体是几个字符在建立索引时指定）建立索引，这样建立起来的索引占用空间更小，所以查询更快。")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("ALTER TABLE table_name ADD KEY(column_name(prefix_length));\nALTER TABLE table_name ADD index index_name(column_name(prefix_length));\n")])])]),t("p",[_._v("对于内容很长的列，比如 blob, text 或者很长的 varchar 列，必须使用前缀索引，MySQL 不允许索引这些列的完整长度。")]),_._v(" "),t("p",[_._v("所以问题就在于要选择合适长度的前缀，即 prefix_length。前缀太短，选择性太低，前缀太长，索引占用空间太大。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/pre-index.png",alt:""}})]),_._v(" "),t("p",[_._v("比如上图中，两个不同的索引同样执行下面的语句")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("select id,name,email from user where emai='zhangsan@qq.com' \n")])])]),t("p",[_._v("执行效果会有很大的差别，普通索引 "),t("code",[_._v("idx_email")]),_._v(" 找到满足条件的记录后，再返回主键索引取出数据即可，而前缀索引会多次查到 "),t("code",[_._v("zhangs")]),_._v("，然后返回主键索引取出数据进行对比，会扫描多次数据行。")]),_._v(" "),t("p",[_._v("如果前缀索引取前 7 个字节构建的话 "),t("code",[_._v("idx_pre_email(7)")]),_._v("，就只需要扫描一行。")]),_._v(" "),t("p",[_._v("所以使用前缀索引，定义好长度，就可以做到既节省空间，又不用额外增加太多的查询成本。")]),_._v(" "),t("p",[_._v("为了决定前缀的合适长度，需要找到最常见的值的列表，然后和最常见的前缀列进行比较。")]),_._v(" "),t("p",[_._v("前缀索引是一种能使索引更小、更快的有效办法，但另一方面也有缺点："),t("strong",[_._v("MySQL 无法使用前缀索引做 ORDER BY 和 GROUP BY，也无法使用前缀索引做『覆盖索引』")]),_._v("。")]),_._v(" "),t("blockquote",[t("p",[_._v("一个常见的场景是针对很长的十六进制唯一 ID 使用前缀索引。")]),_._v(" "),t("p",[_._v("身份证号这样的数据如何索引？")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("使用倒序存储")]),_._v("：如果你存储身份证号的时候把它倒过来存，每次查询的时候，你可以这么写")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("select field_list from t where id_card = reverse('input_id_card_string');\t\n")])])])]),_._v(" "),t("li",[t("p",[_._v("**使用 hash 字段。**你可以在表上再创建一个整数字段，来保存身份证的校验码，同时在这个字段上创建索引。")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("alter table t add id_card_crc int unsigned, add index(id_card_crc);\n--查询\nselect field_list from t where id_card_crc=crc32('input_id_card_string') and id_card='input_id_card_string'\n")])])])])])]),_._v(" "),t("h4",{attrs:{id:"覆盖索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引"}},[_._v("#")]),_._v(" 覆盖索引")]),_._v(" "),t("p",[t("strong",[_._v("覆盖索引")]),_._v("（Covering Index），或者叫索引覆盖， 也就是平时所说的**"),t("mark",[_._v("不需要回表操作")]),_._v("**")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("就是 select 的数据列只用从索引中就能够取得，不必读取数据行，MySQL 可以利用索引返回 select 列表中的字段，而不必根据索引再次读取数据文件，换句话说"),t("strong",[_._v("查询列要被所建的索引覆盖")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("索引是高效找到行的一个方法，但是一般数据库也能使用索引找到一个列的数据，因此它不必读取整个行。毕竟索引叶子节点存储了它们索引的数据，当能通过读取索引就可以得到想要的数据，那就不需要读取行了。一个索引包含（覆盖）满足查询结果的数据就叫做覆盖索引。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("判断标准")])]),_._v(" "),t("p",[_._v("使用 explain，可以通过输出的 extra 列来判断，对于一个索引覆盖查询，显示为 "),t("strong",[_._v("using index")]),_._v("，MySQL 查询优化器在执行查询前会决定是否有索引覆盖查询")])])]),_._v(" "),t("h4",{attrs:{id:"多列索引-复合索引、联合索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多列索引-复合索引、联合索引"}},[_._v("#")]),_._v(" 多列索引（复合索引、联合索引）")]),_._v(" "),t("p",[_._v("组合索引(concatenated index)：由多个列构成的索引，如 "),t("code",[_._v("create index idx_emp on emp(col1, col2, col3, ……)")]),_._v("，则我们称 idx_emp 索引为组合索引。")]),_._v(" "),t("p",[t("strong",[_._v("在多个列上建立独立的单列索引大部分情况下并不能提高 MySQL 的查询性能")]),_._v("。对于下面的查询 where 条件，这两个单列索引都是不好的选择：")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("SELECT user_id,user_name FROM mydb.sys_user where user_id = 1 or user_name = 'zhang3';\n")])])]),t("p",[_._v("MySQL 5.0 版本之前，MySQL 会对这个查询使用全表扫描，除非改写成两个查询 UNION 的方式。")]),_._v(" "),t("p",[_._v("MySQL 5.0 和后续版本引入了一种叫做“"),t("strong",[_._v("索引合并")]),_._v("”的策略，查询能够同时使用这两个单列索引进行扫描，并将结果合并。这种算法有三个变种：OR 条件的联合（union），AND 条件的相交（intersection），组合前两种情况的联合及相交。索引合并策略有时候是一种优化的结果，但实际上更多时候说明了表上的索引建得很糟糕：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("当出现服务器对多个索引做相交操作时（多个AND条件），通常意味着需要一个包含所有相关列的多列索引，而不是多个独立的单列索引。")])]),_._v(" "),t("li",[t("p",[_._v("当出现服务器对多个索引做联合操作时（多个OR条件），通常需要耗费大量的 CPU 和内存资源在算法的缓存、排序和合并操作上。特别是当其中有些索引的选择性不高，需要合并扫描返回的大量数据的时候。")])]),_._v(" "),t("li",[t("p",[_._v("如果在 explain 中看到有索引合并，应该好好检查一下查询和表的结构，看是不是已经是最优的。")])])]),_._v(" "),t("h5",{attrs:{id:"最左前缀原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最左前缀原则"}},[_._v("#")]),_._v(" 最左前缀原则")]),_._v(" "),t("p",[_._v("在组合索引中有一个重要的概念：引导列(leading column)，在上面的例子中，col1 列为"),t("mark",[_._v("引导列")]),_._v("。当我们进行查询时可以使用 ”where col1 = ? ”，也可以使用 ”where col1 = ? and col2 = ?”，这样的限制条件都会使用索引，但是”where col2 = ? ”查询就不会使用该索引。"),t("strong",[_._v("所以限制条件中包含先导列时，该限制条件才会使用该组合索引。")])]),_._v(" "),t("blockquote",[t("p",[_._v("举个栗子：")]),_._v(" "),t("p",[_._v("当 B+ 树的数据项是复合的数据结构，比如(name,age,sex)的时候，B+ 树是按照从左到右的顺序来建立搜索树的，比如当(张三,20,F)这样的数据来检索的时候，B+ 树会优先比较 name 来确定下一步的所搜方向，如果 name 相同再依次比较 age 和 sex，最后得到检索的数据；但当 (20,F) 这样的没有 name 的数据来的时候，B+ 树就不知道下一步该查哪个节点，因为建立搜索树的时候 name 就是第一个比较因子，必须要先根据 name 来搜索才能知道下一步去哪里查询。比如当 (张三,F) 这样的数据来检索时，B+ 树可以用 name 来指定搜索方向，但下一个字段 age 的缺失，所以只能把名字等于张三的数据都找到，然后再匹配性别是 F 的数据了， 这个是非常重要的性质，即"),t("strong",[_._v("索引的最左匹配特性")]),_._v("。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/composite-index.png",alt:""}})]),_._v(" "),t("p",[_._v("可以看到，索引项是按照索引定义里面出现的字段顺序排序的。")]),_._v(" "),t("p",[_._v("当你的逻辑需求是查到所有名字是“Bob”的人时，可以快速定位到 ID = 2，然后向后遍历得到所有需要的结果。")]),_._v(" "),t("p",[_._v('如果你要查的是所有名字第一个字母是“B”的人，你的 SQL 语句的条件是"where name like ‘B %’"。这时，你也能够用上这个索引，查找到第一个符合条件的记录是 ID=2，然后向后遍历，直到不满足条件为止。')]),_._v(" "),t("p",[_._v("可以看到，不只是索引的全部定义，只要满足最左前缀，就可以利用索引来加速检索。这个最左前缀可以是联合索引的最左 N 个字段，也可以是字符串索引的最左 M 个字符。")]),_._v(" "),t("p",[_._v("那么就会出现一个问题："),t("strong",[_._v("在建立联合索引的时候，如何安排索引内的字段顺序。")])]),_._v(" "),t("p",[_._v("这里我们的评估标准是，索引的复用能力。因为可以支持最左前缀，所以当已经有了 (a,b) 这个联合索引后，一般就不需要单独在 a 上建立索引了。因此，"),t("strong",[_._v("第一原则是，如果通过调整顺序，可以少维护一个索引，那么这个顺序往往就是需要优先考虑采用的。")])]),_._v(" "),t("h5",{attrs:{id:"索引下推"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引下推"}},[_._v("#")]),_._v(" 索引下推")]),_._v(" "),t("p",[_._v("上一段我们说到满足最左前缀原则的时候，最左前缀可以用于在索引中定位记录。这时，你可能要问，那些不符合最左前缀的部分，会怎么样呢？")]),_._v(" "),t("p",[_._v("我们还是以联合索引（name,age,sex）为例。如果现在有一个需求：检索出表中“名字第一个字是 B，而且年龄是 19 岁的所有男孩”。那么，SQL 语句是这么写的：")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> select * from tuser where name like 'B %' and age=19 and sex=F;\n")])])]),t("p",[_._v("你已经知道了前缀索引规则，所以这个语句在搜索索引树的时候，只能用 “B”，找到第一个满足条件的记录 ID = 2。当然，这还不错，总比全表扫描要好。(组合索引满足最左匹配，但是遇到非等值判断时匹配停止)")]),_._v(" "),t("p",[_._v("然后呢？")]),_._v(" "),t("p",[_._v("当然是判断其他条件是否满足。")]),_._v(" "),t("p",[_._v("在 MySQL 5.6 之前，只能从 ID = 2 开始一个个回表。到主键索引上找出数据行，再对比字段值。")]),_._v(" "),t("p",[_._v("而 MySQL 5.6 引入的"),t("strong",[_._v("索引下推优化")]),_._v("（index condition pushdown)， 可以在索引遍历过程中，对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/index-ICP.png",alt:""}})]),_._v(" "),t("blockquote",[t("p",[_._v("索引下推在"),t("strong",[_._v("非主键索引")]),_._v("上的优化，可以有效减少回表的次数，大大提升了查询的效率")])]),_._v(" "),t("h4",{attrs:{id:"使用索引扫描来做排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用索引扫描来做排序"}},[_._v("#")]),_._v(" 使用索引扫描来做排序")]),_._v(" "),t("p",[_._v("MySQL 有两种方式可以生成有序的结果，通过排序操作或者按照索引顺序扫描，如果 explain 的 type 列的值为 index，则说明 MySQL 使用了索引扫描来做排序（不要和 extra 列的 Using index 搞混了，那个是使用了覆盖索引查询）。")]),_._v(" "),t("p",[_._v("扫描索引本身是很快的，因为只需要从一条索引记录移动到紧接着的下一条记录，但如果索引不能覆盖查询所需的全部列，那就不得不每扫描一条索引记录就回表查询一次对应的整行，这基本上都是随机 I/O，因此按索引顺序读取数据的速度通常要比顺序地全表扫描慢，尤其是在 I/O 密集型的工作负载时。")]),_._v(" "),t("p",[t("strong",[_._v("MySQL 可以使用同一个索引既满足排序，又用于查找行，因此，如果可能，设计索引时应该尽可能地同时满足这两种任务，这样是最好的")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("只有当索引的列顺序和 order by 子句的顺序完全一致，并且所有列的排序方向（倒序或升序，创建索引时可以指定 ASC 或 DESC）都一样时，MySQL 才能使用索引来对结果做排序")]),_._v("，如果查询需要关联多张表，则只有当 order by 子句引用的字段全部为第一个表时，才能使用索引做排序，order by 子句和查找型查询的限制是一样的，需要满足索引的最左前缀的要求，否则 MySQL 都需要执行排序操作，而无法使用索引排序。")]),_._v(" "),t("h4",{attrs:{id:"压缩-前缀压缩-索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩-前缀压缩-索引"}},[_._v("#")]),_._v(" 压缩（前缀压缩）索引")]),_._v(" "),t("p",[_._v("MyISAM 使用前缀压缩来减少索引的大小，从而让更多的索引可以放入内存中，这在某些情况下能极大地提高性能。")]),_._v(" "),t("p",[_._v("默认只压缩字符串，但通过参数设置也可以对整数做压缩。")]),_._v(" "),t("p",[_._v("MyISAM 压缩每个索引块的方法是，先完全保存索引块中的第一个值，然后将其他值和第一个值进行比较得到相同前缀的字节数和剩余的不同后缀部分，把这部分存储起来即可。")]),_._v(" "),t("p",[_._v("例如，索引块中的第一个值是“perform“，第二个值是”performance“，那么第二个值的前缀压缩后存储的是类似”7,ance“这样的形式。MyISAM 对"),t("strong",[_._v("行指针")]),_._v("也采用类似的前缀压缩方式。")]),_._v(" "),t("p",[_._v("压缩块使用更少的空间，代价是某些操作可能更慢。因为每个值的压缩前缀都依赖前面的值，所以 MyISAM 查找时无法在索引块使用二分查找而只能从头开始扫描。正序的扫描速度还不错，但是如果是倒序扫描——例如 ORDER BY DESC——就不是很好了。所有在块中查找某一行的操作平均都需要扫描半个索引块。")]),_._v(" "),t("p",[_._v("测试表明，对于 CPU 密集型应用，因为扫描需要随机查找，压缩索引使得 MyISAM 在索引查找上要慢好几倍。压缩索引的倒序扫描就更慢了。压缩索引需要在 CPU 内存资源与磁盘之间做权衡。压缩索引可能只需要十分之一大小的磁盘空间，如果是 I/O 密集型应用，对某些查询带来的好处会比成本多很多。")]),_._v(" "),t("p",[_._v("可以在 CREATE TABLE 语句中指定 PACK_KEYS 参数来控制索引压缩的方式。")]),_._v(" "),t("h4",{attrs:{id:"重复索引和冗余索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重复索引和冗余索引"}},[_._v("#")]),_._v(" 重复索引和冗余索引")]),_._v(" "),t("p",[_._v("MySQL 允许在相同列上创建多个索引，无论是有意的还是无意的。有意的用途没想明白~")]),_._v(" "),t("p",[t("strong",[_._v("重复索引是指在相同的列上按照相同的顺序创建的相同类型的索引")]),_._v("。应该避免这样创建重复索引，发现以后也应该立即移除。")]),_._v(" "),t("p",[_._v("冗余索引和重复索引有一些不同。如果创建了索引(A,B)，再创建索引(A)就是冗余索引，因为这只是前一个索引的前缀索引。因此索引(A,B)也可以当做索引(A)来使用（这种冗余只是对 B-Tree 索引来说的）。但是如果再创建索引(B,A)，则不是冗余索引，索引(B)也不是，因为B不是索引(A,B)的最左前缀。另外，其他不同类型的索引（例如哈希索引或者全文索引）也不会是 B-Tree 索引的冗余索引，而无论覆盖的索引列是什么。")]),_._v(" "),t("h4",{attrs:{id:"未使用的索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未使用的索引"}},[_._v("#")]),_._v(" 未使用的索引")]),_._v(" "),t("p",[_._v("除了冗余索引和重复索引，可能还会有一些服务器永远不使用的索引，这样的索引完全是累赘，建议考虑删除，有两个工具可以帮助定位未使用的索引：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("在 percona server 或者 mariadb 中先打开 userstat=ON 服务器变量，默认是关闭的，然后让服务器运行一段时间，再通过查询"),t("code",[_._v("information_schema.index_statistics")]),_._v(" 就能查到每个索引的使用频率。")])]),_._v(" "),t("li",[t("p",[_._v("使用 percona toolkit 中的 pt-index-usage 工具，该工具可以读取查询日志，并对日志中的每个查询进行explain 操作，然后打印出关于索引和查询的报告，这个工具不仅可以找出哪些索引是未使用的，还可以了解查询的执行计划。")])])]),_._v(" "),t("h2",{attrs:{id:"五、索引优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、索引优化"}},[_._v("#")]),_._v(" 五、索引优化")]),_._v(" "),t("h3",{attrs:{id:"导致-sql-执行慢的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导致-sql-执行慢的原因"}},[_._v("#")]),_._v(" 导致 SQL 执行慢的原因")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("硬件问题。如网络速度慢，内存不足，I/O 吞吐量小，磁盘空间满了等")])]),_._v(" "),t("li",[t("p",[_._v("没有索引或者索引失效")])]),_._v(" "),t("li",[t("p",[_._v("数据过多（分库分表）")])]),_._v(" "),t("li",[t("p",[_._v("服务器调优及各个参数设置（调整my.cnf）")])])]),_._v(" "),t("h3",{attrs:{id:"索引优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引优化"}},[_._v("#")]),_._v(" 索引优化")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("CREATE TABLE hero(\n    id INT NOT NULL auto_increment,\n    name VARCHAR(100) NOT NULL,\n    phone CHAR(11) NOT NULL,\n    country varchar(100) NOT NULL,\n    PRIMARY KEY (id),\n    KEY idx_name_phone (name, phone)\n);\n")])])]),t("ol",[t("li",[t("p",[_._v("全值匹配我最爱（就是搜索条件中的列和索引列一致）")]),_._v(" "),t("blockquote",[t("p",[t("code",[_._v("select name, phone from hero where name = 'star' and phone = '13266666666'")])]),_._v(" "),t("p",[_._v("因为有「查询优化器」的存在，所有搜索条件调换顺序，改成 "),t("code",[_._v("phone = '13266666666' and name = 'star'")]),_._v(" 无影响")])])]),_._v(" "),t("li",[t("p",[_._v("最佳左前缀法则，比如建立了一个联合索引(a,b,c)，那么其实我们可利用的索引就有(a)  (a,b)（a,c）(a,b,c)")])]),_._v(" "),t("li",[t("p",[_._v("不在索引列上做任何操作（计算、函数、(自动or手动)类型转换），会导致索引失效而转向全表扫描")])]),_._v(" "),t("li",[t("p",[_._v("存储引擎不能使用索引中范围条件右边的列")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("-- 只能用到 name 列\nSELECT * FROM hero WHERE name > 'Join' AND name < 'Lily' AND phone > '13222223333';\n\n-- 但是如果左边的列是精确查找，则右边的列可以进行范围查找, 也可以用到 phone 列\nSELECT * FROM hero WHERE name = 'Join' AND phone > '13222223333';\n")])])])]),_._v(" "),t("li",[t("p",[_._v("尽量使用覆盖索引(只访问索引的查询(索引列和查询列一致))，减少 select *")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("is null")]),_._v(" , "),t("code",[_._v("is not null")]),_._v(" 也无法使用索引")])]),_._v(" "),t("li",[t("p",[t("code",[_._v('like "xxxx%"')]),_._v(" 是可以用到索引的，"),t("code",[_._v('like "%xxxx"')]),_._v(" 则不行(like \"%xxx%\" 同理)。like 以通配符开头('%abc...')索引失效会变成全表扫描的操作，")])]),_._v(" "),t("li",[t("p",[_._v("字符串不加单引号索引失效（隐式类型转换）")])]),_._v(" "),t("li",[t("p",[_._v("少用 or，用它来连接时会索引失效（这个其实不是绝对的，or 走索引与否，还和优化器的"),t("strong",[_._v("预估")]),_._v("有关，5.0 之后出现的 index merge 技术就是优化这个的）")])]),_._v(" "),t("li",[t("p",[_._v("<，<=，=，>，>=，BETWEEN，IN 可用到索引，<>，not in ，!= 则不行，会导致全表扫描")])]),_._v(" "),t("li",[t("p",[_._v("使用联合索引时，ASC、DESC 混用会导致索引失效")])])]),_._v(" "),t("h3",{attrs:{id:"建索引的几大原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建索引的几大原则"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"https://tech.meituan.com/2014/06/30/mysql-index.html",title:"MySQL索引原理及慢查询优化",target:"_blank",rel:"noopener noreferrer"}},[_._v("建索引的几大原则"),t("OutboundLink")],1)]),_._v(" "),t("ol",[t("li",[t("p",[_._v("最左前缀匹配原则，非常重要的原则，MySQL 会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如 "),t("code",[_._v("a = 1 and b = 2 and c > 3 and d = 4")]),_._v(" 如果建立(a,b,c,d)顺序的索引，d 是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d 的顺序可以任意调整。")])]),_._v(" "),t("li",[t("p",[_._v("= 和 in 可以乱序，比如 "),t("code",[_._v("a = 1 and b = 2 and c = 3")]),_._v(" 建立(a,b,c)索引可以任意顺序，MySQL 的查询优化器会帮你优化成索引可以识别的形式。")])]),_._v(" "),t("li",[t("p",[_._v("尽量选择区分度高的列作为索引，区分度的公式是 "),t("code",[_._v("count(distinct col)/count(*)")]),_._v("，表示字段不重复的比例，比例越大我们扫描的记录数越少，唯一键的区分度是 1，而一些状态、性别字段可能在大数据面前区分度就是 0，那可能有人会问，这个比例有什么经验值吗？使用场景不同，这个值也很难确定，一般需要 join 的字段我们都要求是 0.1 以上，即平均 1 条扫描 10 条记录。")])]),_._v(" "),t("li",[t("p",[_._v("索引列不能参与计算，保持列“干净”，比如 "),t("code",[_._v("from_unixtime(create_time) = ’2014-05-29’")]),_._v(" 就不能使用到索引，原因很简单，b+ 树中存的都是数据表中的字段值，但进行检索时，需要把所有元素都应用函数才能比较，显然成本太大。所以语句应该写成 "),t("code",[_._v("create_time = unix_timestamp(’2014-05-29’)")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("尽量的扩展索引，不要新建索引。比如表中已经有 a 的索引，现在要加(a,b)的索引，那么只需要修改原来的索引即可。")])]),_._v(" "),t("li",[t("p",[_._v("索引列的类型尽量小")]),_._v(" "),t("ul",[t("li",[_._v("数据类型越小，索引占用的存储空间就越少，在一个数据页内就可以放下更多的记录，从而减少磁盘"),t("code",[_._v("I/O")]),_._v("带来的性能损耗")])])])]),_._v(" "),t("blockquote",[t("p",[_._v("我有一个公众号「 "),t("strong",[_._v("JavaKeeper")]),_._v(" 」")]),_._v(" "),t("p",[_._v("我还有一个 "),t("strong",[_._v("GitBook")]),_._v(" "),t("a",{attrs:{href:"https://github.com/Jstarfish/JavaKeeper",target:"_blank",rel:"noopener noreferrer"}},[_._v("github.com/JavaKeeper"),t("OutboundLink")],1)])]),_._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[_._v("#")]),_._v(" Reference")]),_._v(" "),t("ul",[t("li",[_._v("https://dev.mysql.com/doc/refman/8.0/en/create-index.html")]),_._v(" "),t("li",[_._v("https://zh.wikipedia.org/wiki/B%E6%A0%91")]),_._v(" "),t("li",[_._v("https://medium.com/@mena.meseha/what-is-the-difference-between-mysql-innodb-b-tree-index-and-hash-index-ed8f2ce66d69")]),_._v(" "),t("li",[_._v("https://www.javatpoint.com/b-tree")]),_._v(" "),t("li",[_._v("https://blog.csdn.net/Abysscarry/article/details/80792876")]),_._v(" "),t("li",[_._v("《MySQL 实战 45 讲》")]),_._v(" "),t("li",[_._v("《高性能 MySQL》")])])])}),[],!1,null,null,null);v.default=a.exports}}]);