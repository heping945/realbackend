webpackJsonp([7],{"2F9m":function(t,e){},z6aC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("P9l9"),i=n("Muz9"),a=n.n(i),o={name:"UserPosts",data:function(){return{postlist:[],next:null}},created:function(){this.initcuruserpost()},watch:{next:function(){this.getmore()}},methods:{initcuruserpost:function(){var t=this,e=this.$route.params.username;Object(s.k)({author__username:e}).then(function(e){t.postlist=e.data.results,t.next=e.data.next,console.log(t.postlist)}).catch(function(t){console.log(t)})},getmore:function(){var t=this;this.next&&a.a.get(this.next).then(function(e){t.postlist=t.postlist.concat(e.data.results),t.next=e.data.next}).catch(function(t){console.log(t)})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{attrs:{bordered:!1}},[n("List",{attrs:{"item-layout":"vertical"}},t._l(t.postlist,function(e){return n("ListItem",{key:e.id},[n("ListItemMeta",{attrs:{title:e.title,description:e.excerpt}}),t._v("\n        "+t._s(e.content)+"\n        发布于：\n        "),n("Time",{attrs:{time:e.create_date}}),t._v("  ------------  最后一次更新：\n        "),n("Time",{attrs:{time:e.mod_date}})],1)}),1)],1)],1)},staticRenderFns:[]};var c=n("C7Lr")(o,r,!1,function(t){n("2F9m")},"data-v-98260d6c",null);e.default=c.exports}});