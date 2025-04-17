(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{600:function(e,n,t){"use strict";t.r(n);var s=t(2),i=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单介绍"}},[e._v("#")]),e._v(" 简单介绍")]),e._v(" "),t("p",[t("strong",[e._v("units 单位")])]),e._v(" "),t("ul",[t("li",[e._v("配置大小单位，开头定义了一些基本的度量单位，只支持 bytes，不支持 bit")]),e._v(" "),t("li",[e._v("对大小写不敏感")])]),e._v(" "),t("blockquote",[t("p",[e._v("Note on units: when memory size is needed, it is possible to specify")]),e._v(" "),t("p",[e._v("it in the usual form of 1k 5GB 4M and so forth:")]),e._v(" "),t("p",[e._v("1k => 1000 bytes")]),e._v(" "),t("p",[e._v("1kb => 1024 bytes")]),e._v(" "),t("p",[e._v("1m => 1000000 bytes")]),e._v(" "),t("p",[e._v("1mb => 1024*1024 bytes")]),e._v(" "),t("p",[e._v("1g => 1000000000 bytes")]),e._v(" "),t("p",[e._v("1gb => 1024"),t("em",[e._v("1024")]),e._v("1024 bytes")]),e._v(" "),t("p",[e._v("units are case insensitive so 1GB 1Gb 1gB are all the same.")])]),e._v(" "),t("h3",{attrs:{id:"includes包含"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#includes包含"}},[e._v("#")]),e._v(" INCLUDES包含")]),e._v(" "),t("ul",[t("li",[e._v("可以通过 includes 包含，redis.conf 可以作为总闸，包含其他")])]),e._v(" "),t("h3",{attrs:{id:"general通用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general通用"}},[e._v("#")]),e._v(" GENERAL通用")]),e._v(" "),t("ul",[t("li",[e._v("daemonize")]),e._v(" "),t("li",[e._v("pidfile")]),e._v(" "),t("li",[e._v("port")]),e._v(" "),t("li",[e._v("tcp-backlog：")])]),e._v(" "),t("p",[e._v("设置tcp的backlog，backlog其实是一个连接队列，backlog队列总和=未完成三次握手队列 + 已经完成三次握手队列。")]),e._v(" "),t("p",[e._v("在高并发环境下你需要一个高backlog值来避免慢客户端连接问题。注意Linux内核会将这个值减小到/proc/sys/net/core/somaxconn的值，所以需要确认增大somaxconn和tcp_max_syn_backlog两个值来达到想要的效果")]),e._v(" "),t("ul",[t("li",[e._v("timeout")]),e._v(" "),t("li",[e._v("bind")]),e._v(" "),t("li",[e._v("tcp-keepalive：单位为秒，如果设置为0，则不会进行Keepalive检测，建议设置成60")]),e._v(" "),t("li",[e._v("loglevel")]),e._v(" "),t("li",[e._v("logfile")]),e._v(" "),t("li",[e._v("syslog-enabled：是否把日志输出到syslog中")]),e._v(" "),t("li",[e._v("syslog-ident：指定syslog里的日志标志")]),e._v(" "),t("li",[e._v("syslog-facility：指定syslog设备，值可以是USER或LOCAL0-LOCAL7")]),e._v(" "),t("li",[e._v("databases")])]),e._v(" "),t("h3",{attrs:{id:"snapshotting快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshotting快照"}},[e._v("#")]),e._v(" SNAPSHOTTING快照")]),e._v(" "),t("ul",[t("li",[e._v("save")])]),e._v(" "),t("p",[e._v("RDB是整个内存的压缩过的Snapshot，RDB的数据结构，可以配置复合的快照触发条件，")]),e._v(" "),t("p",[e._v("默认")]),e._v(" "),t("p",[e._v("save 900 1             是1分钟内改了1万次， \t\nsave 300 10          或5分钟内改了10次，\nsave 60 10000     或15分钟内改了1次。")]),e._v(" "),t("ul",[t("li",[e._v("禁用   如果想禁用RDB持久化的策略，只要不设置任何save指令，或者给save传入一个空字符串参数也可以 "),t("strong",[e._v("save")]),e._v(' ""')])]),e._v(" "),t("p",[e._v("想要马上备份的话，在操作后输入 save 命令 就会直接备份到dump.rdb文件中")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("stop-writes-on-bgsave-error：如果配置成no，表示你不在乎数据不一致或者有其他的手段发现和控制")])]),e._v(" "),t("li",[t("p",[e._v("rdbcompression：对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，redis会采用LZF算法进行压缩。如果你不想消耗CPU来进行压缩的话，可以设置为关闭此功能")])]),e._v(" "),t("li",[t("p",[e._v("rdbchecksum：在存储快照后，还可以让redis使用CRC64算法来进行数据校验，但是这样做会增加大约10%的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能")])]),e._v(" "),t("li",[t("p",[e._v("dbfilename")])]),e._v(" "),t("li",[t("p",[e._v("dir：本地数据库存放目录")])])]),e._v(" "),t("h3",{attrs:{id:"replication复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication复制"}},[e._v("#")]),e._v(" REPLICATION"),t("strong",[e._v("复制")])]),e._v(" "),t("h3",{attrs:{id:"security安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security安全"}},[e._v("#")]),e._v(" SECURITY安全")]),e._v(" "),t("p",[e._v("访问密码的查看、设置和取消")]),e._v(" "),t("p",[t("strong",[e._v("LIMITS限制")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("maxclients：设置redis同时可以与多少个客户端进行连接。默认情况下为10000个客户端。当你无法设置进程文件句柄限制时，redis会设置为当前的文件句柄限制值减去32，因为redis会为自身内部处理逻辑留一些句柄出来。如果达到了此限制，redis则会拒绝新的连接请求，并且向这些连接请求方发出“max number of clients reached”以作回应。")])]),e._v(" "),t("li",[t("p",[e._v("maxmemory：设置redis可以使用的内存量。一旦到达内存使用上限，redis将会试图移除内部数据，移除规则可以通过"),t("strong",[e._v("maxmemory-policy")]),e._v("来指定。如果redis无法根据移除规则来移除内存中的数据，或者设置了“不允许移除”，那么redis则会针对那些需要申请内存的指令返回错误信息，比如SET、LPUSH等。")])])]),e._v(" "),t("p",[e._v("但是对于无内存申请的指令，仍然会正常响应，比如GET等。如果你的redis是主redis（说明你的redis有从redis），那么在设置内存使用上限时，需要在系统中留出一些内存空间给同步队列缓存，只有在你设置的是“不移除”的情况下，才不用考虑这个因素")]),e._v(" "),t("ul",[t("li",[e._v("maxmemory-policy：")])]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("volatile-lru")]),e._v(" -> remove the key with an expire set using an LRU algorithm 使用LRU算法移除key，只对设置了过期时间的键")]),e._v(" "),t("li",[t("strong",[e._v("allkeys-lru")]),e._v(" -> remove any key according to the LRU algorithm 使用LRU算法移除key")]),e._v(" "),t("li",[t("strong",[e._v("volatile-random")]),e._v(" -> remove a random key with an expire set 在过期集合中移除随机的key，只对设置了过期时间的键")]),e._v(" "),t("li",[t("strong",[e._v("allkeys-random")]),e._v(" -> remove a random key, any key 移除随机的key")]),e._v(" "),t("li",[t("strong",[e._v("volatile-ttl")]),e._v(" -> remove the key with the nearest expire time (minor TTL)  移除那些TTL值最小的key，即那些最近要过期的key")]),e._v(" "),t("li",[t("strong",[e._v("noeviction")]),e._v(" -> don't expire at all, just return an error on write operations  不进行移除。针对写操作，只是返回错误信息")])]),e._v(" "),t("ul",[t("li",[e._v("maxmemory-samples：设置样本数量，LRU算法和最小TTL算法都并非是精确的算法，而是估算值，所以你可以设置样本的大小，redis默认会检查这么多个key并选择其中LRU的那个")])]),e._v(" "),t("h3",{attrs:{id:"append-only-mode追加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#append-only-mode追加"}},[e._v("#")]),e._v(" APPEND ONLY MODE追加")]),e._v(" "),t("ul",[t("li",[e._v("appendonly")]),e._v(" "),t("li",[e._v("appendfilename")]),e._v(" "),t("li",[e._v("appendfsync：")])]),e._v(" "),t("ol",[t("li",[e._v("always：同步持久化 每次发生数据变更会被立即记录到磁盘  性能较差但数据完整性比较好")]),e._v(" "),t("li",[e._v("everysec：出厂默认推荐，异步操作，每秒记录   如果一秒内宕机，有数据丢失")]),e._v(" "),t("li",[e._v("no")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("no-appendfsync-on-rewrite：重写时是否可以运用Appendfsync，用默认no即可，保证数据安全性。")])]),e._v(" "),t("li",[t("p",[e._v("auto-aof-rewrite-min-size：设置重写的基准值")])]),e._v(" "),t("li",[t("p",[e._v("auto-aof-rewrite-percentage：设置重写的基准值")])])]),e._v(" "),t("h2",{attrs:{id:"常见配置redis-conf介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见配置redis-conf介绍"}},[e._v("#")]),e._v(" 常见配置redis.conf介绍")]),e._v(" "),t("p",[e._v("参数说明")]),e._v(" "),t("p",[e._v("redis.conf 配置项说明如下：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Redis默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程")]),e._v(" "),t("p",[t("strong",[e._v("daemonize no")])])]),e._v(" "),t("li",[t("p",[e._v("当Redis以守护进程方式运行时，Redis默认会把pid写入/var/run/redis.pid文件，可以通过pidfile指定")]),e._v(" "),t("p",[t("strong",[e._v("pidfile /var/run/redis.pid")])])]),e._v(" "),t("li",[t("p",[e._v("指定Redis监听端口，默认端口为6379，作者在自己的一篇博文中解释了为什么选用6379作为默认端口，因为6379在手机按键上MERZ对应的号码，而MERZ取自意大利歌女Alessia Merz的名字")]),e._v(" "),t("p",[t("strong",[e._v("port 6379")])])]),e._v(" "),t("li",[t("p",[e._v("绑定的主机地址")]),e._v(" "),t("p",[t("strong",[e._v("bind 127.0.0.1")])])])]),e._v(" "),t("p",[e._v("5.当 客户端闲置多长时间后关闭连接，如果指定为0，表示关闭该功能")]),e._v(" "),t("p",[e._v("​\t  "),t("strong",[e._v("timeout 300")])]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[e._v("指定日志记录级别，Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose")]),e._v(" "),t("p",[t("strong",[e._v("loglevel verbose")])])]),e._v(" "),t("li",[t("p",[e._v("日志记录方式，默认为标准输出，如果配置Redis为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给/dev/null")]),e._v(" "),t("p",[t("strong",[e._v("logfile stdout")])])]),e._v(" "),t("li",[t("p",[e._v("设置数据库的数量，默认数据库为0，可以使用SELECT <dbid>命令在连接上指定数据库id")]),e._v(" "),t("p",[t("strong",[e._v("databases 16")])])]),e._v(" "),t("li",[t("p",[e._v("指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合  save <seconds> <changes>")])])]),e._v(" "),t("p",[e._v("Redis默认配置文件中提供了三个条件：")]),e._v(" "),t("p",[e._v("​\t  "),t("strong",[e._v("save 900 1")])]),e._v(" "),t("p",[e._v("​\t  "),t("strong",[e._v("save 300 10")])]),e._v(" "),t("p",[e._v("​\t  "),t("strong",[e._v("save 60 10000")])]),e._v(" "),t("p",[e._v("分别表示900秒（15分钟）内有1个更改，300秒（5分钟）内有10个更改以及60秒内有10000个更改。")]),e._v(" "),t("ol",{attrs:{start:"10"}},[t("li",[t("p",[e._v("指定存储至本地数据库时是否压缩数据，默认为yes，Redis采用LZF压缩，如果为了节省CPU时间，可以关闭该选项，但会导致数据库文件变的巨大")]),e._v(" "),t("p",[t("strong",[e._v("rdbcompression yes")])])]),e._v(" "),t("li",[t("p",[e._v("指定本地数据库文件名，默认值为dump.rdb")]),e._v(" "),t("p",[t("strong",[e._v("dbfilename dump.rdb")])])]),e._v(" "),t("li",[t("p",[e._v("指定本地数据库存放目录")]),e._v(" "),t("p",[t("strong",[e._v("dir ./")])])]),e._v(" "),t("li",[t("p",[e._v("设置当本机为slav服务时，设置master服务的IP地址及端口，在Redis启动时，它会自动从master进行数据同步")]),e._v(" "),t("p",[t("strong",[e._v("slaveof <masterip> <masterport>")])])]),e._v(" "),t("li",[t("p",[e._v("当master服务设置了密码保护时，slav服务连接master的密码")]),e._v(" "),t("p",[t("strong",[e._v("masterauth <master-password>")])])]),e._v(" "),t("li",[t("p",[e._v("设置Redis连接密码，如果配置了连接密码，客户端在连接Redis时需要通过AUTH <password>命令提供密码，默认关闭")]),e._v(" "),t("p",[t("strong",[e._v("requirepass foobared")])])]),e._v(" "),t("li",[t("p",[e._v("设置同一时间最大客户端连接数，默认无限制，Redis可以同时打开的客户端连接数为Redis进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis会关闭新的连接并向客户端返回max number of clients reached错误信息")]),e._v(" "),t("p",[t("strong",[e._v("maxclients 128")])])]),e._v(" "),t("li",[t("p",[e._v("指定Redis最大内存限制，Redis在启动时会把数据加载到内存中，达到最大内存后，Redis会先尝试清除已到期或即将到期的Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis新的vm机制，会把Key存放内存，Value会存放在swap区")]),e._v(" "),t("p",[t("strong",[e._v("maxmemory <bytes>")])])]),e._v(" "),t("li",[t("p",[e._v("指定是否在每次更新操作后进行日志记录，Redis在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为no")]),e._v(" "),t("p",[t("strong",[e._v("appendonly no")])])]),e._v(" "),t("li",[t("p",[e._v("指定更新日志文件名，默认为appendonly.aof")]),e._v(" "),t("p",[t("strong",[e._v("appendfilename appendonly.aof")])])]),e._v(" "),t("li",[t("p",[e._v("指定更新日志条件，共有3个可选值：")]),e._v(" "),t("p",[e._v("no：表示等操作系统进行数据缓存同步到磁盘（快）")]),e._v(" "),t("p",[e._v("always：表示每次更新操作后手动调用fsync()将数据写到磁盘（慢，安全）")]),e._v(" "),t("p",[e._v("everysec：表示每秒同步一次（折衷，默认值）")]),e._v(" "),t("p",[t("strong",[e._v("appendfsync everysec")])])]),e._v(" "),t("li",[t("p",[e._v("指定是否启用虚拟内存机制，默认值为no，简单的介绍一下，VM机制将数据分页存放，由Redis将访问量较少的页即冷数据swap到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析Redis的VM机制）")]),e._v(" "),t("p",[t("strong",[e._v("vm-enabled no")])])]),e._v(" "),t("li",[t("p",[e._v("虚拟内存文件路径，默认值为/tmp/redis.swap，不可多个Redis实例共享")]),e._v(" "),t("p",[t("strong",[e._v("vm-swap-file /tmp/redis.swap")])])]),e._v(" "),t("li",[t("p",[e._v("将所有大于vm-max-memory的数据存入虚拟内存,无论vm-max-memory设置多小,所有索引数据都是内存存储的(Redis的索引数据 就是keys),也就是说,当vm-max-memory设置为0的时候,其实是所有value都存在于磁盘。默认值为0")]),e._v(" "),t("p",[t("strong",[e._v("vm-max-memory 0")])])]),e._v(" "),t("li",[t("p",[e._v("Redis swap文件分成了很多的page，一个对象可以保存在多个page上面，但一个page上不能被多个对象共享，vm-page-size是要根据存储的 数据大小来设定的，作者建议如果存储很多小对象，page大小最好设置为32或者64bytes；如果存储很大大对象，则可以使用更大的page，如果不 确定，就使用默认值")]),e._v(" "),t("p",[t("strong",[e._v("vm-page-size 32")])])]),e._v(" "),t("li",[t("p",[e._v("设置swap文件中的page数量，由于页表（一种表示页面空闲或使用的bitmap）是在放在内存中的，，在磁盘上每8个pages将消耗1byte的内存。")]),e._v(" "),t("p",[t("strong",[e._v("vm-pages 134217728")])])]),e._v(" "),t("li",[t("p",[e._v("设置访问swap文件的线程数,最好不要超过机器的核数,如果设置为0,那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为4")]),e._v(" "),t("p",[t("strong",[e._v("vm-max-threads 4")])])]),e._v(" "),t("li",[t("p",[e._v("设置在向客户端应答时，是否把较小的包合并为一个包发送，默认为开启")]),e._v(" "),t("p",[t("strong",[e._v("glueoutputbuf yes")])])]),e._v(" "),t("li",[t("p",[e._v("指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法")]),e._v(" "),t("p",[t("strong",[e._v("hash-max-zipmap-entries 64")])]),e._v(" "),t("p",[t("strong",[e._v("hash-max-zipmap-value 512")])])]),e._v(" "),t("li",[t("p",[e._v("指定是否激活重置哈希，默认为开启（后面在介绍Redis的哈希算法时具体介绍）")]),e._v(" "),t("p",[t("strong",[e._v("activerehashing yes")])])]),e._v(" "),t("li",[t("p",[e._v("指定包含其它的配置文件，可以在同一主机上多个Redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件")]),e._v(" "),t("p",[t("strong",[e._v("include /path/to/local.conf")])])])]),e._v(" "),t("h2",{attrs:{id:"配置文件实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件实例"}},[e._v("#")]),e._v(" 配置文件实例")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Redis configuration file example\n\n# Note on units: when memory size is needed, it is possible to specifiy\n# it in the usual form of 1k 5GB 4M and so forth:\n# 当你需要为某个配置项指定内存大小的时候，必须要带上单位， # 通常的格式就是 1k 5gb 4m 等酱紫：\n#\n# 1k => 1000 bytes\n# 1kb => 1024 bytes\n# 1m => 1000000 bytes\n# 1mb => 1024*1024 bytes\n# 1g => 1000000000 bytes\n# 1gb => 1024*1024*1024 bytes\n#\n# units are case insensitive so 1GB 1Gb 1gB are all the same.\n\n# 单位是不区分大小写的，1GB 1Gb 1gB是一样的\n# By default Redis does not run as a daemon. Use 'yes' if you need it.\n# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.\n# 默认情况下 redis 不是作为守护进程运行的，如果你想让它在后台运行，你就把它改成 yes。 # 当redis作为守护进程运行的时候，它会写一个 pid 到 /var/run/redis.pid 文件里面。\n\ndaemonize no\n\n# When running daemonized, Redis writes a pid file in /var/run/redis.pid by\n# default. You can specify a custom pid file location here.\n# 当redis作为守护进程运行的时候，它会把 pid 默认写到 /var/run/redis.pid 文件里面， # 但是你可以在这里自己制定它的文件位置。\n\npidfile /var/run/redis.pid\n\n# Accept connections on the specified port, default is 6379.\n# If port 0 is specified Redis will not listen on a TCP socket.\n# 监听端口号，默认为 6379，如果你设为 0 ，redis 将不在 socket 上监听任何客户端连接。\n\nport 6379\n\n# If you want you can bind a single interface, if the bind option is not\n# specified all the interfaces will listen for incoming connections.\n# 默认情况下，redis 在 server 上所有有效的网络接口上监听客户端连接。\n# 你如果只想让它在一个网络接口上监听，那你就绑定一个IP或者多个IP。\n# 示例，多个IP用空格隔开:\n# bind 192.168.1.100 10.0.0.1\n\n# bind 127.0.0.1\n\n# Specify the path for the unix socket that will be used to listen for\n# incoming connections. There is no default, so Redis will not listen\n# on a unix socket when not specified.\n\n# 指定 unix socket 的路径。\n# unixsocket /tmp/redis.sock\n# unixsocketperm 755\n\n# Close the connection after a client is idle for N seconds (0 to disable)\n# 指定在一个 client 空闲多少秒之后关闭连接（0 就是不管它）\n\ntimeout 0\n\n# Set server verbosity to 'debug'\n# it can be one of:\n# debug (a lot of information, useful for development/testing)\n# verbose (many rarely useful info, but not a mess like the debug level)\n# notice (moderately verbose, what you want in production probably)\n# warning (only very important / critical messages are logged)\n\n# 定义日志级别。\n# 可以是下面的这些值：\n# debug (适用于开发或测试阶段)\n# verbose (many rarely useful info, but not a mess like the debug level)\n# notice (适用于生产环境)\n# warning (仅仅一些重要的消息被记录)\n\nloglevel verbose\n\n# Specify the log file name. Also 'stdout' can be used to force\n# Redis to log on the standard output. Note that if you use standard\n# output for logging but daemonize, logs will be sent to /dev/null\n# 指定日志文件的位置\n\nlogfile stdout\n\n# To enable logging to the system logger, just set 'syslog-enabled' to yes,\n# and optionally update the other syslog parameters to suit your needs.\n# 要想把日志记录到系统日志，就把它改成 yes， # 也可以可选择性的更新其他的syslog 参数以达到你的要求\n# syslog-enabled no\n\n# Specify the syslog identity.\n设置 syslog 的 identity。\n\n# syslog-ident redis\n# Specify the syslog facility.  Must be USER or between LOCAL0-LOCAL7.\n# 设置 syslog 的 facility，必须是 USER 或者是 LOCAL0-LOCAL7 之间的值\n# syslog-facility local0\n\n\n# Set the number of databases. The default database is DB 0, you can select\n# a different one on a per-connection basis using SELECT <dbid> where\n# dbid is a number between 0 and 'databases'-1\n# 设置数据库的数目。 # 默认数据库是 DB 0，你可以在每个连接上使用 select <dbid> 命令选择一个不同的数据库， # 但是 dbid 必须是一个介于 0 到 databasees - 1 之间的值\n\ndatabases 16\n\n################################ SNAPSHOTTING 快照 #################################\n# Save the DB on disk:\n#   save <seconds> <changes>\n#   Will save the DB if both the given number of seconds and the given\n#   number of write operations against the DB occurred.\n#   In the example below the behaviour will be to save:\n#   after 900 sec (15 min) if at least 1 key changed\n#   after 300 sec (5 min) if at least 10 keys changed\n#   after 60 sec if at least 10000 keys changed\n\n#   下面的例子的意思是： #   900 秒内如果至少有 1 个 key 的值变化，则保存 #   300 秒内如果至少有 10 个 key 的值变化，则保存 #   60 秒内如果至少有 10000 个 key 的值变化，则保存\n\n#   Note: you can disable saving at all commenting all the \"save\" lines.\n#   注意：你可以注释掉所有的 save 行来停用保存功能。 #   也可以直接一个空字符串来实现停用： #   save \"\"\n\nsave 900 1\n\nsave 300 10\n\nsave 60 10000\n\n# Compress string objects using LZF when dump .rdb databases?\n# For default that's set to 'yes' as it's almost always a win.\n# If you want to save some CPU in the saving child set it to 'no' but\n# the dataset will likely be bigger if you have compressible values or keys.\n\n# 是否在 dump .rdb 数据库的时候使用 LZF 压缩字符串 # 默认都设为 yes # 如果你希望保存子进程节省点 cpu ，你就设置它为 no ， # 不过这个数据集可能就会比较大\n\nrdbcompression yes\n\n# The filename where to dump the DB\n# 设置 dump 的文件位置\ndbfilename dump.rdb\n\n# The working directory.\n# The DB will be written inside this directory, with the filename specified\n# above using the 'dbfilename' configuration directive.\n# \n# Also the Append Only File will be created inside this directory.\n# Note that you must specify a directory here, not a file name.\n\n# 工作目录 # 例如上面的 dbfilename 只指定了文件名， # 但是它会写入到这个目录下。这个配置项一定是个目录，而不能是文件名\n\ndir ./\n\n################################# REPLICATION  主从复制#################################\n\n# Master-Slave replication. Use slaveof to make a Redis instance a copy of\n# another Redis server. Note that the configuration is local to the slave\n# so for example it is possible to configure the slave to save the DB with a\n# different interval, or to listen to another port, and so on.\n# 主从复制。使用 slaveof 来让一个 redis 实例成为另一个reids 实例的副本。 # 注意这个只需要在 slave 上配置。\n\n# slaveof <masterip> <masterport>\n\n# If the master is password protected (using the \"requirepass\" configuration\n# directive below) it is possible to tell the slave to authenticate before\n# starting the replication synchronization process, otherwise the master will\n# refuse the slave request.\n# 如果 master 需要密码认证，就在这里设置\n# masterauth <master-password>\n\n# When a slave lost the connection with the master, or when the replication\n# is still in progress, the slave can act in two different ways:\n#\n# 1) if slave-serve-stale-data is set to 'yes' (the default) the slave will\n#    still reply to client requests, possibly with out of data data, or the\n#    data set may just be empty if this is the first synchronization.\n\n# 2) if slave-serve-stale data is set to 'no' the slave will reply with\n#    an error \"SYNC with master in progress\" to all the kind of commands\n\n#    but to INFO and SLAVEOF.\n# 当一个 slave 与 master 失去联系，或者复制正在进行的时候，\n# slave 可能会有两种表现：\n#\n# 1) 如果为 yes ，slave 仍然会应答客户端请求，但返回的数据可能是过时，\n#    或者数据可能是空的在第一次同步的时候\n# 2) 如果为 no ，在你执行除了 info he salveof 之外的其他命令时，\n#    slave 都将返回一个 \"SYNC with master in progress\" 的错误，\n\nslave-serve-stale-data yes\n\n# Slaves send PINGs to server in a predefined interval. It's possible to change\n# this interval with the repl_ping_slave_period option. The default value is 10\n# seconds.\n# repl-ping-slave-period 10\n\n# The following option sets a timeout for both Bulk transfer I/O timeout and\n# master data or ping response timeout. The default value is 60 seconds.\n# It is important to make sure that this value is greater than the value\n\n# specified for repl-ping-slave-period otherwise a timeout will be detected\n# every time there is low traffic between the master and the slave.\n\n# 设置主从复制过期时间\n\n# repl-timeout 60\n\n################################## SECURITY  安全 ###################################\n\n# Require clients to issue AUTH <PASSWORD> before processing any other\n# commands.  This might be useful in environments in which you do not trust\n# others with access to the host running redis-server.\n# This should stay commented out for backward compatibility and because most\n\n# people do not need auth (e.g. they run their own servers).\n# Warning: since Redis is pretty fast an outside user can try up to\n\n# 150k passwords per second against a good box. This means that you should\n# use a very strong password otherwise it will be very easy to break.\n\n# 设置认证密码\n\n# requirepass foobared\n\n# Command renaming.\n# It is possilbe to change the name of dangerous commands in a shared\n# environment. For instance the CONFIG command may be renamed into something\n# of hard to guess so that it will be still available for internal-use\n# tools but not available for general clients.\n# Example:\n# rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52\n\n#\n# It is also possilbe to completely kill a command renaming it into\n# an empty string:\n\n# rename-command CONFIG \"\"\n\n\n################################### LIMITS  限制 ####################################\n\n\n# Set the max number of connected clients at the same time. By default there\n# is no limit, and it's up to the number of file descriptors the Redis process\n# is able to open. The special value '0' means no limits.\n# Once the limit is reached Redis will close all the new connections sending\n# an error 'max number of clients reached'.\n# 一旦达到最大限制，redis 将关闭所有的新连接 # 并发送一个‘max number of clients reached’的错误。\n# maxclients 128\n\n# Don't use more memory than the specified amount of bytes.\n# When the memory limit is reached Redis will try to remove keys with an\n# EXPIRE set. It will try to start freeing keys that are going to expire\n# in little time and preserve keys with a longer time to live.\n# Redis will also try to remove objects from free lists if possible.\n\n\n # 最大使用内存\n\n# maxmemory <bytes>\n\n# MAXMEMORY POLICY: how Redis will select what to remove when maxmemory\n# is reached? You can select among five behavior:\n# volatile-lru -> remove the key with an expire set using an LRU algorithm\n# allkeys-lru -> remove any key accordingly to the LRU algorithm\n# volatile-random -> remove a random key with an expire set\n# allkeys->random -> remove a random key, any key\n# volatile-ttl -> remove the key with the nearest expire time (minor TTL)\n# maxmemory-samples 3\n\n\n\n############################## APPEND ONLY MODE ###############################\n\n\n\n# By default Redis asynchronously dumps the dataset on disk. If you can live\n# with the idea that the latest records will be lost if something like a crash\n# happens this is the preferred way to run Redis. If instead you care a lot\n# about your data and don't want to that a single record can get lost you should\n# enable the append only mode: when this mode is enabled Redis will append\n# every write operation received in the file appendonly.aof. This file will\n# be read on startup in order to rebuild the full dataset in memory.\n# Note that you can have both the async dumps and the append only file if you\n# like (you have to comment the \"save\" statements above to disable the dumps).\n# Still if append only mode is enabled Redis will load the data from the\n# log file at startup ignoring the dump.rdb file.\n#\n# IMPORTANT: Check the BGREWRITEAOF to check how to rewrite the append\n# log file in background when it gets too big.\n\nappendonly no\n\n# The name of the append only file (default: \"appendonly.aof\")\n# appendfilename appendonly.aof\n# The fsync() call tells the Operating System to actually write data on disk\n# instead to wait for more data in the output buffer. Some OS will really flush \n# data on disk, some other OS will just try to do it ASAP.\n#\n# Redis supports three different modes:\n# no: don't fsync, just let the OS flush the data when it wants. Faster.\n# always: fsync after every write to the append only log . Slow, Safest.\n# everysec: fsync only if one second passed since the last fsync. Compromise\n# The default is \"everysec\" that's usually the right compromise between\n# speed and data safety. It's up to you to understand if you can relax this to\n# \"no\" that will will let the operating system flush the output buffer when\n# it wants, for better performances (but if you can live with the idea of\n# some data loss consider the default persistence mode that's snapshotting),\n# or on the contrary, use \"always\" that's very slow but a bit safer than\n# everysec.\n#\n# If unsure, use \"everysec\".\n\n# appendfsync always\n\nappendfsync everysec\n\n# appendfsync no\n\n\n# If you have latency problems turn this to \"yes\". Otherwise leave it as\n# \"no\" that is the safest pick from the point of view of durability.\n\nno-appendfsync-on-rewrite no\n\nauto-aof-rewrite-percentage 100\n\nauto-aof-rewrite-min-size 64mb\n\n\n\n################################## SLOW LOG ###################################\n\n# The Redis Slow Log is a system to log queries that exceeded a specified\n# execution time. The execution time does not include the I/O operations\n# like talking with the client, sending the reply and so forth,\n# but just the time needed to actually execute the command (this is the only\n# stage of command execution where the thread is blocked and can not serve\n# other requests in the meantime).\n# \n# You can configure the slow log with two parameters: one tells Redis\n# what is the execution time, in microseconds, to exceed in order for the\n# command to get logged, and the other parameter is the length of the\n# slow log. When a new command is logged the oldest one is removed from the\n# queue of logged commands\n# The following time is expressed in microseconds, so 1000000 is equivalent\n# to one second. Note that a negative number disables the slow log, while\n# a value of zero forces the logging of every command.\n\nslowlog-log-slower-than 10000\n\n\n# There is no limit to this length. Just be aware that it will consume memory.\n# You can reclaim memory used by the slow log with SLOWLOG RESET.\n\nslowlog-max-len 1024\n\n\n################################ VIRTUAL MEMORY ###############################\n\n### WARNING! Virtual Memory is deprecated in Redis 2.4\n### The use of Virtual Memory is strongly discouraged.\n### WARNING! Virtual Memory is deprecated in Redis 2.4\n### The use of Virtual Memory is strongly discouraged.\n\n# Virtual Memory allows Redis to work with datasets bigger than the actual\n# amount of RAM needed to hold the whole dataset in memory.\n# In order to do so very used keys are taken in memory while the other keys\n# are swapped into a swap file, similarly to what operating systems do\n# with memory pages.\n# To enable VM just set 'vm-enabled' to yes, and set the following three\n# VM parameters accordingly to your needs.\n\nvm-enabled no\n\n# vm-enabled yes\n# This is the path of the Redis swap file. As you can guess, swap files\n# can't be shared by different Redis instances, so make sure to use a swap\n# file for every redis process you are running. Redis will complain if the\n# swap file is already in use.\n# The best kind of storage for the Redis swap file (that's accessed at random) \n# is a Solid State Disk (SSD).\n# *** WARNING *** if you are using a shared hosting the default of putting\n# the swap file under /tmp is not secure. Create a dir with access granted\n# only to Redis user and configure Redis to create the swap file there.\n\nvm-swap-file /tmp/redis.swap\n\n\n# vm-max-memory configures the VM to use at max the specified amount of\n# RAM. Everything that deos not fit will be swapped on disk *if* possible, that\n# is, if there is still enough contiguous space in the swap file.\n# With vm-max-memory 0 the system will swap everything it can. Not a good\n# default, just specify the max amount of RAM you can in bytes, but it's\n# better to leave some margin. For instance specify an amount of RAM\n# that's more or less between 60 and 80% of your free RAM.\n\nvm-max-memory 0\n\n# Redis swap files is split into pages. An object can be saved using multiple\n# contiguous pages, but pages can't be shared between different objects.\n# So if your page is too big, small objects swapped out on disk will waste\n# a lot of space. If you page is too small, there is less space in the swap\n# file (assuming you configured the same number of total swap file pages).\n# If you use a lot of small objects, use a page size of 64 or 32 bytes.\n# If you use a lot of big objects, use a bigger page size.\n# If unsure, use the default :)\n\nvm-page-size 32\n\n# Number of total memory pages in the swap file.\n# Given that the page table (a bitmap of free/used pages) is taken in memory,\n# every 8 pages on disk will consume 1 byte of RAM.\n# The total swap size is vm-page-size * vm-pages\n# With the default of 32-bytes memory pages and 134217728 pages Redis will\n# use a 4 GB swap file, that will use 16 MB of RAM for the page table.\n\n# It's better to use the smallest acceptable value for your application,\n# but the default is large in order to work in most conditions.\n\nvm-pages 134217728\n\n# Max number of VM I/O threads running at the same time.\n# This threads are used to read/write data from/to swap file, since they\n# also encode and decode objects from disk to memory or the reverse, a bigger\n# number of threads can help with big objects even if they can't help with\n# I/O itself as the physical device may not be able to couple with many\n# reads/writes operations at the same time.\n#\n# The special value of 0 turn off threaded I/O and enables the blocking\n# Virtual Memory implementation.\n\nvm-max-threads 4\n\n############################### ADVANCED CONFIG ###############################\n\n# Hashes are encoded in a special way (much more memory efficient) when they\n# have at max a given numer of elements, and the biggest element does not\n# exceed a given threshold. You can configure this limits with the following\n# configuration directives.\n\nhash-max-zipmap-entries 512\n\nhash-max-zipmap-value 64\n\n# Similarly to hashes, small lists are also encoded in a special way in order\n# to save a lot of space. The special representation is only used when\n# you are under the following limits:\n\nlist-max-ziplist-entries 512\n\nlist-max-ziplist-value 64\n\n# Sets have a special encoding in just one case: when a set is composed\n# of just strings that happens to be integers in radix 10 in the range\n# of 64 bit signed integers.\n# The following configuration setting sets the limit in the size of the\n# set in order to use this special memory saving encoding.\n\nset-max-intset-entries 512\n\n# Similarly to hashes and lists, sorted sets are also specially encoded in\n# order to save a lot of space. This encoding is only used when the length and\n# elements of a sorted set are below the following limits:\n\nzset-max-ziplist-entries 128\n\nzset-max-ziplist-value 64\n\n# Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in\n# order to help rehashing the main Redis hash table (the one mapping top-level\n# keys to values). The hash table implementation redis uses (see dict.c)\n# performs a lazy rehashing: the more operation you run into an hash table\n# that is rhashing, the more rehashing \"steps\" are performed, so if the\n# server is idle the rehashing is never complete and some more memory is used\n# by the hash table.\n\n\n# The default is to use this millisecond 10 times every second in order to\n# active rehashing the main dictionaries, freeing memory when possible.\n#\n\n# If unsure:\n# use \"activerehashing no\" if you have hard latency requirements and it is\n# not a good thing in your environment that Redis can reply form time to time\n# to queries with 2 milliseconds delay.\n\n#\n# use \"activerehashing yes\" if you don't have such hard requirements but\n# want to free memory asap when possible.\n\nactiverehashing yes\n\n\n################################## INCLUDES ###################################\n\n\n# Include one or more other config files here.  This is useful if you\n# have a standard template that goes to all redis server but also need\n# to customize a few per-server settings.  Include files can include\n# other files, so use this wisely.\n# 假如说你有一个可用于所有的 redis server 的标准配置模板，\n# 但针对某些 server 又需要一些个性化的设置，\n# 你可以使用 include 来包含一些其他的配置文件，这对你来说是非常有用的。\n#\n# 但是要注意哦，include 是不能被 config rewrite 命令改写的\n# 由于 redis 总是以最后的加工线作为一个配置指令值，所以你最好是把 include 放在这个文件的最前面，\n# 以避免在运行时覆盖配置的改变，相反，你就把它放在后面（外国人真啰嗦）。\n\n# include /path/to/local.conf\n# include /path/to/other.conf\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);