(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{400:function(t,e,n){},417:function(t,e,n){"use strict";n(400)},422:function(t,e,n){"use strict";n.r(e);var a=n(83),c=n(55),r=Object(a.c)({props:{currentTag:{type:String,default:""}},setup(t,e){const{root:n}=e;return{tags:Object(a.a)(()=>[{name:n.$recoLocales.tag.all,path:"/tag/"},...n.$tags.list]),tagClick:t=>{e.emit("getCurrentTag",t)},getOneColor:c.a}}}),s=(n(417),n(2)),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags"},t._l(t.tags,(function(e,a){return n("span",{key:a,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(n){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"6215c584",null);e.default=o.exports}}]);