(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{685:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("Google Protocol Buffer( 简称 Protobuf) 是 Google 公司内部的混合语言数据标准 ,是一种轻便高效的结构化数据存储格式，可以用于结构化数据串行化，或者说序列化(将 数据结构或对象 转换成 二进制串 的过程 )。它很适合做"),a("strong",[t._v("数据存储")]),t._v("或 "),a("strong",[t._v("RPC 数据交换")]),t._v("格式。可用于通讯协议、数据存储等领域的语言无关、平台无关、可扩展的序列化结构数据格式")])]),t._v(" "),a("p",[a("em",[t._v("protocol buffers 诞生之初是为了解决服务器端新旧协议(高低版本)兼容性问题，名字也很体贴，“协议缓冲区”。只不过后期慢慢发展成用于传输数据。")])]),t._v(" "),a("p",[t._v("笔者所在的360广告投放，N亿条商品信息的数据全部采用PB格式存储、传输。")]),t._v(" "),a("h2",{attrs:{id:"protobuf-的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-的优点"}},[t._v("#")]),t._v(" Protobuf 的优点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("更小——序列化后，数据大小可缩小约 3 倍")])]),t._v(" "),a("li",[a("p",[t._v("更快——序列化速度更快，比 xml 和 JSON 快 20-100 倍，体积缩小后，传输时，带宽也会优化")])]),t._v(" "),a("li",[a("p",[t._v("更简单——proto 编译器，自动进行序列化和反序列化")])]),t._v(" "),a("li",[a("p",[t._v("维护成本低——跨平台、跨语言，多平台仅需要维护一套对象协议（.proto）")])]),t._v(" "),a("li",[a("p",[t._v("可扩展——“向后”兼容性好，不必破坏已部署的、依靠“老”数据格式的程序就可以对数据结构进行升级")])]),t._v(" "),a("li",[a("p",[t._v("加密性好——HTTP 传输内容抓包只能看到字节")]),t._v(" "),a("p",[t._v("在传输数据量大、网络环境不稳定的数据存储和RPC数据交换场景比较合适")])])]),t._v(" "),a("h2",{attrs:{id:"protobuf-的不足"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-的不足"}},[t._v("#")]),t._v(" Protobuf 的不足")]),t._v(" "),a("ul",[a("li",[t._v("功能简单，无法用来表示复杂的概念")]),t._v(" "),a("li",[t._v("通用性较差，XML 和 JSON 已成为多种行业标准的编写工具，pb 只是 geogle 内部使用")]),t._v(" "),a("li",[t._v("自解释性差，以二进制数据流方式存储（不可读），需要通过 "),a("code",[t._v(".proto")]),t._v(" 文件才可以")])]),t._v(" "),a("p",[t._v("官网 Protocol Buffer Basics: Java "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/javatutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/protocol-buffers/docs/javatutorial"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),a("h5",{attrs:{id:"_1-定义-proto-文件的消息格式-你希望存储的数据格式描述文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义-proto-文件的消息格式-你希望存储的数据格式描述文件"}},[t._v("#")]),t._v(" 1. 定义 "),a("code",[t._v(".proto")]),t._v(" 文件的消息格式（你希望存储的数据格式描述文件）")]),t._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("syntax")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proto2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" tutorial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" java_package "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.example.tutorial"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("option")]),t._v(" java_outer_classname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AddressBookProtos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息模型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//消息对象的字段：字段修饰符+字段类型+字段名称+标识号（通过二进制格式唯一标识每个字段，不变可）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MOBILE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    HOME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    WORK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("PhoneType")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token annotation"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HOME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("PhoneNumber")]),t._v(" phones "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBook")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("Person")]),t._v(" people "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("☆☆☆注：")]),t._v(" "),a("ul",[a("li",[t._v('syntax = "proto2"：指明版本')]),t._v(" "),a("li",[t._v("package：PB的自己的包名，防止不同 "),a("code",[t._v(".proto")]),t._v(" 项目间命名 发生冲突")]),t._v(" "),a("li",[t._v("java_package： 生成java类的包名,如不显式指定，默认包名为：按照应用名称倒序方式进行排序")]),t._v(" "),a("li",[t._v("java_outer_classname：生成 java类的类名,如不显式指定，则默认为把.proto文件名转换为首字母大写来生成")]),t._v(" "),a("li",[t._v("message: 你的消息格式，各数据类型（"),a("code",[t._v("bool")]),t._v(", "),a("code",[t._v("int32")]),t._v(", "),a("code",[t._v("float")]),t._v(", "),a("code",[t._v("double")]),t._v(",  "),a("code",[t._v("string")]),t._v(" ，"),a("code",[t._v("enum")]),t._v(" ... ）字段的集合，在一个.proto文件中可以定义多个message，一个message里也可以定义另外一个message(相当于java的类，当然也可以有内部类)")]),t._v(" "),a("li",[t._v("当然 PB 也是支持和 Java 一样的"),a("code",[t._v("import")]),t._v("的，"),a("code",[t._v('import "xxx.proto";')])]),t._v(" "),a("li",[t._v("像每个字段也必须有修饰符，PB提供的字段修饰符有3种\n"),a("ul",[a("li",[t._v("required：必填")]),t._v(" "),a("li",[t._v("optional：可选")]),t._v(" "),a("li",[t._v("repeated ：可重复字段，可放集合")])])]),t._v(" "),a("li",[t._v("标识号：通过二进制格式唯一标识每个字段 ，使用后就不能够再改变\n"),a("ul",[a("li",[t._v("标识号使用范围：[1,2的29次方 - 1]")]),t._v(" "),a("li",[t._v("不可使用 [19000－19999] 标识号， 因为 "),a("code",[t._v("Protobuf")]),t._v(" 协议实现中对这些标识号进行了预留。假若使用，则会报错")]),t._v(" "),a("li",[t._v("每个字段在进行编码时都会占用内存，而 占用内存大小 取决于 标识号：\n"),a("ul",[a("li",[t._v("范围 [1,15] 标识号的字段 在编码时占用1个字节；")]),t._v(" "),a("li",[t._v("范围 [16,2047] 标识号的字段 在编码时占用2个字节")]),t._v(" "),a("li",[a("strong",[t._v("为频繁出现的 消息字段 保留 [1,15] 的标识号")])])])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006tNbRwly1gacq3rmwohj30hb04n75k.jpg",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"_2-使用-protocol-buffer-编译器-下载地址-https-github-com-protocolbuffers-protobuf-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-protocol-buffer-编译器-下载地址-https-github-com-protocolbuffers-protobuf-releases"}},[t._v("#")]),t._v(" 2. 使用 protocol buffer 编译器（下载地址："),a("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/protocolbuffers/protobuf/releases"),a("OutboundLink")],1),t._v(" )")]),t._v(" "),a("h5",{attrs:{id:"winows的话-cmd到编译器安装目录的bin目录中-执行-protoc-exe-h-e-learning-protoc-3-9-0-win64-bin-protoc-exe-h-可以看到参数说明。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#winows的话-cmd到编译器安装目录的bin目录中-执行-protoc-exe-h-e-learning-protoc-3-9-0-win64-bin-protoc-exe-h-可以看到参数说明。"}},[t._v("#")]),t._v(" winows的话 cmd到编译器安装目录的bin目录中，执行  "),a("strong",[t._v("protoc.exe -h  （E:\\learning\\protoc-3.9.0-win64\\bin>protoc.exe -h")]),t._v("），可以看到参数说明。")]),t._v(" "),a("p",[t._v("执行：protoc -I=源地址 --java_out=目标地址  源地址/xxx.proto")]),t._v(" "),a("p",[a("strong",[t._v("E:\\learning\\protoc-3.9.0-win64\\bin>protoc.exe -I=E:\\learning\\ --java_out=E:\\lear")]),t._v(" "),a("strong",[t._v("ning\\ E:\\learning\\addressbook.proto")])]),t._v(" "),a("p",[t._v("实际使用中:")]),t._v(" "),a("p",[a("strong",[t._v("protoc.exe -I=E:\\learn-workspace\\starfish\\starfish-learn\\src\\main\\java\\priv\\starfish\\ProtocolBuffers\\proto\\ --java_out=E:\\learn-workspace\\starfish\\starfish-learn\\src\\main\\java  E:\\learn-workspace\\starfish\\starfish-learn\\src\\main\\java\\priv\\starfish\\ProtocolBuffers\\proto\\addressbook.proto）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006tNbRwly1gacq5rd8drj30xf0daq4w.jpg",alt:"pd-idea-screenshot"}})]),t._v(" "),a("h5",{attrs:{id:"_3-通过-java-protocol-buffer-api-读写消息格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过-java-protocol-buffer-api-读写消息格式"}},[t._v("#")]),t._v(" 3. 通过 Java protocol buffer API 读写消息格式")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("priv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("starfish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProtocolBuffers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protobuf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvalidProtocolBufferException")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("priv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("starfish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProtocolBuffers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBookProtos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("priv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("starfish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProtocolBuffers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBookProtos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBook")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author: starfish\n * @date: 2019/7/24 14:39\n * @description:\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloProto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"starfish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"starfish@126.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPhones")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBookProtos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBookProtos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HOME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13555555555"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInitialized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//序列化和反序列化")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" newPerson "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newPerson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            newPerson "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newPerson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvalidProtocolBufferException")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向地址簿添加两条Person信息")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),t._v(" books "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressBook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPeople")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPeople")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xin@163.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AddressBook对象信息："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("编译后生成的java类是不可变的，类似java的String，不可修改")]),t._v(" "),a("p",[t._v("构造消息，必须先构造一个builder，然后set属性（可以一连串的set），最后调用build() 方法。")]),t._v(" "),a("p",[t._v("PB常用方法")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("isInitialized()")]),t._v(": 检查必填字段（required）是否有set值")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("toString()")]),t._v(": 返回message的可读字符串格式")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("mergeFrom(Message other)")]),t._v(": 合并message")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("clear()")]),t._v(": 清空字段值")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("byte[] toByteArray();")]),t._v(": 序列化message,返回字节数组")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("MessageType parseFrom(byte[] data);")]),t._v(": 解析给定的字节数组")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("void writeTo(OutputStream output);")]),t._v(": 序列化message并写入输出流"),a("code",[t._v("OutputStream")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("MessageType parseFrom(InputStream input);")]),t._v(": 从输入流 "),a("code",[t._v("InputStream")]),t._v("读取并解析message")])])]),t._v(" "),a("p",[a("strong",[t._v("Reference:")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/halfrost/Halfrost-Field/blob/master/contents/Protocol/Protocol-buffers-encode.md#%E5%85%AD-protocol-buffer-%E7%BC%96%E7%A0%81%E5%8E%9F%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/halfrost/Halfrost-Field/blob/master/contents/Protocol/Protocol-buffers-encode.md#六-protocol-buffer-编码原理"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);