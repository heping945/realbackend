webpackJsonp([5],{W327:function(t,s){},X0dh:function(t,s,e){t.exports=e.p+"static/img/logo-sm-md-lg.b02325e.png"},a4KA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=e("4YfN"),i=e.n(r),o=e("2bvH"),a=e("22O3"),n={name:"Header",inject:["reload"],data:function(){return{droplist:[{title:"首页",url:"/",divided:!1},{title:"文章",url:"/post",divided:!1},{title:"分类",url:"/category",divided:!1},{title:"专题",url:"/subject",divided:!1},{title:"系统设计",url:"/design",divided:!0}],search_arg:"",indexshow:"首页",backFlag:!0,ifshow:!0,cindex:0,scrollB:0,scrollA:0}},computed:i()({avatar:function(){if(this.$store.state.userinfo){return"http://106.14.176.87:8000"+this.$store.state.userinfo.avatar}},postheadershow:function(){return"postdetail"==this.$route.name?(this.ifshow=!1,this.ifshow):(this.ifshow=!0,this.ifshow)}},Object(o.d)({can_scroll:"can_scroll"})),mounted:function(){this.can_scroll&&window.addEventListener("scroll",this.showBtn),this.setsearchkey()},destroyed:function(){window.removeEventListener("scroll",this.showBtn)},created:function(){for(var t=0;t<this.droplist.length;t++){if(this.droplist[t].url==this.$route.path)return this.cindex=t,void(this.indexshow=this.droplist[t].title);this.cindex=null}},methods:i()({},Object(o.b)(["ClearToken"]),{selectmenu:function(t){this.indexshow=t},logout:function(){this.ClearToken(),this.$route.meta.requireAuth&&this.$router.push({name:"index"})},changei:function(t){this.cindex=t},search:function(){this.search_arg?(a.a.set("searcharg",this.search_arg),"search"==this.$route.name?(this.$router.push({name:"search",query:{q:this.search_arg,type:"posts"}}),this.reload()):this.$router.push({name:"search",query:{q:this.search_arg,type:"posts"}})):a.a.remove("searcharg")},showBtn:function(){var t=this,s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollB=s,t.scrollB>300?(t.scrollA<=t.scrollB?t.backFlag=!1:t.backFlag=!0,setTimeout(function(){t.scrollA=t.scrollB},0)):t.backFlag=!0},setsearchkey:function(){var t=a.a.get("searcharg");return t&&"search"==this.$route.name&&(this.search_arg=t),this.search_arg}})},l={render:function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[t.backFlag?r("div",{staticClass:"header"},[r("header",{staticClass:"p-container"},[r("Row",[r("Col",{attrs:{xs:3,sm:0,md:0,lg:0}},[r("div",{staticClass:"simpleheaderlogo"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:e("ds2W"),alt:"logo",width:"30",height:"30"}})])],1)]),t._v(" "),r("Col",{attrs:{xs:0,sm:4,md:4,lg:3}},[r("div",{staticClass:"superheaderlogo"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:e("X0dh"),alt:"logo",height:"35",width:"80"}})])],1)]),t._v(" "),r("Col",{attrs:{xs:5,sm:6,md:0,lg:0}},[r("div",{staticClass:"headerdropmenu"},[r("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.selectmenu}},[r("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n                "+t._s(t.indexshow)+"\n              ")]),t._v(" "),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.droplist,function(s,e){return r("DropdownItem",{key:e,attrs:{divided:s.divided,name:s.title}},[r("router-link",{attrs:{to:s.url}},[t._v("\n                    "+t._s(s.title)+"\n                  ")])],1)}),1)],1)],1)]),t._v(" "),r("Col",{attrs:{xs:0,sm:0,md:10,lg:9}},[r("div",{staticClass:"navlist"},[r("ul",t._l(t.droplist,function(s,e){return r("li",{on:{click:function(s){return t.changei(e)}}},[r("router-link",{class:t.cindex==e?"active":"",attrs:{to:s.url}},[t._v(" "+t._s(s.title))])],1)}),0)])]),t._v(" "),r("Col",{attrs:{xs:10,sm:9,md:6,lg:8,xl:7}},[r("div",{staticClass:"header-search"},[r("Input",{attrs:{search:"",placeholder:"搜索本站...",maxlength:24},on:{"on-search":t.search},model:{value:t.search_arg,callback:function(s){t.search_arg=s},expression:"search_arg"}})],1)]),t._v(" "),r("Col",{attrs:{xs:0,sm:0,md:0,lg:2,xl:2}},[r("div",{staticClass:"about"},[t._v("\n            关于\n          ")])]),t._v(" "),r("Col",{attrs:{xs:6,sm:5,md:4,lg:2,xl:3}},[r("div",{staticClass:"auth"},[this.$store.state.userinfo.token?[r("Dropdown",{attrs:{trigger:"click"}},[r("a",{attrs:{href:"javascript:void(0)"}},[r("Avatar",{attrs:{icon:"ios-person",src:t.avatar}})],1),t._v(" "),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",[r("div",{on:{click:t.logout}},[t._v("注销")])]),t._v(" "),r("DropdownItem",[r("router-link",{attrs:{to:{name:"userindex",params:{username:t.$store.state.userinfo.username}}}},[t._v("主页\n                    ")])],1),t._v(" "),r("DropdownItem",[r("router-link",{attrs:{to:"/settings"}},[t._v("管理")])],1),t._v(" "),r("DropdownItem",[r("router-link",{attrs:{to:{name:"postadd"}}},[t._v("写文章")])],1)],1)],1)]:[r("router-link",{attrs:{to:"/login",target:"_blank"}},[t._v(" 登录 | 注册")])]],2)])],1)],1)]):r("div",{class:{header:!0,ifshow:t.postheadershow},attrs:{id:"show-in-post"}},[r("header",{staticClass:"p-container"},[t._v("\n      "+t._s(this.$store.state.post_title)+"\n    ")])])])},staticRenderFns:[]};var c=e("C7Lr")(n,l,!1,function(t){e("W327")},"data-v-ed31b0bc",null);s.default=c.exports},ds2W:function(t,s,e){t.exports=e.p+"static/img/logo-xs.3b62fe6.png"}});