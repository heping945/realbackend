webpackJsonp([9],{"0gM/":function(t,e){},xyjJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("4YfN"),i=n.n(a),s=n("2bvH"),c={name:"SettingsContent",data:function(){return{tablist:[{title:"个人资料",pathname:"settprofile"},{title:"文章管理",pathname:"settposts"},{title:"账号关联",pathname:"account"},{title:"密码修改",pathname:"password"}],cindex:0}},methods:i()({},Object(s.b)(["setcanscroll"]),{changei:function(t){this.cindex=t}})},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topfix"},[n("div",{staticClass:"p-container topixtop"},[n("ul",t._l(t.tablist,function(e,a){return n("li",{on:{click:function(e){return t.changei(a)}}},[n("router-link",{class:t.cindex==a?"active":"",attrs:{to:{name:e.pathname}}},[t._v(t._s(e.title))])],1)}),0)])]),t._v(" "),n("main",{staticClass:"p-container setmain"},[n("Row",[n("Col",{attrs:{xs:24,sm:24,md:24,lg:18}},[n("Card",[n("router-view",{attrs:{name:"settingtab"}})],1)],1)],1)],1)])},staticRenderFns:[]};var o=n("C7Lr")(c,r,!1,function(t){n("0gM/")},"data-v-79d9fddc",null);e.default=o.exports}});