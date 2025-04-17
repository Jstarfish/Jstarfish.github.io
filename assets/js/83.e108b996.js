(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{569:function(t,s,a){"use strict";a.r(s);var n=a(2),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[a("a",{attrs:{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Explain",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("我们知道 MySQL 有执行计划，")]),t._v(" "),a("p",[t._v("Hive 的底层就是 MapReduce 的编程实现，我们可以通过执行计划详细的了解执行过程。")]),t._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[t._v("Hive 和 MySQL 类似，也提供了一个 "),a("code",[t._v("EXPLAIN")]),t._v(" 命令来显示查询语句的执行计划，如下")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXTENDED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("CBO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("AST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("DEPENDENCY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTHORIZATION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("LOCKS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("VECTORIZATION"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ANALYZE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" query\n")])])]),a("p",[a("code",[t._v("EXPLAIN + 可选参数 + 查询语句")])]),t._v(" "),a("p",[t._v("可选参数：")]),t._v(" "),a("ul",[a("li",[t._v("EXTENDED：")]),t._v(" "),a("li",[t._v("CBO：")]),t._v(" "),a("li",[t._v("AST：")]),t._v(" "),a("li",[t._v("DEPENDENCY：")]),t._v(" "),a("li",[t._v("AUTHORIZATION：")]),t._v(" "),a("li",[t._v("LOCKS：")]),t._v(" "),a("li",[t._v("VECTORIZATION：")]),t._v(" "),a("li",[t._v("ANALYZE：")])]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("直接 "),a("code",[t._v("EXPLAN")]),t._v("，不加任何参数")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("hive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" explain "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from xurilogall where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-03-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nOK\nSTAGE DEPENDENCIES:\n  Stage-0 is a root stage    //\n\nSTAGE PLANS:\n  Stage: Stage-0\n    Fetch Operator\n      limit: "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-1")]),t._v("\n      Processor Tree:\n        TableScan\n          alias: xurilogall\n          Statistics: Num rows: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3391560")]),t._v(" Data size: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5860617060")]),t._v(" Basic stats: COMPLETE Column stats: NONE\n          Select Operator\n            expressions: log_time "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cpctranid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", msg_type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", accountid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cpcplanid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", clickdate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cost "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: decimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10,0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(", costa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: decimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10,0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(", costb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: decimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10,0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(", costc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: decimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10,0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(", servicetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cpcid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", keyword "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", position "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cpcgrpid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", istest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", agentid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", regioncode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", msgid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", account_budgetday "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cpcplan_budgetday "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", validity "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", ideaid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", querykey "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", codeid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", domainid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", topdomainid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", subdomainid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", clickdevice "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", clickdevicestat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cpcplan_devicetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", extraideaid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", linkpicid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cpcstyle_type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", complete_pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", place_holder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", pattern_match "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", showregion "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", eesf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", extend_reserved "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cumulate_status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: smallint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cumulate_amount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", real_account_budget "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", plantype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", matchtype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: smallint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", max_price "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: bigint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-03-01'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            outputColumnNames: _col0, _col1, _col2, _col3, _col4, _col5, _col6, _col7, _col8, _col9, _col10, _col11, _col12, _col13, _col14, _col15, _col16, _col17, _col18, _col19, _col20, _col21, _col22, _col23, _col24, _col25, _col26, _col27, _col28, _col29, _col30, _col31, _col32, _col33, _col34, _col35, _col36, _col37, _col38, _col39, _col40, _col41, _col42, _col43, _col44, _col45, _col46, _col47, _col48, _col49\n            Statistics: Num rows: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3391560")]),t._v(" Data size: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5860617060")]),t._v(" Basic stats: COMPLETE Column stats: NONE\n            ListSink\n\nTime taken: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.26")]),t._v(" seconds, Fetched: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);