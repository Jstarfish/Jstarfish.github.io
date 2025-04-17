(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{706:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"_1-pom依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-pom依赖"}},[t._v("#")]),t._v(" 1.pom依赖：")]),t._v(" "),a("p",[t._v("引入springboot starter包即可")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-启动类启用定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动类启用定时任务"}},[t._v("#")]),t._v(" 2.启动类启用定时任务：")]),t._v(" "),a("p",[t._v("在启动类上加注解："),a("strong",[t._v("@EnableScheduling")]),t._v("即可实现。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableScheduling")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"_3-创建定时任务实现类-单线程和多线程版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建定时任务实现类-单线程和多线程版本"}},[t._v("#")]),t._v(" 3.创建定时任务实现类(单线程和多线程版本)：")]),t._v(" "),a("h5",{attrs:{id:"_3-1-单线程定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-单线程定时任务"}},[t._v("#")]),t._v(" 3.1 单线程定时任务：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledTask")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),t._v(" dateFormat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HH:mm:ss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String形式的参数，可以从配置文件中加载，方便维护")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// @Scheduled(fixedDelayString = "${jobs.fixedDelay}")')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixedRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTask1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"定时任务1-----当前时间："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dateFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cron "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${jobs.cron}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTask2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"定时任务2-----当前时间："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dateFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h6",{attrs:{id:"application-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-properties"}},[t._v("#")]),t._v(" application.properties")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("jobs.fixedDelay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("6000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("jobs.cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("0/5 * *  * * ?")]),t._v("\n")])])]),a("h6",{attrs:{id:"运行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[t._v("#")]),t._v(" 运行结果：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-05-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":19:21.826  INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12868")]),t._v(" --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("   scheduling-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p.s.springbootlearn.ScheduledTask        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 任务1,从配置文件加载任务信息，当前时间：11:19:21\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-05-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":19:25.001  INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12868")]),t._v(" --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("   scheduling-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p.s.springbootlearn.ScheduledTask        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 任务2,从配置文件加载任务信息，当前时间：11:19:25\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-05-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":19:26.828  INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12868")]),t._v(" --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("   scheduling-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p.s.springbootlearn.ScheduledTask        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 任务1,从配置文件加载任务信息，当前时间：11:19:26\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-05-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":19:30.001  INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12868")]),t._v(" --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("   scheduling-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p.s.springbootlearn.ScheduledTask        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 任务2,从配置文件加载任务信息，当前时间：11:19:30\n")])])]),a("h5",{attrs:{id:"_3-2-多线程定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-多线程定时任务"}},[t._v("#")]),t._v(" 3.2 多线程定时任务：")]),t._v(" "),a("h6",{attrs:{id:"加一个多线程配置类-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加一个多线程配置类-ok"}},[t._v("#")]),t._v(" 加一个多线程配置类，OK")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@Configuration\npublic class ScheduleConfig implements SchedulingConfigurer {\n    @Override\n    public void configureTasks(ScheduledTaskRegistrar scheduledTaskRegistrar) {\n\n        scheduledTaskRegistrar.setScheduler(Executors.newScheduledThreadPool(10));\n\n    }\n}\n")])])]),a("h6",{attrs:{id:"结果如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果如下"}},[t._v("#")]),t._v(" 结果如下：")]),t._v(" "),a("p",[t._v("可以看到开启了多个线程")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-05-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":59:50.000  INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15140")]),t._v(" --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-1-thread-2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p.s.springbootlearn.ScheduledTask        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 任务2,从配置文件加载任务信息，当前时间：11:59:50\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-05-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":59:54.294  INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15140")]),t._v(" --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-1-thread-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p.s.springbootlearn.ScheduledTask        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 任务1,从配置文件加载任务信息，当前时间：11:59:54\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-05-09 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":59:55.000  INFO "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15140")]),t._v(" --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-1-thread-3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" p.s.springbootlearn.ScheduledTask        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 任务2,从配置文件加载任务信息，当前时间：11:59:55\n")])])]),a("p",[t._v("还可以基于注解**@EnableAsync"),a("strong",[t._v("和")]),t._v("@Async**异步执行定时任务，也是多线程")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAsync")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledTask")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),t._v(" dateFormat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HH:mm:ss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixedDelayString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${jobs.fixedDelay}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTask1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"===任务1,从配置文件加载任务信息，当前时间："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dateFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cron "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${jobs.cron}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTask2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"===任务2,从配置文件加载任务信息，当前时间："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dateFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或者增加配置类定义线程池的一些信息")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAsync")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsyncConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("destroyMethod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shutdown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolTaskScheduler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("taskScheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolTaskScheduler")]),t._v(" scheduler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolTaskScheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPoolSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置线程名前缀")]),t._v("\n        scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setThreadNamePrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"task-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 线程内容执行完后60秒停在")]),t._v("\n        scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAwaitTerminationSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待所有线程执行完")]),t._v("\n        scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWaitForTasksToCompleteOnShutdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_4-参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参数说明"}},[t._v("#")]),t._v(" 4.参数说明：")]),t._v(" "),a("p",[t._v("@Scheduled的代码")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scheduled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CRON_DISABLED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixedDelay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixedDelayString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixedRate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixedRateString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialDelay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialDelayString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("@Scheduled接受多种定时参数的设置（主要分为两类cornexpression和Rate/Delay表达式）：")]),t._v(" "),a("p",[t._v("​    （1）cron：cron表达式，指定任务在特定时间执行；")]),t._v(" "),a("p",[t._v("​    （2）fixedDelay：表示上一次任务执行完成后多久再次执行，参数类型为long，单位ms；")]),t._v(" "),a("p",[t._v("​    （3）fixedDelayString：与fixedDelay含义一样，只是参数类型变为String；")]),t._v(" "),a("p",[t._v("​    （4）fixedRate：表示按一定的频率执行任务，参数类型为long，单位ms；")]),t._v(" "),a("p",[t._v("​    （5）fixedRateString: 与fixedRate的含义一样，只是将参数类型变为String；")]),t._v(" "),a("p",[t._v("​    （6）initialDelay：表示延迟多久再第一次执行任务，参数类型为long，单位ms；")]),t._v(" "),a("p",[t._v("​    （7）initialDelayString：与initialDelay的含义一样，只是将参数类型变为String；")]),t._v(" "),a("p",[t._v("​    （8）zone：时区，默认为当前时区，一般没有用到。")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("p",[a("strong",[t._v("☆☆☆☆☆")]),t._v(" fixedRate和fixedDelay  的区别")]),t._v(" "),a("ul",[a("li",[t._v("@Scheduled(fixedRate = 6000)："),a("strong",[t._v("上一次开始执行时间点后每隔6秒执行一次")]),t._v("。")]),t._v(" "),a("li",[t._v("@Scheduled(fixedDelay = 6000)："),a("strong",[t._v("上一次执行完毕时间点之后6秒再执行")]),t._v("。")]),t._v(" "),a("li",[t._v("@Scheduled(initialDelay=1000, fixedRate=6000)："),a("strong",[t._v("第一次延迟1秒后执行，之后按fixedRate的规则每6秒执行一次")]),t._v("。")])]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("cornexpression表达式详解：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("允许值")]),t._v(" "),a("th",[t._v("允许特殊字符")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("秒")]),t._v(" "),a("td",[t._v("0-59")]),t._v(" "),a("td",[t._v(", - * /")])]),t._v(" "),a("tr",[a("td",[t._v("分")]),t._v(" "),a("td",[t._v("0-59")]),t._v(" "),a("td",[t._v(", - * /")])]),t._v(" "),a("tr",[a("td",[t._v("小时")]),t._v(" "),a("td",[t._v("0-23")]),t._v(" "),a("td",[t._v(", - * /")])]),t._v(" "),a("tr",[a("td",[t._v("日")]),t._v(" "),a("td",[t._v("1-31")]),t._v(" "),a("td",[t._v(", - * ? / L W C")])]),t._v(" "),a("tr",[a("td",[t._v("月")]),t._v(" "),a("td",[t._v("1-12或JAN-DEC")]),t._v(" "),a("td",[t._v(", - * /")])]),t._v(" "),a("tr",[a("td",[t._v("周")]),t._v(" "),a("td",[t._v("1-7或SUN-SAT")]),t._v(" "),a("td",[t._v(", - *  ? / L C #")])]),t._v(" "),a("tr",[a("td",[t._v("年")]),t._v(" "),a("td",[t._v("留空或1970-2099")]),t._v(" "),a("td",[t._v(", - * /")])])])]),t._v(" "),a("p"),t._v(" "),a("p",[a("strong",[t._v("cron一共有7位，但是最后一位是年，可以留空，所以我们可以写6位：")])]),t._v(" "),a("p",[a("strong",[t._v("☆☆☆☆☆")])]),t._v(" "),a("p",[t._v("*  表示所有值，在分钟里表示每一分钟触发。在小时，日期，月份等里面表示每一小时，每一日，每一月。")]),t._v(" "),a("p",[t._v("？ 表示不指定值。表示不关心当前位置设置的值。 比如不关心是周几，则周的位置填写？。　　主要是由于日期跟周是有重复的所以两者必须有一者设置为？")]),t._v(" "),a("p",[t._v("-  表示区间。小时设置为10-12表示10,11,12点均会触发。")]),t._v(" "),a("p",[t._v("， 表示多个值。 小时设置成10,12表示10点和12点会触发。")]),t._v(" "),a("p",[t._v("/  表示递增触发。 5/15表示从第5秒开始，每隔15秒触发。")]),t._v(" "),a("p",[t._v("L  表示最后的意思。 日上表示最后一天。星期上表示星期六或7。 L前加数据，表示该数据的最后一个。")]),t._v(" "),a("p",[t._v("星期上设置6L表示最后一个星期五。  6表示星期五")]),t._v(" "),a("p",[t._v("W 表示离指定日期最近的工作日触发。15W离该月15号最近的工作日触发。")]),t._v(" "),a("p",[t._v("#表示每月的第几个周几。 6#3表示该月的第三个周五。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('\t"0 0 12 * * ?" 每天中午12点触发 \n')])])]),a("p",[t._v('"0 15 10 ? * *" 每天上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 * * ?" 每天上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 * * ? *" 每天上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 * * ? 2005" 2005年的每天上午10:15触发')]),t._v(" "),a("p",[t._v('"0 * 14 * * ?" 在每天下午2点到下午2:59期间的每1分钟触发')]),t._v(" "),a("p",[t._v('"0 0/5 14 * * ?" 在每天下午2点到下午2:55期间的每5分钟触发')]),t._v(" "),a("p",[t._v('"0 0/5 14,18 * * ?" 在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发')]),t._v(" "),a("p",[t._v('"0 0-5 14 * * ?" 在每天下午2点到下午2:05期间的每1分钟触发')]),t._v(" "),a("p",[t._v('"0 10,44 14 ? 3 WED" 每年三月的星期三的下午2:10和2:44触发')]),t._v(" "),a("p",[t._v('"0 15 10 ? * MON-FRI" 周一至周五的上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 15 * ?" 每月15日上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 L * ?" 每月最后一日的上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 ? * 6L" 每月的最后一个星期五上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 ? * 6L 2002-2005" 2002年至2005年的每月的最后一个星期五上午10:15触发')]),t._v(" "),a("p",[t._v('"0 15 10 ? * 6#3" 每月的第三个星期五上午10:15触发')]),t._v(" "),a("p",[t._v("每天早上6点     0 6 * * *     每两个小时     0 */2 * * *")]),t._v(" "),a("p",[t._v("晚上11点到早上8点之间每两个小时，早上八点    0 23-7/2，8 * * *")]),t._v(" "),a("p",[t._v("每个月的4号和每个礼拜的礼拜一到礼拜三的早上11点     0 11 4 * 1-3")]),t._v(" "),a("p",[t._v("1月1日早上4点     0 4 1 1 *")]),t._v(" "),a("p",[t._v("Reference ： https://blog.csdn.net/u013456370/article/details/79411952")])])}),[],!1,null,null,null);s.default=e.exports}}]);