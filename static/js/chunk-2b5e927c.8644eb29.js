(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b5e927c"],{"159b":function(t,e,r){var o=r("da84"),n=r("fdbc"),s=r("17c2"),i=r("9112");for(var a in n){var c=o[a],l=c&&c.prototype;if(l&&l.forEach!==s)try{i(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,r){"use strict";var o=r("b727").forEach,n=r("a640"),s=r("ae40"),i=n("forEach"),a=s("forEach");t.exports=i&&a?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var o=r("d039"),n=r("b622"),s=r("2d00"),i=n("species");t.exports=function(t){return s>=51||!o((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"24a0":function(t,e,r){"use strict";var o=r("91b1"),n=r.n(o);n.a},3220:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.backFlag?o("div",{staticClass:"header"},[o("header",{staticClass:"p-container"},[o("Row",[o("Col",{attrs:{xs:3,sm:0,md:0,lg:0}},[o("div",{staticClass:"simpleheaderlogo"},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:r("46ac"),alt:"logo",width:"30",height:"30"}})])],1)]),o("Col",{attrs:{xs:0,sm:4,md:4,lg:3}},[o("div",{staticClass:"superheaderlogo"},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:r("e669"),alt:"logo",height:"35",width:"80"}})])],1)]),o("Col",{attrs:{xs:5,sm:6,md:0,lg:0}},[o("div",{staticClass:"headerdropmenu"},[o("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.selectmenu}},[o("a",{attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(t.indexshow)+" ")]),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.droplist,(function(e,r){return o("DropdownItem",{key:r,attrs:{divided:e.divided,name:e.title}},[o("router-link",{attrs:{to:e.url}},[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1)],1)]),o("Col",{attrs:{xs:0,sm:0,md:10,lg:9}},[o("div",{staticClass:"navlist"},[o("ul",t._l(t.droplist,(function(e,r){return o("li",{on:{click:function(e){return t.changei(r)}}},[o("router-link",{class:t.cindex==r?"active":"",attrs:{to:e.url}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])]),o("Col",{attrs:{xs:10,sm:9,md:6,lg:8,xl:7}},[o("div",{staticClass:"header-search"},[o("Input",{attrs:{search:"",placeholder:"搜索本站...",maxlength:24},on:{"on-search":t.search},model:{value:t.search_arg,callback:function(e){t.search_arg=e},expression:"search_arg"}})],1)]),o("Col",{attrs:{xs:0,sm:0,md:0,lg:2,xl:2}},[o("div",{staticClass:"about"},[o("router-link",{attrs:{to:{name:"info",params:{info:"about"}},target:"_blank"}},[t._v(" 关于")])],1)]),o("Col",{attrs:{xs:6,sm:5,md:4,lg:2,xl:3}},[o("div",{staticClass:"auth"},[t.userinfo.token?[o("Dropdown",{attrs:{trigger:"click"}},[o("a",{attrs:{href:"javascript:void(0)"}},[o("Avatar",{attrs:{icon:"ios-person",src:t.avatar,title:t.userinfo.username}})],1),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",[o("div",{on:{click:t.logout}},[t._v("注销")])]),o("DropdownItem",[o("router-link",{attrs:{to:{name:"userindex",params:{username:t.userinfo.username}}}},[t._v("主页 ")])],1),o("DropdownItem",[o("router-link",{attrs:{to:"/settings"}},[t._v("管理")])],1),o("DropdownItem",[o("router-link",{attrs:{to:{name:"postadd"}}},[t._v("写文章")])],1),o("DropdownItem",[o("router-link",{attrs:{to:{name:"subjectmanage"}}},[t._v("写专题")])],1)],1)],1)]:[o("router-link",{attrs:{to:"/login",target:"_blank"}},[t._v(" 登录 | 注册")])]],2)])],1)],1)]):o("div",{class:{header:!0,ifShow:t.postheadershow,thidden:!t.postheadershow},attrs:{id:"show-in-post"}},[o("header",{staticClass:"p-container "},["postdetail"==this.$route.name?[t._v(" "+t._s(this.post_title)+" ")]:[o("div",[t._v(" "+t._s(t.subjectAndid.title)+" ")])]],2)])])},n=[],s=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),i=r("2f62");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"Header",inject:["reload"],data:function(){return{droplist:[{title:"首页",url:"/",divided:!1},{title:"归档",url:"/archive",divided:!1},{title:"专题",url:"/topic",divided:!1},{title:"问题",url:"/question",divided:!1},{title:"算法",url:"/algorithm",divided:!0}],indexshow:"首页",backFlag:!0,ifshow:!0,cindex:0,scrollB:0,scrollA:0}},computed:c({avatar:function(){if(this.userinfo)return"https://zhaoheping.com"+this.userinfo.avatar},postheadershow:function(){return"postdetail"==this.$route.name||"subjectcontent"==this.$route.name?(this.ifshow=!1,this.ifshow):(this.ifshow=!0,this.ifshow)}},Object(i["e"])(["can_scroll","userinfo","post_title","subjectAndid"]),{search_arg:{get:function(){return this.$store.state.search_arg},set:function(t){this.setsearchval(t)}}}),mounted:function(){this.can_scroll&&window.addEventListener("scroll",this.showBtn),this.setsearchkey()},destroyed:function(){window.removeEventListener("scroll",this.showBtn)},created:function(){for(var t=0;t<this.droplist.length;t++){if(this.droplist[t].url==this.$route.path)return this.cindex=t,void(this.indexshow=this.droplist[t].title);this.cindex=null}},methods:c({},Object(i["b"])(["ClearToken"]),{},Object(i["d"])(["setsearchval"]),{selectmenu:function(t){this.indexshow=t},logout:function(){this.ClearToken(),this.reload(),this.$route.meta.requireAuth&&this.$router.push({name:"index"})},changei:function(t){this.cindex=t},search:function(){this.search_arg&&("search"==this.$route.name?(this.$router.push({name:"search",query:{q:this.search_arg,type:"posts"}}),this.reload()):this.$router.push({name:"search",query:{q:this.search_arg,type:"posts"}}))},showBtn:function(){var t=this,e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollB=e,t.scrollB>300?(t.scrollA<=t.scrollB?t.backFlag=!1:t.backFlag=!0,setTimeout((function(){t.scrollA=t.scrollB}),0)):t.backFlag=!0},setsearchkey:function(){"search"!=this.$route.name&&this.setsearchval(null)}})},u=l,d=(r("24a0"),r("2877")),h=Object(d["a"])(u,o,n,!1,null,"28bac19a",null);e["default"]=h.exports},4160:function(t,e,r){"use strict";var o=r("23e7"),n=r("17c2");o({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"46ac":function(t,e,r){t.exports=r.p+"static/img/logo-xs.2c4404d7.png"},"4de4":function(t,e,r){"use strict";var o=r("23e7"),n=r("b727").filter,s=r("1dde"),i=r("ae40"),a=s("filter"),c=i("filter");o({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},8418:function(t,e,r){"use strict";var o=r("c04e"),n=r("9bf2"),s=r("5c6c");t.exports=function(t,e,r){var i=o(e);i in t?n.f(t,i,s(0,r)):t[i]=r}},"91b1":function(t,e,r){},a640:function(t,e,r){"use strict";var o=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&o((function(){r.call(null,e||function(){throw 1},1)}))}},ade3:function(t,e,r){"use strict";function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return o}))},ae40:function(t,e,r){var o=r("83ab"),n=r("d039"),s=r("5135"),i=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(s(a,t))return a[t];e||(e={});var r=[][t],l=!!s(e,"ACCESSORS")&&e.ACCESSORS,u=s(e,0)?e[0]:c,d=s(e,1)?e[1]:void 0;return a[t]=!!r&&!n((function(){if(l&&!o)return!0;var t={length:-1};l?i(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,u,d)}))}},b0c0:function(t,e,r){var o=r("83ab"),n=r("9bf2").f,s=Function.prototype,i=s.toString,a=/^\s*function ([^ (]*)/,c="name";!o||c in s||n(s,c,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(t){return""}}})},b64b:function(t,e,r){var o=r("23e7"),n=r("7b0b"),s=r("df75"),i=r("d039"),a=i((function(){s(1)}));o({target:"Object",stat:!0,forced:a},{keys:function(t){return s(n(t))}})},dbb4:function(t,e,r){var o=r("23e7"),n=r("83ab"),s=r("56ef"),i=r("fc6a"),a=r("06cf"),c=r("8418");o({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,o=i(t),n=a.f,l=s(o),u={},d=0;while(l.length>d)r=n(o,e=l[d++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var o=r("23e7"),n=r("d039"),s=r("fc6a"),i=r("06cf").f,a=r("83ab"),c=n((function(){i(1)})),l=!a||c;o({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},e669:function(t,e,r){t.exports=r.p+"static/img/logo-sm-md-lg.299f9c4d.png"}}]);