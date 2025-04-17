(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{614:function(v,_,s){"use strict";s.r(_);var e=s(2),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://images.pexels.com/photos/33278/disc-reader-reading-arm-hard-drive.jpg?cs=srgb&dl=pexels-pixabay-33278.jpg",alt:""}})]),v._v(" "),s("blockquote",[s("p",[v._v("带着疑问，或者是面试问题去看 Redis 的持久化，或许会有不一样的视角，这几个问题你废了吗？")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("Redis 有哪几种持久化方式？有什么区别？")])]),v._v(" "),s("li",[s("p",[v._v("如何选择合适的持久化方式？项目中用的哪种，为什么？")])]),v._v(" "),s("li",[s("p",[v._v("aof 如果文件越来越大，怎么办？")])]),v._v(" "),s("li",[s("p",[v._v("Redis 采用 aof 持久化时，数据是先写入内存，还是先写入日志，为什么？")])])])]),v._v(" "),s("p",[v._v("Redis 的数据全部在内存里，如果突然宕机，数据就会全部丢失，因此必须有一种机制来保证 Redis 的数据不会因为故障而丢失，这种机制就是 Redis 的持久化机制，它会将内存中的数据库状态 "),s("strong",[v._v("保存到磁盘")]),v._v(" 中。")]),v._v(" "),s("p",[s("strong",[v._v("Redis 有两种持久化的方式：快照（"),s("code",[v._v("RDB")]),v._v("文件）和追加式文件（"),s("code",[v._v("AOF")]),v._v("文件)")])]),v._v(" "),s("h2",{attrs:{id:"rdb-redis-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-redis-database"}},[v._v("#")]),v._v(" RDB（Redis DataBase）")]),v._v(" "),s("h4",{attrs:{id:"是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[v._v("#")]),v._v(" 是什么")]),v._v(" "),s("p",[s("strong",[v._v("在指定的时间间隔内将内存中的所有数据集快照写入磁盘")]),v._v("，也就是行话讲的 Snapshot 快照，它执行的是"),s("strong",[v._v("全量快照")]),v._v("，它恢复时是将快照文件直接读到内存里。")]),v._v(" "),s("blockquote",[s("p",[v._v("这就类似于照片，当你拍照时，一张照片就能把拍照那一瞬间的形象完全记下来。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://i04piccdn.sogoucdn.com/2c4975a0d2f847c6",alt:""}})])]),v._v(" "),s("p",[v._v("Redis 会单独创建（fork）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何 IO 操作的，这就确保了极高的性能，如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那 RDB 方式是比较高效的。")]),v._v(" "),s("p",[v._v("RDB 的缺点是最后一次持久化后的数据可能丢失。")]),v._v(" "),s("blockquote",[s("p",[s("strong",[v._v("?")]),v._v(" What ? Redis 不是单进程的吗?")])]),v._v(" "),s("blockquote",[s("p",[v._v("Redis 使用操作系统的多进程 COW(Copy On Write) 机制来实现快照持久化（在执行快照的同时，正常处理写操作）， fork 是类 Unix 操作系统上"),s("strong",[v._v("创建进程")]),v._v("的主要方法。COW(Copy On Write)是计算机编程中使用的一种优化策略。")]),v._v(" "),s("p",[v._v("fork 的作用是复制一个与当前进程一样的进程。新进程的所有数据（变量、环境变量、程序计数器等）数值都和原进程一致，但是是一个全新的进程，并作为原进程的子进程。 子进程读取数据，然后序列化写到磁盘中。")])]),v._v(" "),s("h4",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[v._v("#")]),v._v(" 配置")]),v._v(" "),s("p",[s("strong",[v._v("配置位置")]),v._v("： SNAPSHOTTING")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-snapshotting.jpg",alt:""}})]),v._v(" "),s("p",[v._v("rdb 默认保存的是 "),s("strong",[v._v("dump.rdb")]),v._v(" 文件，如下（不可读）")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-rdb-file.jpg",alt:""}})]),v._v(" "),s("p",[v._v("你可以对 Redis 进行设置， 让它在“ N 秒内数据集至少有 M 个改动”这一条件被满足时， 自动保存一次数据集。")]),v._v(" "),s("p",[v._v("比如说， 以下设置会让 Redis 在满足“ 60 秒内有至少有 1000 个键被改动”这一条件时， 自动保存一次数据集：")]),v._v(" "),s("p",[s("code",[v._v("save 60 1000")])]),v._v(" "),s("h4",{attrs:{id:"触发-rdb-快照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发-rdb-快照"}},[v._v("#")]),v._v(" 触发 RDB 快照")]),v._v(" "),s("p",[v._v("除了通过配置文件的方式，自动触发生成快照，也可以使用命令手动触发")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("save")]),v._v("：save 时只管保存，在主线程中执行，会导致阻塞，所以请慎用；")]),v._v(" "),s("li",[s("strong",[v._v("bgsave")]),v._v("：可以理解为 "),s("code",[v._v("background save")]),v._v(" ，当执行 bgsave 命令时，redis 会 fork 出一个子进程，专门用于写入 RDB 文件，避免了主线程的阻塞，这也是 Redis RDB 文件生成的默认配置。可以通过 "),s("code",[v._v("lastsave")]),v._v(" 命令获取最后一次成功执行快照的时间")]),v._v(" "),s("li",[v._v("执行 "),s("strong",[v._v("flushall")]),v._v(" 命令，也会产生 dump.rdb 文件，但里面是空的，无意义")]),v._v(" "),s("li",[v._v("客户端执行 shutdown 关闭 redis 时，也会触发快照")])]),v._v(" "),s("blockquote",[s("p",[v._v("简单来说，bgsave 子进程是由主线程 fork 生成的，可以共享主线程的所有内存数据。bgsave 子进程运行后，开始读取主线程的内存数据，并把它们写入 RDB 文件。此时，如果主线程对这些数据也都是读操作（例如图中的键值对K1），那么，主线程和 bgsave 子进程相互不影响。但是，如果主线程要修改一块数据（例如图中的键值对 K3），那么，这块数据就会被复制一份，生成该数据的副本。然后，bgsave 子进程会把这个副本数据写入 RDB 文件，而在这个过程中，主线程仍然可以直接修改原来的数据。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-bgsave.jpg",alt:""}})]),v._v(" "),s("p",[v._v("当 Redis 触发 RDB 快照时，它会通过 "),s("code",[v._v("fork")]),v._v(" 系统调用来创建一个子进程，子进程负责将内存中的数据写入到磁盘，而父进程则继续响应客户端请求。"),s("strong",[v._v("写时复制（COW）")]),v._v(" 机制使得在 fork 后，父子进程共享同一份内存页，只有当父进程或子进程对内存进行修改时，操作系统才会复制出新的内存页，从而减少了内存复制的开销。")]),v._v(" "),s("p",[v._v("尽管如此，"),s("code",[v._v("fork")]),v._v(" 子进程的操作本身仍然是有一定开销的，尤其在数据量非常大的时候，尽管采用了 COW，但以下因素可能会导致 "),s("strong",[v._v("性能下降")]),v._v("：")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("大量数据")]),v._v("：当 Redis 中的数据量非常大时（几千万或几亿条键值对），fork 子进程仍然需要花费一定的时间来生成 RDB 文件，即使是写时复制也会带来一定的延迟。")]),v._v(" "),s("li",[s("strong",[v._v("系统资源压力")]),v._v("：如果机器的内存不足，频繁的 fork 和写时复制操作可能导致系统的 "),s("strong",[v._v("内存不足")]),v._v(" 和 "),s("strong",[v._v("CPU 高负载")]),v._v("，尤其是在数据量较大的时候。")]),v._v(" "),s("li",[s("strong",[v._v("磁盘 I/O")]),v._v("：即便使用写时复制，子进程最终需要将数据写入磁盘，磁盘 I/O 的性能也会影响快照的时间。如果磁盘写入速度较慢，生成 RDB 文件的过程可能会很慢。")])]),v._v(" "),s("p",[v._v("如果 Redis 在执行一次 RDB 快照时，快照尚未完成，新的写操作又触发了一个新的 RDB 快照，那么会发生 "),s("strong",[v._v("重叠触发")]),v._v(" 的问题。")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("新的 RDB 快照会等待前一个快照完成")]),v._v("。")]),v._v(" "),s("li",[v._v("如果 "),s("strong",[s("code",[v._v("save")]),v._v(" 配置的触发条件")]),v._v("（如 "),s("code",[v._v("save 900 1")]),v._v("）满足且当前快照未完成，Redis 会 "),s("strong",[v._v("阻塞新的快照请求")]),v._v("，直到当前的快照操作完成。这是为了避免对系统资源的过度消耗，防止多次快照操作同时进行。")])])]),v._v(" "),s("h4",{attrs:{id:"快照的运作方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照的运作方式"}},[v._v("#")]),v._v(" 快照的运作方式")]),v._v(" "),s("p",[v._v("当 Redis 需要保存 dump.rdb 文件时， 服务器执行以下操作：")]),v._v(" "),s("ol",[s("li",[v._v("Redis 调用 "),s("code",[v._v("fork()")]),v._v("，产生一个子进程，此时同时拥有父进程和子进程。")]),v._v(" "),s("li",[v._v("父进程继续处理 client 请求，子进程负责将内存内容写入到临时文件。由于 os 的写时复制机制，父子进程会共享相同的物理页面，当父进程处理写请求时， os 会为父进程要修改的页面创建副本，而不是写共享的页面。所以子进程的地址空间内的数据是 fork 时刻整个数据库的一个快照。")]),v._v(" "),s("li",[v._v("当子进程完成对新 RDB 文件的写入时，Redis 用新 RDB 文件替换原来的 RDB 文件，并删除旧的 RDB 文件。")])]),v._v(" "),s("p",[v._v("这种工作方式使得 Redis 可以从写时复制（copy-on-write）机制中获益。")]),v._v(" "),s("h4",{attrs:{id:"如何恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何恢复"}},[v._v("#")]),v._v(" 如何恢复")]),v._v(" "),s("p",[v._v("将备份文件 (dump.rdb) 移动到 Redis 安装目录并启动服务即可（"),s("code",[v._v("CONFIG GET dir")]),v._v(" 获取目录）")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-rdb-bak.jpg",alt:""}})]),v._v(" "),s("h4",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[v._v("#")]),v._v(" 优势")]),v._v(" "),s("ul",[s("li",[v._v("一旦采用该方式，那么你的整个 Redis 数据库将只包含一个文件，这对于"),s("strong",[v._v("文件备份")]),v._v("而言是非常完美的。比如，你可能打算每个小时归档一次最近 24 小时的数据，同时还要每天归档一次最近 30 天的数据。通过这样的备份策略，一旦系统出现灾难性故障，我们可以非常容易的进行恢复。"),s("strong",[v._v("适合大规模的数据恢复")])]),v._v(" "),s("li",[v._v("对于灾难恢复而言，RDB 是非常不错的选择。因为我们可以非常轻松的将一个单独的文件压缩后再转移到其它存储介质上。")]),v._v(" "),s("li",[v._v("性能最大化。对于 Redis 的服务进程而言，在开始持久化时，它唯一需要做的只是 fork 出子进程，之后再由子进程完成这些持久化的工作，这样就可以极大的避免服务进程执行 IO 操作了。")])]),v._v(" "),s("h4",{attrs:{id:"劣势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[v._v("#")]),v._v(" 劣势")]),v._v(" "),s("ul",[s("li",[v._v("如果你想保证数据的高可用性，即最大限度的避免数据丢失，那么 RDB 不是一个很好的选择。因为系统一旦在定时持久化之前出现宕机现象，此前没有来得及写入磁盘的数据都将丢失（丢失最后一次快照后的所有修改）。")]),v._v(" "),s("li",[v._v("由于 RDB 是通过 fork 子进程来协助完成数据持久化工作的，内存中的数据被克隆了一份，大致 2 倍的膨胀性需要考虑，因此，如果当数据集较大时，可能会导致整个服务器停止服务几百毫秒，甚至是 1 秒钟。")])]),v._v(" "),s("blockquote",[s("p",[v._v("可能你也会和我有同样的疑问，反正是不阻塞的，我每秒做一次快照，不就可以最大限度的避免数据丢失了吗？")]),v._v(" "),s("p",[v._v("一方面，频繁将全量数据写入磁盘，会给磁盘带来很大压力，多个快照竞争有限的磁盘带宽，前一个快照还没有做完，后一个又开始做了，容易造成恶性循环。")]),v._v(" "),s("p",[v._v("另一方面，bgsave 子进程需要通过 fork 操作从主线程创建出来。虽然，子进程在创建后不会再阻塞主线程，但是，"),s("strong",[v._v("fork 这个创建过程本身会阻塞主线程")]),v._v("，而且主线程的内存越大，阻塞时间越长。如果频繁 fork 出 bgsave 子进程，这就会频繁阻塞主线程了。")])]),v._v(" "),s("h4",{attrs:{id:"如何停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何停止"}},[v._v("#")]),v._v(" 如何停止")]),v._v(" "),s("p",[v._v("动态停止 RDB 保存规则的方法："),s("code",[v._v('redis-cli config set save ""')]),v._v("，或者修改配置文件，重启即可。")]),v._v(" "),s("h4",{attrs:{id:"小总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小总结"}},[v._v("#")]),v._v(" 小总结")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-rdb-summary.jpg",alt:""}})]),v._v(" "),s("ul",[s("li",[s("p",[v._v("RDB 是一个非常紧凑的文件")])]),v._v(" "),s("li",[s("p",[v._v("RDB 在保存 RDB 文件时父进程唯一需要做的就是 fork 出一个子进程，接下来的工作全部由子进程来做，父进程不需要再做其他 IO 操作，所以 RDB 持久化方式可以最大化 Redis 的性能")])]),v._v(" "),s("li",[s("p",[v._v("数据丢失风险大")])]),v._v(" "),s("li",[s("p",[v._v("RDB 需要经常 fork 子进程来保存数据集到硬盘上，当数据集比较大的时候，fork 的过程是非常耗时的，可能会导致 Redis 在一些毫秒级不能响应客户端的请求")])])]),v._v(" "),s("h2",{attrs:{id:"aof-append-only-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-append-only-file"}},[v._v("#")]),v._v(" AOF（Append Only File）")]),v._v(" "),s("h4",{attrs:{id:"是什么-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么-2"}},[v._v("#")]),v._v(" 是什么")]),v._v(" "),s("p",[v._v("以日志的形式来记录每个写操作，将 Redis 执行过的所有"),s("strong",[v._v("写指令")]),v._v("记录下来(读操作不记录)，只许追加文件但不可以改写文件，Redis 启动之初会读取该文件重新构建数据，也就是「"),s("strong",[v._v("重放")]),v._v("」。换言之，Redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作。")]),v._v(" "),s("h4",{attrs:{id:"配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[v._v("#")]),v._v(" 配置")]),v._v(" "),s("p",[v._v("AOF 默认保存的是 **appendonly.aof ** 文件")]),v._v(" "),s("p",[s("strong",[v._v("配置位置")]),v._v("： APPEND ONLY MODE")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-aof-conf.png",alt:""}})]),v._v(" "),s("h4",{attrs:{id:"aof-启动-修复-恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-启动-修复-恢复"}},[v._v("#")]),v._v(" AOF 启动/修复/恢复")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("正常恢复")]),v._v(" "),s("ul",[s("li",[v._v("启动：修改默认的 appendonly no，改为 yes")]),v._v(" "),s("li",[v._v("将有数据的 aof 文件复制一份保存到对应目录("),s("code",[v._v("config get dir")]),v._v(")")]),v._v(" "),s("li",[v._v("恢复：重启 redis 然后重新加载")])])]),v._v(" "),s("li",[s("p",[v._v("异常恢复")]),v._v(" "),s("ul",[s("li",[v._v("启动：修改默认的 appendonly no，改为 yes")]),v._v(" "),s("li",[v._v("备份被写坏的 AOF 文件")]),v._v(" "),s("li",[v._v("修复："),s("strong",[v._v("redis-check-aof --fix")]),v._v(" 进行修复  + AOF 文件")]),v._v(" "),s("li",[v._v("恢复：重启 redis 然后重新加载")])])])]),v._v(" "),s("h4",{attrs:{id:"aof-日志是如何实现的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-日志是如何实现的"}},[v._v("#")]),v._v(" AOF 日志是如何实现的？")]),v._v(" "),s("p",[v._v("说到日志，我们比较熟悉的是数据库的写前日志（Write Ahead Log, WAL），也就是说，在实际写数据前，先把修改的数据记到日志文件中，以便故障时进行恢复（DBA 们常说的“日志先行”）。")]),v._v(" "),s("p",[v._v("不过，AOF 日志正好相反，它是写后日志，“写后”的意思是 Redis 是先执行命令，把数据写入内存，然后才记录日志，如下图所示：")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-aof-write-log.png",alt:""}})]),v._v(" "),s("blockquote",[s("p",[v._v("Tip：日志先行的方式，如果宕机后，还可以通过之前保存的日志恢复到之前的数据状态。可是 AOF 后写日志的方式，如果宕机后，不就会把写入到内存的数据丢失吗？")]),v._v(" "),s("p",[v._v("那 AOF 为什么要先执行命令再记日志呢？要回答这个问题，我们要先知道 AOF 里记录了什么内容。")])]),v._v(" "),s("p",[v._v("传统数据库的日志，例如 redo log（重做日志），记录的是修改后的数据，而 AOF 里记录的是 Redis 收到的每一条命令，这些命令是以文本形式保存的。")]),v._v(" "),s("p",[v._v("我们以 Redis 收到 “set k1 v1” 命令后记录的日志为例，看看 AOF 日志的内容。其中，“*2” 表示当前命令有两个部分，每部分都是由 "),s("code",[v._v("“$+数字”")]),v._v("开头，后面紧跟着具体的命令、键或值。这里，“数字”表示这部分中的命令、键或值一共有多少字节。")]),v._v(" "),s("p",[v._v("例如，"),s("code",[v._v("*2")]),v._v(" 表示有两个部分，"),s("code",[v._v("$6")]),v._v(" 表示 6 个字节，也就是下边的 “SELECT” 命令，"),s("code",[v._v("$1")]),v._v(" 表示 1 个字节，也就是下边的 “0” 命令，合起来就是 "),s("code",[v._v("SELECT 0")]),v._v("，选择 0 库。下边的指令同理，就很好理解了 "),s("code",[v._v("SET K1 V1")]),v._v("。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-aof-file.png",alt:""}})]),v._v(" "),s("p",[v._v("但是，为了避免额外的检查开销，"),s("strong",[v._v("Redis 在向 AOF 里面记录日志的时候，并不会先去对这些命令进行语法检查。所以，如果先记日志再执行命令的话，日志中就有可能记录了错误的命令，Redis 在使用日志恢复数据时，就可能会出错。而写后日志这种方式，就是先让系统执行命令，只有命令能执行成功，才会被记录到日志中，否则，系统就会直接向客户端报错")]),v._v("。所以，Redis 使用写后日志这一方式的一大好处是，可以避免出现记录错误命令的情况。除此之外，AOF 还有一个好处：它是在命令执行后才记录日志，所以"),s("strong",[v._v("不会阻塞当前的写操作")]),v._v("。")]),v._v(" "),s("p",[s("strong",[v._v("不过，AOF 也有两个潜在的风险。")])]),v._v(" "),s("ul",[s("li",[s("p",[v._v("首先，如果刚执行完一个命令，还没有来得及记日志就宕机了，那么这个命令和相应的数据就有丢失的风险。如果此时 Redis 是用作缓存，还可以从后端数据库重新读入数据进行恢复，但是，如果 Redis 是直接用作数据库的话，此时，因为命令没有记入日志，所以就无法用日志进行恢复了。")])]),v._v(" "),s("li",[s("p",[v._v("其次，AOF 虽然避免了对当前命令的阻塞，但可能会给下一个操作带来阻塞风险。这是因为，AOF 日志也是在主线程中执行的，如果在把日志文件写入磁盘时，磁盘写压力大，就会导致写盘很慢，进而导致后续的操作也无法执行了。")])])]),v._v(" "),s("p",[v._v("仔细分析的话，你就会发现，这两个风险都是和 AOF 写回磁盘的时机相关的。这也就意味着，如果我们能够控制一个写命令执行完后 AOF 日志写回磁盘的时机，这两个风险就解除了。")]),v._v(" "),s("p",[v._v("接着，我们就看下 Redis 提供的写回策略，或者叫 AOF 耐久性。")]),v._v(" "),s("h4",{attrs:{id:"三种写回策略-aof-耐久性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三种写回策略-aof-耐久性"}},[v._v("#")]),v._v(" 三种写回策略 | AOF 耐久性")]),v._v(" "),s("p",[v._v("你可以配置 Redis 多久才将数据 fsync 到磁盘一次。AOF 机制给我们提供了三个选择：")]),v._v(" "),s("ul",[s("li",[s("p",[s("strong",[v._v("appendfsync always")]),v._v("，同步写回：每个写命令执行完，立马同步地将日志写回磁盘；")])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("appendfsync everysec")]),v._v("，每秒写回：每个写命令执行完，只是先把日志写到 AOF 文件的内存缓冲区，每隔一秒把缓冲区中的内容写入磁盘；")]),v._v(" "),s("p",[v._v("但是当这一次的 fsync 调用时长超过 1 秒时。Redis 会采取延迟 fsync 的策略，再等一秒钟。也就是在两秒后再进行 fsync，这一次的 fsync 就不管会执行多长时间都会进行。这时候由于在 fsync 时文件描述符会被阻塞，所以当前的写操作就会阻塞。")])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("appendfsync no")]),v._v("，操作系统控制的写回：每个写命令执行完，只是先把日志写到 AOF 文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘。"),s("strong",[v._v("对大多数 Linux 操作系统，是每 30 秒进行一次 fsync，将缓冲区中的数据写到磁盘上")]),v._v("。")])])]),v._v(" "),s("p",[v._v("针对避免主线程阻塞和减少数据丢失问题，这三种写回策略都无法做到两全其美。我们来分析下其中的原因。")]),v._v(" "),s("ul",[s("li",[v._v("“同步写回”可以做到基本不丢数据，但是它在每一个写命令后都有一个慢速的落盘操作，不可避免地会影响主线程性能；")]),v._v(" "),s("li",[v._v("虽然“操作系统控制的写回”在写完缓冲区后，就可以继续执行后续的命令，但是落盘的时机已经不在 Redis 手中了，只要 AOF 记录没有写回磁盘，一旦宕机对应的数据就丢失了；")]),v._v(" "),s("li",[v._v("“每秒写回”采用一秒写回一次的频率，避免了“同步写回”的性能开销，虽然减少了对系统性能的影响，但是如果发生宕机，上一秒内未落盘的命令操作仍然会丢失。所以，这只能算是，在避免影响主线程性能和避免数据丢失两者间取了个折中。")])]),v._v(" "),s("table",[s("thead",[s("tr",[s("th",[v._v("配置项")]),v._v(" "),s("th",[v._v("写回时机")]),v._v(" "),s("th",[v._v("优点")]),v._v(" "),s("th",[v._v("缺点")])])]),v._v(" "),s("tbody",[s("tr",[s("td",[v._v("Always")]),v._v(" "),s("td",[v._v("同步写回")]),v._v(" "),s("td",[v._v("可靠性高，数据基本不丢失")]),v._v(" "),s("td",[v._v("每个写命令都要落盘，性能影响较大，慢但是安全")])]),v._v(" "),s("tr",[s("td",[v._v("Everysec")]),v._v(" "),s("td",[v._v("每秒写回")]),v._v(" "),s("td",[v._v("性能适中")]),v._v(" "),s("td",[v._v("宕机时丢失1秒内的数据")])]),v._v(" "),s("tr",[s("td",[v._v("No")]),v._v(" "),s("td",[v._v("操作系统控制的写回")]),v._v(" "),s("td",[v._v("性能好")]),v._v(" "),s("td",[v._v("宕机时丢失数据较多")])])])]),v._v(" "),s("p",[v._v("到这里，我们就可以根据系统对高性能和高可靠性的要求，来选择使用哪种写回策略了。")]),v._v(" "),s("p",[s("em",[s("strong",[v._v("总结一下就是：想要获得高性能，就选择 No 策略；如果想要得到高可靠性保证，就选择 Always 策略；如果允许数据有一点丢失，又希望性能别受太大影响的话，那么就选择 Everysec 策略。")])])]),v._v(" "),s("blockquote",[s("p",[s("strong",[v._v("Tip")]),v._v("：试想一下，如果我们开启 AOF 运行个一年半载的，AOF 文件是不是会越来越大，先不说占用资源的问题，如果宕机重启，以 AOF 文件重做数据，肯定是个特别漫长的过程，所以 Redis 提供了对 AOF 文件的“瘦身”机制。")])]),v._v(" "),s("h4",{attrs:{id:"rewrite-aof-重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-aof-重写"}},[v._v("#")]),v._v(" rewrite（AOF 重写）")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("是什么：AOF 采用文件追加方式，文件会越来越大，为了避免出现这种情况，新增了重写机制，当 AOF 文件的大小超过所设定的阈值时，"),s("strong",[v._v("Redis 就会启动 AOF 文件的内容压缩，只保留可以恢复数据的最小指令集")]),v._v("，可以使用命令 "),s("code",[v._v("bgrewriteaof")]),v._v("，这个操作相当于对 AOF 文件“瘦身”。在重写的时候，是根据这个键值对当前的最新状态，为它生成对应的写入命令。这样一来，一个键值对在重写日志中只用一条命令就行了，而且，在日志恢复时，只用执行这条命令，就可以直接完成这个键值对的写入了。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://i01piccdn.sogoucdn.com/8700d2e646eddccf",alt:""}})])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("重写原理")]),v._v("：AOF 文件持续增长而过大时，会 fork 出一条新进程来将文件重写(也是先写临时文件最后再rename)，遍历新进程的内存中数据，转换成一条条的操作指令，再序列化到一个新的 AOF 文件中。")]),v._v(" "),s("blockquote",[s("p",[v._v("PS:  "),s("MARK",[v._v("重写 AOF 文件的操作，并没有读取旧的 AOF 文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的 AOF 文件，这点和快照有点类似")]),v._v("。")],1)])]),v._v(" "),s("li",[s("p",[v._v("触发机制：")]),v._v(" "),s("ul",[s("li",[s("p",[s("strong",[v._v("AOF 文件增长比例超过一定阈值")]),v._v("：Redis 会记录上次重写时的 AOF 大小，默认配置是当 AOF 文件大小是上次 rewrite 后大小的"),s("strong",[v._v("一倍")]),v._v("且文件大于 64M 时触发")]),v._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("auto-aof-rewrite-min-size 64mb    //指定触发重写的 AOF 文件最小大小（默认为 64MB）\nauto-aof-rewrite-percentage 100   //指定 AOF 文件增长的百分比（默认为 100%）\n")])])])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("手动触发 AOF 重写")]),v._v("： 通过执行 "),s("code",[v._v("BGREWRITEAOF")]),v._v(" 命令，用户可以手动触发 AOF 重写")])])]),v._v(" "),s("p",[v._v("我们在客户端输入两次 "),s("code",[v._v("set k1 v1")]),v._v(" ，然后比较 "),s("code",[v._v("bgrewriteaof")]),v._v(" 前后两次的 appendonly.aof 文件（先要关闭混合持久化）"),s("img",{attrs:{src:"https://img.starfish.ink/redis/bgrewriteaof.png",alt:"bgrewriteaof"}})])])]),v._v(" "),s("h4",{attrs:{id:"如果-aof-文件出错了-怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果-aof-文件出错了-怎么办"}},[v._v("#")]),v._v(" 如果 AOF 文件出错了，怎么办？")]),v._v(" "),s("p",[v._v("服务器可能在程序正在对 AOF 文件进行写入时停机， 如果停机造成了 AOF 文件出错（corrupt）， 那么 Redis 在重启时会拒绝载入这个 AOF 文件， 从而确保数据的一致性不会被破坏。")]),v._v(" "),s("p",[v._v("当发生这种情况时， 可以用以下方法来修复出错的 AOF 文件：")]),v._v(" "),s("ol",[s("li",[v._v("为现有的 AOF 文件创建一个备份。")]),v._v(" "),s("li",[v._v("使用 Redis 附带的 redis-check-aof 程序，对原来的 AOF 文件进行修复。")])]),v._v(" "),s("p",[s("strong",[v._v("$ redis-check-aof --fix")])]),v._v(" "),s("ol",[s("li",[v._v("（可选）使用 diff -u 对比修复后的 AOF 文件和原始 AOF 文件的备份，查看两个文件之间的不同之处。")]),v._v(" "),s("li",[v._v("重启 Redis 服务器，等待服务器载入修复后的 AOF 文件，并进行数据恢复。")])]),v._v(" "),s("h4",{attrs:{id:"aof-运作方式-后台重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-运作方式-后台重写"}},[v._v("#")]),v._v(" AOF 运作方式 | 后台重写")]),v._v(" "),s("p",[v._v("AOF 重写和 RDB 创建快照一样，都巧妙地利用了写时复制机制。")]),v._v(" "),s("p",[v._v("不过， 使用子进程也有一个问题需要解决： 因为子进程在进行 AOF 重写期间， 主进程还需要继续处理命令， 而新的命令可能对现有的数据进行修改， 这会让当前数据库的数据和重写后的 AOF 文件中的数据不一致。")]),v._v(" "),s("p",[v._v("为了解决这个问题， Redis 增加了一个 AOF 重写缓存， 这个缓存在 fork 出子进程之后开始启用， Redis 主进程在接到新的写命令之后， 除了会将这个写命令的协议内容追加到现有的 AOF 文件之外， 还会追加到这个缓存中：")]),v._v(" "),s("p",[v._v("以下是 AOF 重写的执行步骤：")]),v._v(" "),s("ol",[s("li",[s("p",[s("strong",[v._v("创建一个新的 AOF 文件")]),v._v("：Redis 执行 "),s("code",[v._v("fork()")]),v._v(" ，它会"),s("strong",[v._v("异步地")]),v._v("在后台创建一个新的 AOF 文件（通常命名为 "),s("code",[v._v("appendonly.aof.new")]),v._v("）。现在同时拥有父进程和子进程。")])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("重写的内容——只保留当前数据库状态")]),v._v("：子进程开始将新 AOF 文件的内容写入到临时文件。")]),v._v(" "),s("p",[v._v("在执行 AOF 重写时，Redis 不会记录每个命令的详细内容，而是通过以下方式来确保重写后的 AOF 文件有效：")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("仅记录当前数据集的重建命令")]),v._v("：Redis 会根据数据库当前的状态生成一系列 "),s("code",[v._v("SET")]),v._v("、"),s("code",[v._v("HSET")]),v._v("、"),s("code",[v._v("LPUSH")]),v._v(" 等命令，这些命令能够重建当前数据库的状态。这些命令是可以直接执行的、能够恢复数据的命令。")]),v._v(" "),s("li",[s("strong",[v._v("压缩冗余命令")]),v._v("：在重写过程中，Redis 会去除一些无意义或重复的命令。例如，如果有大量重复的 "),s("code",[v._v("SET key value")]),v._v(" 操作，Redis 只会保留最新的 "),s("code",[v._v("SET")]),v._v(" 命令，而忽略之前的操作。")])])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("复制 AOF文件")]),v._v("：对于所有新执行的写入命令，父进程一边将它们累积到一个内存缓存中，一边将这些改动追加到现有 AOF 文件（即 "),s("code",[v._v("appendonly.aof")]),v._v("）的末尾： 这样即使在重写的中途发生停机，现有的 AOF 文件也还是安全的，这个过程称为 "),s("strong",[v._v("追加操作")]),v._v("。")])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("重写完成后的替换")]),v._v("：当子进程完成重写工作时，它给父进程发送一个信号，父进程在接收到信号之后，将内存缓存中的所有数据追加到新 AOF 文件的末尾。")])]),v._v(" "),s("li",[s("p",[s("strong",[v._v("删除过时的 AOF 文件")]),v._v("：搞定！现在 Redis 原子地用新文件替换旧文件，之后所有命令都会直接追加到新 AOF 文件的末尾。")])])]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-aof-rewrite-work.png",alt:""}})]),v._v(" "),s("h4",{attrs:{id:"优势-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势-2"}},[v._v("#")]),v._v(" 优势")]),v._v(" "),s("ul",[s("li",[v._v("该机制可以带来更高的数据安全性，即数据持久性。Redis 中提供了 3 种同步策略，即"),s("strong",[v._v("每秒同步、每修改同步和不同步")]),v._v("。事实上，每秒同步也是异步完成的，其效率也是非常高的，所差的是一旦系统出现宕机现象，那么这一秒钟之内修改的数据将会丢失。而每修改同步，我们可以将其视为同步持久化，即每次发生的数据变化都会被立即记录到磁盘中。可以预见，这种方式在效率上是最低的。至于无同步，无需多言，我想大家都能正确的理解它。")]),v._v(" "),s("li",[v._v("由于该机制对日志文件的写入操作采用的是 append 模式，因此在写入过程中即使出现宕机现象，也不会破坏日志文件中已经存在的内容。然而如果我们本次操作只是写入了一半数据就出现了系统崩溃问题，不用担心，在 Redis 下一次启动之前，我们可以通过 "),s("strong",[v._v("redis-check-aof")]),v._v(" 工具来帮助我们解决数据一致性的问题。")]),v._v(" "),s("li",[v._v("如果日志过大，Redis 可以自动启用 rewrite 机制。即 Redis 以 append 模式不断的将修改数据写入到老的磁盘文件中，同时 Redis 还会创建一个新的文件用于记录此期间有哪些修改命令被执行。因此在进行 rewrite 切换时可以更好的保证数据安全性。")]),v._v(" "),s("li",[v._v("AOF 包含一个格式清晰、易于理解的日志文件用于记录所有的修改操作。事实上，我们也可以通过该文件完成数据的重建。因此 AOF 文件的内容非常容易被人读懂， 对文件进行分析（parse）也很轻松。 导出（export） AOF 文件也非常简单： 举个例子， 如果你不小心执行了 "),s("a",{attrs:{href:"http://redisdoc.com/server/flushall.html#flushall",target:"_blank",rel:"noopener noreferrer"}},[v._v("FLUSHALL"),s("OutboundLink")],1),v._v(" 命令， 但只要 AOF 文件未被重写， 那么只要停止服务器， 移除 AOF 文件末尾的 FLUSHALL 命令， 并重启 Redis ， 就可以将数据集恢复到 FLUSHALL 执行之前的状态。")])]),v._v(" "),s("h4",{attrs:{id:"劣势-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#劣势-2"}},[v._v("#")]),v._v(" 劣势")]),v._v(" "),s("ul",[s("li",[v._v("对于相同数量的数据集而言，AOF 文件通常要大于 RDB 文件。恢复速度慢于 RDB。")]),v._v(" "),s("li",[v._v("根据同步策略的不同，AOF 在运行效率上往往会慢于 RDB。总之，每秒同步策略的效率是比较高的，同步禁用策略的效率和 RDB 一样高效。")])]),v._v(" "),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-aof-summary.png",alt:""}})]),v._v(" "),s("ul",[s("li",[v._v("AOF 文件是一个只进行追加的日志文件")]),v._v(" "),s("li",[v._v("Redis 可以在 AOF 文件体积变得过大时，自动在后台对 AOF 进行重写")]),v._v(" "),s("li",[v._v("AOF 文件有序的保存了对数据库执行的所有写入操作，这些写入操作以 Redis 协议的格式保存，因此 AOF 文件的内容非常容易被人读懂，对文件进行分析也很轻松")]),v._v(" "),s("li",[v._v("对于相同的数据集来说，AOF 文件的体积通常需要大于 RDB 文件的体积")]),v._v(" "),s("li",[v._v("根据所使用的 fsync 策略，AOF 的速度可能会慢于 RDB")])]),v._v(" "),s("p",[s("strong",[v._v("怎么从 RDB 持久化切换到 AOF 持久化")])]),v._v(" "),s("p",[v._v("在 Redis 2.2 或以上版本，可以在不重启的情况下，从 RDB 切换到 AOF ：")]),v._v(" "),s("ol",[s("li",[s("p",[v._v("为最新的 dump.rdb 文件创建一个备份。")])]),v._v(" "),s("li",[s("p",[v._v("将备份放到一个安全的地方。")])]),v._v(" "),s("li",[s("p",[v._v("执行以下两条命令：")]),v._v(" "),s("div",{staticClass:"language-redis extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v(' redis-cli> CONFIG SET appendonly yes \t\n\n redis-cli> CONFIG SET save "" \n')])])])]),v._v(" "),s("li",[s("p",[v._v("确保命令执行之后，数据库的键的数量没有改变。")])]),v._v(" "),s("li",[s("p",[v._v("确保写命令会被正确地追加到 AOF 文件的末尾。")])])]),v._v(" "),s("p",[v._v("步骤 3 执行的第一条命令开启了 AOF 功能： Redis 会阻塞直到初始 AOF 文件创建完成为止， 之后 Redis 会继续处理命令请求， 并开始将写入命令追加到 AOF 文件末尾。")]),v._v(" "),s("p",[v._v("步骤 3 执行的第二条命令用于关闭 RDB 功能。 这一步是可选的， 如果你愿意的话， 也可以同时使用 RDB 和 AOF 这两种持久化功能。")]),v._v(" "),s("p",[v._v("别忘了在 redis.conf 中打开 AOF 功能！ 否则的话， 服务器重启之后， 之前通过 CONFIG SET 设置的配置就会被遗忘， 程序会按原来的配置来启动服务器。")]),v._v(" "),s("h2",{attrs:{id:"which-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which-one"}},[v._v("#")]),v._v(" Which one")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("RDB 持久化方式能够在指定的时间间隔能对你的数据进行快照存储")])]),v._v(" "),s("li",[s("p",[v._v("AOF 持久化方式记录每次对服务器写的操作，当服务器重启的时候会重新执行这些命令来恢复原始的数据，AOF 命令以 Redis 协议追加保存每次写的操作到文件末尾。Redis 还能对 AOF 文件进行后台重写（"),s("strong",[v._v("bgrewriteaof")]),v._v("），使得 AOF 文件的体积不至于过大")])]),v._v(" "),s("li",[s("p",[v._v("只做缓存：如果你只希望你的数据在服务器运行的时候存在，你也可以不使用任何持久化方式。")])]),v._v(" "),s("li",[s("p",[v._v("同时开启两种持久化方式")]),v._v(" "),s("ul",[s("li",[v._v("在这种情况下,当 Redis 重启的时候会优先载入 AOF 文件来恢复原始的数据，因为在通常情况下 AOF 文件保存的数据集要比 RDB 文件保存的数据集要完整。")]),v._v(" "),s("li",[v._v("RDB 的数据不实时，同时使用两者时服务器重启也只会找 AOF 文件。那要不要只使用AOF 呢？建议不要，因为 RDB 更适合用于备份数据库(AOF 在不断变化不好备份)，快速重启，而且不会有 AOF 可能潜在的 bug，留着作为一个万一的手段。")])])])]),v._v(" "),s("h4",{attrs:{id:"性能建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能建议"}},[v._v("#")]),v._v(" 性能建议")]),v._v(" "),s("ul",[s("li",[v._v("因为 RDB 文件只用作后备用途，建议只在 Slave上持久化 RDB 文件，而且只要 15 分钟备份一次就够了，只保留 "),s("code",[v._v("save 900 1")]),v._v(" 这条规则。")]),v._v(" "),s("li",[v._v("如果 Enalbe AOF，好处是在最恶劣情况下也只会丢失不超过两秒数据，启动脚本较简单只 load 自己的 AOF 文件就可以了。代价一是带来了持续的 IO，二是 AOF rewrite 的最后将 rewrite 过程中产生的新数据写到新文件造成的阻塞几乎是不可避免的。只要硬盘许可，应该尽量减少 AOF rewrite 的频率，AOF 重写的基础大小默认值 64M 太小了，可以设到 5G 以上。默认超过原大小 100% 大小时重写可以改到适当的数值。")]),v._v(" "),s("li",[v._v("如果不 Enable AOF ，仅靠 Master-Slave Replication 实现高可用性也可以。能省掉一大笔 IO ，也减少了rewrite 时带来的系统波动。代价是如果 Master/Slav e同时宕掉，会丢失十几分钟的数据，启动脚本也要比较两个 Master/Slave 中的 RDB 文件，载入较新的那个。")])]),v._v(" "),s("h4",{attrs:{id:"redis-4-0-混合持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-4-0-混合持久化"}},[v._v("#")]),v._v(" Redis 4.0 混合持久化")]),v._v(" "),s("p",[v._v("Redis 4.0 中提出了一个"),s("strong",[v._v("混合使用 AOF 日志和内存快照的方法")]),v._v("。简单来说，内存快照以一定的频率执行，在两次快照之间，使用 AOF 日志记录这期间的所有命令操作。也就是将 RDB 文件的内容和增量的 AOF 日志文件存在一起。这里的 AOF 日志不再是全量的日志，而是自持久化开始到持久化结束的这段时间发生的增量 AOF 日志。")]),v._v(" "),s("p",[v._v("同样我们执行 3 次 "),s("code",[v._v("set k1 v1")]),v._v("，然后手动瘦身 "),s("code",[v._v("bgrewriteaof")]),v._v(" 后，查看 appendonly.aof 文件：")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-mix-persistence-file.png",alt:""}})]),v._v(" "),s("p",[v._v("这样做的好处是可以结合 rdb 和 aof 的优点，快速加载同时避免丢失过多的数据，缺点是 aof 里面的 rdb 部分就是压缩格式不再是 aof 格式，可读性差。")]),v._v(" "),s("p",[v._v("这样一来，快照不用很频繁地执行，这就避免了频繁 fork 对主线程的影响。而且，AOF 日志也只用记录两次快照间的操作，也就是说，不需要记录所有操作了，因此，就不会出现文件过大的情况了，也可以避免重写开销。")]),v._v(" "),s("p",[v._v("4.0 版本的混合持久化功能 "),s("strong",[v._v("默认关闭")]),v._v("，我们可以通过 "),s("code",[v._v("aof-use-rdb-preamble")]),v._v(" 配置参数控制该功能的启用。5.0 版本之后 "),s("strong",[v._v("默认开启")]),v._v("。")]),v._v(" "),s("p",[v._v("如下图所示，两次快照中间时刻的修改，用 AOF 日志记录，等到第二次做全量快照时，就可以清空 AOF 日志，因为此时的修改都已经记录到快照中了，恢复时就不再用日志了。")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://img.starfish.ink/redis/redis-mix-persistence.png",alt:""}})]),v._v(" "),s("p",[v._v("这个方法既能享受到 RDB 文件快速恢复的好处，又能享受到 AOF 只记录操作命令的简单优势，有点“鱼和熊掌可以兼得”的意思。")]),v._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),s("p",[v._v("[ 1 ] :《Redis 核心技术与实战》")]),v._v(" "),s("p",[v._v("[ 2 ] :《Redis设计与实现》")]),v._v(" "),s("p",[v._v("[ 3 ] : https://www.wmyskxz.com/2020/03/13/redis-7-chi-jiu-hua-yi-wen-liao-jie/")]),v._v(" "),s("p",[v._v("[ 4 ] : https://redis.io/topics/persistence")])])}),[],!1,null,null,null);_.default=t.exports}}]);