webpackJsonp([11],{lD4e:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("P9l9"),r={name:"UserContent",data:function(){return{userinfo:{},nodesc:"这个人很懒,什么都没有留下",headerlist:[{title:"动态",pathname:"userindex"},{title:"文章",pathname:"userposts"},{title:"赞",pathname:"account"},{title:"收藏",pathname:"password"}]}},computed:{name:function(){return this.userinfo.nickname?this.userinfo.nickname:this.userinfo.username}},mounted:function(){this.getuserinfo()},methods:{getuserinfo:function(){var t=this;Object(a.o)({username:this.$route.params.username}).then(function(e){t.userinfo=e.data,console.log(t.userinfo)}).catch(function(e){t.$router.push({name:"index"})})},toeditprofile:function(){this.$router.push({name:"settprofile"})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-container commonpositiontop",attrs:{id:"user"}},[s("Row",[s("Col",{attrs:{xs:24,sm:24,md:24,lg:18}},[s("div",{staticClass:"profile"},[s("div",{staticClass:"userprofile"},[s("Card",{attrs:{bordered:!1}},[s("Row",{attrs:{gutter:24}},[s("Col",{attrs:{xs:24,sm:5,md:5,lg:5}},[s("a",{attrs:{href:"javascript:void(0)"}},[s("Avatar",{attrs:{icon:"ios-person",src:t.userinfo.avatar}})],1)]),t._v(" "),s("Col",{attrs:{xs:24,sm:12,md:12,lg:12}},[s("Row",[s("Col",{attrs:{span:"24"}},[s("div",{staticClass:"nickname"},[t._v(t._s(t.name))])]),t._v(" "),s("Col",{attrs:{span:"24"}},[t.userinfo.desc?s("div",{staticClass:"desc"},[t._v(t._s(t.userinfo.desc))]):s("div",{staticClass:"desc"},[t._v(t._s(t.nodesc))])])],1)],1),t._v(" "),s("Col",{attrs:{xs:0,sm:7,md:7,lg:7}},[t.$route.params.username==t.$store.state.userinfo.username?s("div",{staticClass:"editprofile"},[s("Button",{attrs:{type:"text",size:"large",ghost:""},on:{click:t.toeditprofile}},[t._v("编辑资料")])],1):t._e()])],1)],1)],1),t._v(" "),s("div",{staticClass:"headerlist"},[s("Card",[s("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"space-around"}},t._l(t.headerlist,function(e,a){return s("Col",{key:a,attrs:{span:"4"}},[s("router-link",{attrs:{to:{name:e.pathname}}},[t._v(t._s(e.title))])],1)}),1)],1)],1),t._v(" "),s("div",{attrs:{id:"userdetail"}},[s("router-view",{attrs:{name:"userdetail"}})],1)])]),t._v(" "),s("Col",{attrs:{xs:0,sm:0,md:0,lg:6}},[s("Card",{attrs:{bordered:!1}},[s("div",{staticStyle:{"text-align":"center"}},[s("h3",[t._v("A high quality UI Toolkit based on Vue.js")])])])],1)],1)],1)},staticRenderFns:[]};var i=s("C7Lr")(r,n,!1,function(t){s("lh9n")},"data-v-5dcd67fe",null);e.default=i.exports},lh9n:function(t,e){}});