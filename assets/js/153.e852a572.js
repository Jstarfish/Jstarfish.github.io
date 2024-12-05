(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{647:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("字符串的题目，和数组的题目大差不大")])]),t._v(" "),a("h3",{attrs:{id:"_20-有效的括号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-有效的括号"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"}},[t._v("20. 有效的括号"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。有效字符串需满足：")]),t._v(" "),a("p",[t._v("左括号必须用相同类型的右括号闭合。\n左括号必须以正确的顺序闭合。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：s = "()"\n输出：true\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：s = "()[]{}"\n输出：true\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：s = "([)]"\n输出：false\n')])])])]),t._v(" "),a("p",[t._v("思路：栈")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" pairs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("')'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'('")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("']'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'['")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'{'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deque")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pairs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" pairs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-无重复字符的最长子串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-无重复字符的最长子串"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("3. 无重复字符的最长子串"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("给定一个字符串 "),a("code",[t._v("s")]),t._v(" ，请你找出其中不含有重复字符的 "),a("strong",[t._v("最长子串")]),t._v(" 的长度。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入: s = "abcabcbb"\n输出: 3 \n解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入: s = "bbbbb"\n输出: 1\n解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。\n')])])])]),t._v(" "),a("p",[a("strong",[t._v("思路")]),t._v("：滑动窗口")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lengthOfLongestSubstring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 哈希集合，记录每个字符是否出现过,其中 key 值为字符，value 值为字符位置;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//为了有左右指针的思想，我把我们常用的 i 写成了 right")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前字符包含在当前有效的子段中，如：abca，当我们遍历到第二个a，当前有效最长子段是 abc，我们又遍历到a，")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//那么此时更新 left 为 map.get(a)+1=1，当前有效子段更新为 bca；")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相当于左指针往前移动了一位")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" alpha "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回上一个重复字符的下一个位置，这里要让left保持最大值，如果是 left = map.get(alpha) + 1; 的话，abba 就会有问题")]),t._v("\n                left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//右指针一直往前移动")]),t._v("\n            map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("滑动窗口题目：")]),t._v(" "),a("p",[t._v("https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/hua-dong-chuang-kou-by-powcai/")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("3. 无重复字符的最长子串"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/",target:"_blank",rel:"noopener noreferrer"}},[t._v("30. 串联所有单词的子串"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-window-substring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("76. 最小覆盖子串"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-substring-with-at-most-two-distinct-characters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("159. 至多包含两个不同字符的最长子串"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("209. 长度最小的子数组"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/sliding-window-maximum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("239. 滑动窗口最大值"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/permutation-in-string/",target:"_blank",rel:"noopener noreferrer"}},[t._v("567. 字符串的排列"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/smallest-range/",target:"_blank",rel:"noopener noreferrer"}},[t._v("632. 最小区间"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-window-subsequence/",target:"_blank",rel:"noopener noreferrer"}},[t._v("727. 最小窗口子序列"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_76-最小覆盖子串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_76-最小覆盖子串"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-window-substring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("76. 最小覆盖子串"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("给你一个字符串 "),a("code",[t._v("s")]),t._v(" 、一个字符串 "),a("code",[t._v("t")]),t._v(" 。返回 "),a("code",[t._v("s")]),t._v(" 中涵盖 "),a("code",[t._v("t")]),t._v(" 所有字符的最小子串。如果 "),a("code",[t._v("s")]),t._v(" 中不存在涵盖 "),a("code",[t._v("t")]),t._v(" 所有字符的子串，则返回空字符串 "),a("code",[t._v('""')]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("ul",[a("li",[t._v("对于 "),a("code",[t._v("t")]),t._v(" 中重复字符，我们寻找的子字符串中该字符数量必须不少于 "),a("code",[t._v("t")]),t._v(" 中该字符数量。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("s")]),t._v(" 中存在这样的子串，我们保证它是唯一的答案。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：s = "ADOBECODEBANC", t = "ABC"\n输出："BANC"\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入: s = "a", t = "aa"\n输出: ""\n')])])])]),t._v(" "),a("p",[a("strong",[t._v("滑动窗口算法的思路是这样")]),t._v("：")]),t._v(" "),a("blockquote",[a("p",[t._v("1、我们在字符串 "),a("code",[t._v("S")]),t._v(" 中使用双指针中的左右指针技巧，初始化 "),a("code",[t._v("left = right = 0")]),t._v("，把索引"),a("strong",[t._v("左闭右开")]),t._v("区间 "),a("code",[t._v("[left, right)")]),t._v(" 称为一个「窗口」。")]),t._v(" "),a("p",[t._v("2、我们先不断地增加 "),a("code",[t._v("right")]),t._v(" 指针扩大窗口 "),a("code",[t._v("[left, right)")]),t._v("，直到窗口中的字符串符合要求（包含了 "),a("code",[t._v("T")]),t._v(" 中的所有字符）。")]),t._v(" "),a("p",[t._v("3、此时，我们停止增加 "),a("code",[t._v("right")]),t._v("，转而不断增加 "),a("code",[t._v("left")]),t._v(" 指针缩小窗口 "),a("code",[t._v("[left, right)")]),t._v("，直到窗口中的字符串不再符合要求（不包含 "),a("code",[t._v("T")]),t._v(" 中的所有字符了）。同时，每次增加 "),a("code",[t._v("left")]),t._v("，我们都要更新一轮结果。")]),t._v(" "),a("p",[t._v("4、重复第 2 和第 3 步，直到 "),a("code",[t._v("right")]),t._v(" 到达字符串 "),a("code",[t._v("S")]),t._v(" 的尽头。")]),t._v(" "),a("p",[t._v("这个思路其实也不难，"),a("strong",[t._v("第 2 步相当于在寻找一个「可行解」，然后第 3 步在优化这个「可行解」，最终找到最优解")]),t._v("，也就是最短的覆盖子串。左右指针轮流前进，窗口大小增增减减，窗口不断向右滑动，这就是「滑动窗口」这个名字的来历。")]),t._v(" "),a("p",[t._v("下面画图理解一下，"),a("code",[t._v("needs")]),t._v(" 和 "),a("code",[t._v("window")]),t._v(" 相当于计数器，分别记录 "),a("code",[t._v("T")]),t._v(" 中字符出现次数和「窗口」中的相应字符的出现次数。")]),t._v(" "),a("p",[t._v("初始状态：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://labuladong.gitee.io/algo/images/slidingwindow/1.png",alt:"img"}})]),t._v(" "),a("p",[t._v("增加 "),a("code",[t._v("right")]),t._v("，直到窗口 "),a("code",[t._v("[left, right]")]),t._v(" 包含了 "),a("code",[t._v("T")]),t._v(" 中所有字符：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://labuladong.gitee.io/algo/images/slidingwindow/2.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://labuladong.gitee.io/algo/images/slidingwindow/2.png",alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("现在开始增加 "),a("code",[t._v("left")]),t._v("，缩小窗口 "),a("code",[t._v("[left, right]")]),t._v("：\n"),a("img",{attrs:{src:"https://labuladong.gitee.io/algo/images/slidingwindow/3.png",alt:"img"}})]),t._v(" "),a("p",[t._v("直到窗口中的字符串不再符合要求，"),a("code",[t._v("left")]),t._v(" 不再继续移动：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://labuladong.gitee.io/algo/images/slidingwindow/4.png",alt:"img"}})]),t._v(" "),a("p",[t._v("之后重复上述过程，先移动 "),a("code",[t._v("right")]),t._v("，再移动 "),a("code",[t._v("left")]),t._v("…… 直到 "),a("code",[t._v("right")]),t._v(" 指针到达字符串 "),a("code",[t._v("S")]),t._v(" 的末端，算法结束。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode-cn.com/solution-static/76/76_fig1.gif",alt:"fig1"}})]),t._v(" "),a("h3",{attrs:{id:"_5-最长回文子串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-最长回文子串"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-palindromic-substring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("5. 最长回文子串"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("给你一个字符串 "),a("code",[t._v("s")]),t._v("，找到 "),a("code",[t._v("s")]),t._v(" 中最长的回文子串。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：s = "babad"\n输出："bab"\n解释："aba" 同样是符合题意的答案。\n')])])])]),t._v(" "),a("p",[a("strong",[t._v("思路")]),t._v("：动态规划、中心扩散法")]),t._v(" "),a("h3",{attrs:{id:"_93-复原-ip-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_93-复原-ip-地址"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode.cn/problems/restore-ip-addresses/",target:"_blank",rel:"noopener noreferrer"}},[t._v("93. 复原 IP 地址"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。")]),t._v(" "),a("p",[t._v('例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。\n给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 \'.\' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：s = "25525511135"\n输出：["255.255.11.135","255.255.111.35"]\n')])])])]),t._v(" "),a("h3",{attrs:{id:"_17-电话号码的字母组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-电话号码的字母组合"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number/",target:"_blank",rel:"noopener noreferrer"}},[t._v("17. 电话号码的字母组合"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。")]),t._v(" "),a("p",[t._v("给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/11/09/200px-telephone-keypad2svg.png",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：digits = "23"\n输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]\n')])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);