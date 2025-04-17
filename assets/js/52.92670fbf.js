(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{540:function(t,a,v){"use strict";v.r(a);var e=v(2),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("strong",[t._v("秒杀系统本质上就是一个满足大并发、高性能和高可用的分布式系统")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"架构原则-4-要-1-不要"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构原则-4-要-1-不要"}},[t._v("#")]),t._v(" 架构原则：“4 要 1 不要”")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("数据要尽量少")]),t._v(" "),v("p",[t._v("所谓“数据要尽量少”，首先是指用户请求的数据能少就少。请求的数据包括上传给系统的数据和系统返回给用户\t的数据（通常就是网页）。")])]),t._v(" "),v("li",[v("p",[t._v("请求数要尽量少")])]),t._v(" "),v("li",[v("p",[t._v("路径要尽量短")])]),t._v(" "),v("li",[v("p",[t._v("依赖要尽量少")])]),t._v(" "),v("li",[v("p",[t._v("不要有单点")])])]),t._v(" "),v("h1",{attrs:{id:"动静分离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动静分离"}},[t._v("#")]),t._v(" 动静分离")]),t._v(" "),v("p",[t._v("所谓“动静分离”，其实就是把用户请求的数据（如 HTML 页面）划分为“动态数据”和“静态数据”。")]),t._v(" "),v("p",[v("strong",[t._v("第一，你应该把静态数据缓存到离用户最近的地方")]),t._v("。静态数据就是那些相对不会变化的数据，因此我们可以把它们缓存起来。缓存到哪里呢？常见的就三种，用户浏览器里、CDN 上或者在服务端的 Cache 中。你应该根据情况，把它们尽量缓存到离用户最近的地方。")]),t._v(" "),v("p",[v("strong",[t._v("第二，静态化改造就是要直接缓存 HTTP 连接")]),t._v("。相较于普通的数据缓存而言，你肯定还听过系统的静态化改造。静态化改造是直接缓存 HTTP 连接而不是仅仅缓存数据，如下图所示，Web 代理服务器根据请求 URL，直接取出对应的 HTTP 响应头和响应体然后直接返回，这个响应过程简单得连 HTTP 协议都不用重新组装，甚至连 HTTP 请求头也不需要解析。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/2c/46/2c608715621afc9c95570dce00a87546.jpg",alt:""}})]),t._v(" "),v("p",[t._v("第三，让谁来缓存静态数据也很重要。不同语言写的 Cache 软件处理缓存数据的效率也各不相同。以 Java 为例，因为 Java 系统本身也有其弱点（比如不擅长处理大量连接请求，每个连接消耗的内存较多，Servlet 容器解析 HTTP 协议较慢），所以你可以不在 Java 层做缓存，而是直接在 Web 服务器层上做，这样你就可以屏蔽 Java 语言层面的一些弱点；而相比起来，Web 服务器（如 Nginx、Apache、Varnish）也更擅长处理大并发的静态文件请求。")])])}),[],!1,null,null,null);a.default=_.exports}}]);