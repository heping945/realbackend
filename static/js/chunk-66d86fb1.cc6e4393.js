(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d86fb1"],{1218:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"commentlist"}},[n("Card",{staticStyle:{background:"#fbfbfb"},attrs:{bordered:!0}},[t.can_comment?n("div",[n("div",{staticClass:"commentlist"},[n("List",{attrs:{"item-layout":"vertical"}},t._l(t.commentlist,(function(e,c){return n("ListItem",{key:e.id},[n("div",{staticClass:"maincomment"},[n("ListItemMeta",{attrs:{avatar:e.author.avatar,title:e.author.username+" ： "+e.content}}),n("CommentAction",{attrs:{item:e},on:{addcom:t.changecl,delc:t.changec2}})],1),e.sub_comments?n("div",{staticClass:"extracomment"},t._l(e.sub_comments,(function(e){return n("List",{key:e.id,attrs:{"item-layout":"vertical"}},[e.reply_to?n("ListItemMeta",{attrs:{avatar:e.author.avatar,title:e.author.username+"：@"+e.reply_to.author.username+"："+e.content}}):n("ListItemMeta",{attrs:{avatar:e.author.avatar,title:e.author.username+"："+e.content}}),n("CommentAction",{attrs:{i:e},on:{addcom:t.changecl,delc:t.changec2}})],1)})),1):t._e()])})),1)],1),n("div",{staticClass:"addcomment"},[t.commentlist.length||t.showin?t._e():[n("Alert",{nativeOn:{click:function(e){return t.fn2(e)}}},[t._v("暂无评论呢，添加一条评论吧→_→ ")])],t.showin?[n("Input",{attrs:{type:"textarea",autosize:!0,maxlength:240,clearable:"",placeholder:">__<..."},model:{value:t.newcom,callback:function(e){t.newcom="string"===typeof e?e.trim():e},expression:"newcom"}}),n("div",{staticClass:"confb"},[n("Button",{on:{click:t.canc}},[t._v("取消")]),n("Button",{attrs:{type:"success"},on:{click:t.addparcom}},[t._v("回复")])],1)]:t._e()],2)]):n("div",[n("Alert",{nativeOn:{click:function(e){return t.fn2(e)}}},[t._v("关闭评论←_←")])],1)])],1)},i=[],o=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commentaction"},[n("div",{staticClass:"infoAndaction"},[n("Row",[n("div",{staticClass:"trd"},[n("Col",{attrs:{xs:14,sm:10,md:7}},[t.i?n("span",[t._v(" "+t._s(t.i.create_time)+" ")]):t._e(),t.item?n("span",[t._v(" "+t._s(t.item.create_time)+" ")]):t._e()]),n("Col",{attrs:{xs:5,sm:4,md:3}},[n("span",{staticClass:"r"},[n("Button",{attrs:{type:"text",ghost:"",size:"small"},on:{click:t.reply}},[t._v("回复")])],1)]),n("Col",{attrs:{xs:5,sm:4,md:3}},[t.ifcandel?n("span",{staticClass:"d"},[n("Button",{attrs:{type:"text",ghost:"",size:"small"},on:{click:t.deletec}},[t._v("删除")])],1):t._e()])],1)]),t.f?n("Row",[n("Input",{attrs:{type:"textarea",autosize:!0,maxlength:240,clearable:"",placeholder:">__<..."},model:{value:t.cv,callback:function(e){t.cv="string"===typeof e?e.trim():e},expression:"cv"}}),n("div",{staticClass:"confb"},[n("Button",{on:{click:t.canc}},[t._v("取消")]),n("Button",{attrs:{type:"success"},on:{click:t.postcommentdata}},[t._v("回复")])],1)],1):t._e()],1)])},r=[],a=n("7424"),u=n("2f62");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"CommentAction",props:["item","i"],inject:["reload"],data:function(){return{f:!1,cv:"",post_id:this.$route.params.id,newaddc:{}}},computed:l({ifcandel:function(){if(this.i){if(this.i.author.username==this.userinfo.username)return!0}else if(this.item.author.username==this.userinfo.username)return!0}},Object(u["e"])({userinfo:"userinfo"})),methods:{reply:function(){this.f=!this.f},canc:function(){this.f=!1},postcommentdata:function(){var t=this;this.cv&&(this.userinfo.username?this.item?Object(a["c"])({content:this.cv,post:this.post_id,reply_to:null,parent_comment:this.item.id}).then((function(e){t.$Message.success("评论添加成功"),t.newaddc=e.data,t.$emit("addcom",t.newaddc),t.f=!1,t.cv=""})).catch((function(t){})):Object(a["c"])({content:this.cv,post:this.post_id,reply_to:this.i.id,parent_comment:this.i.parent_comment}).then((function(e){t.$Message.success("评论添加成功");var n={};n["author"]=t.i.author,n["id"]=t.i.id,t.newaddc=e.data,t.newaddc.reply_to=n,t.$emit("addcom",t.newaddc),t.f=!1,t.cv=""})).catch((function(e){t.$Message.error("发生了一个错误，将刷新页面"),setTimeout((function(){t.reload()}),1e3)})):this.tolog())},deletec:function(){var t=this,e=this.i||this.item,n=confirm("确认删除？");n&&Object(a["i"])({id:e.id}).then((function(n){t.$Message.success("评论删除成功");var c=t.i?t.i.parent_comment:t.item.parent_comment;t.$emit("delc",e.id,parseInt(c))})).catch((function(e){t.$Message.error("发生了一个错误，将刷新页面"),setTimeout((function(){t.reload()}),1e3)}))},tolog:function(){var t=this;this.$Message.error("评论请先登录"),setTimeout((function(){t.$router.push({name:"Login",query:{backurl:"post/"+t.$route.params.id}})}),1e3)}}},d=f,h=(n("6f46"),n("2877")),p=Object(h["a"])(d,s,r,!1,null,"4fcaff7b",null),v=p.exports;function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={name:"CommentList",components:{CommentAction:v},data:function(){return{newcom:"",post_id:this.$route.params.id,commentquery:{},commentlist:[],showin:!1}},computed:_({cq:function(){var t=this.$route.params.id;return this.commentquery={exist_parent_comment:2,post:t},this.commentquery}},Object(u["e"])({can_comment:"can_comment",userinfo:"userinfo"})),created:function(){this.initcommentlist()},methods:{initcommentlist:function(){var t=this;Object(a["p"])(this.cq).then((function(e){t.commentlist=e.data.results,t.commentlist.length&&(t.showin=!0)})).catch((function(e){t.$router.push({name:"notFound"})}))},changecl:function(t){var e=this.commentlist.filter((function(e){return e.id==t.parent_comment}));e[0].sub_comments.push(t)},changec2:function(t,e){if(e){var n=this.commentlist.filter((function(t){return t.id==e}));n[0].sub_comments=n[0].sub_comments.filter((function(e){return e.id!=t}))}else this.commentlist=this.commentlist.filter((function(e){return e.id!=t}))},fn2:function(){this.showin=!0},canc:function(){this.newcom=""},addparcom:function(){var t=this;this.newcom&&(this.userinfo.username?Object(a["c"])({content:this.newcom,post:this.post_id,reply_to:null,parent_comment:null}).then((function(e){t.$Message.success("评论添加成功"),t.commentlist.push(e.data),t.newcom=""})).catch((function(t){})):this.tolog())},tolog:function(){var t=this;this.$Message.error("评论请先登录"),setTimeout((function(){t.$router.push({name:"Login",query:{backurl:"post/"+t.$route.params.id}})}),1e3)}}},O=y,g=(n("5c0e"),Object(h["a"])(O,c,i,!1,null,"665c9335",null));e["default"]=g.exports},"15df":function(t,e,n){},"3c93":function(t,e,n){},"5c0e":function(t,e,n){"use strict";var c=n("15df"),i=n.n(c);i.a},"6f46":function(t,e,n){"use strict";var c=n("3c93"),i=n.n(c);i.a}}]);