webpackJsonp([24],{"+NJx":function(t,e){},Ni1P:function(t,e){},gcue:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("4YfN"),i=n.n(s),c=n("P9l9"),a={name:"CommentAction",props:["item","i"],inject:["reload"],data:function(){return{f:!1,cv:"",post_id:this.$route.params.id,cuser:this.$store.state.userinfo.username,newaddc:{}}},computed:{ifcandel:function(){if(this.i){if(this.i.author.username==this.cuser)return!0}else if(this.item.author.username==this.cuser)return!0}},methods:{reply:function(){this.f=!this.f},canc:function(){this.f=!1},postcommentdata:function(){var t=this;this.cv&&(this.$store.state.userinfo.username?this.item?Object(c.c)({content:this.cv,post:this.post_id,reply_to:null,parent_comment:this.item.id}).then(function(e){t.$Message.success("评论添加成功"),t.newaddc=e.data,t.$emit("addcom",t.newaddc),t.f=!1,t.cv=""}).catch(function(t){}):Object(c.c)({content:this.cv,post:this.post_id,reply_to:this.i.id,parent_comment:this.i.parent_comment}).then(function(e){t.$Message.success("评论添加成功");var n={};n.author=t.i.author,n.id=t.i.id,t.newaddc=e.data,t.newaddc.reply_to=n,t.$emit("addcom",t.newaddc),t.f=!1,t.cv=""}).catch(function(e){t.$Message.error("发生了一个错误，将刷新页面"),setTimeout(function(){t.reload()},1e3)}):this.tolog())},deletec:function(){var t=this,e=this.i||this.item;confirm("确认删除？")&&Object(c.g)({id:e.id}).then(function(n){t.$Message.success("评论删除成功");var s=t.i?t.i.parent_comment:t.item.parent_comment;t.$emit("delc",e.id,parseInt(s))}).catch(function(e){t.$Message.error("发生了一个错误，将刷新页面"),setTimeout(function(){t.reload()},1e3)})},tolog:function(){var t=this;this.$Message.error("评论请先登录"),setTimeout(function(){t.$router.push({name:"Login",query:{backurl:"post/"+t.$route.params.id}})},1e3)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commentaction"},[n("div",{staticClass:"infoAndaction"},[n("Row",[n("div",{staticClass:"trd"},[n("Col",{attrs:{xs:14,sm:10,md:7}},[t.i?n("span",[t._v("\n      "+t._s(t.i.create_time)+"\n      ")]):t._e(),t._v(" "),t.item?n("span",[t._v("\n      "+t._s(t.item.create_time)+"\n       ")]):t._e()]),t._v(" "),n("Col",{attrs:{xs:5,sm:4,md:3}},[n("span",{staticClass:"r"},[n("Button",{attrs:{type:"text",ghost:"",size:"small"},on:{click:t.reply}},[t._v("回复")])],1)]),t._v(" "),n("Col",{attrs:{xs:5,sm:4,md:3}},[t.ifcandel?n("span",{staticClass:"d"},[n("Button",{attrs:{type:"text",ghost:"",size:"small"},on:{click:t.deletec}},[t._v("删除")])],1):t._e()])],1)]),t._v(" "),t.f?n("Row",[n("Input",{attrs:{type:"textarea",autosize:!0,maxlength:240,clearable:"",placeholder:">__<..."},model:{value:t.cv,callback:function(e){t.cv="string"==typeof e?e.trim():e},expression:"cv"}}),t._v(" "),n("div",{staticClass:"confb"},[n("Button",{on:{click:t.canc}},[t._v("取消")]),t._v(" "),n("Button",{attrs:{type:"success"},on:{click:t.postcommentdata}},[t._v("回复")])],1)],1):t._e()],1)])},staticRenderFns:[]};var r=n("C7Lr")(a,o,!1,function(t){n("+NJx")},"data-v-70a3ace7",null).exports,m=n("2bvH"),u={name:"CommentList",components:{CommentAction:r},data:function(){return{newcom:"",post_id:this.$route.params.id,commentquery:{},commentlist:[],showin:!1}},computed:i()({cq:function(){var t=this.$route.params.id;return this.commentquery={exist_parent_comment:2,post:t},this.commentquery}},Object(m.d)({can_comment:"can_comment"})),created:function(){this.initcommentlist()},methods:{initcommentlist:function(){var t=this;Object(c.j)(this.cq).then(function(e){t.commentlist=e.data.results,t.commentlist.length&&(t.showin=!0)}).catch(function(t){})},changecl:function(t){this.commentlist.filter(function(e){return e.id==t.parent_comment})[0].sub_comments.push(t)},changec2:function(t,e){if(e){var n=this.commentlist.filter(function(t){return t.id==e});n[0].sub_comments=n[0].sub_comments.filter(function(e){return e.id!=t})}else this.commentlist=this.commentlist.filter(function(e){return e.id!=t})},fn2:function(){this.showin=!0},canc:function(){this.newcom=""},addparcom:function(){var t=this;this.newcom&&(this.$store.state.userinfo.username?Object(c.c)({content:this.newcom,post:this.post_id,reply_to:null,parent_comment:null}).then(function(e){t.$Message.success("评论添加成功"),t.commentlist.push(e.data),t.newcom=""}).catch(function(t){}):this.tolog())},tolog:function(){var t=this;this.$Message.error("评论请先登录"),setTimeout(function(){t.$router.push({name:"Login",query:{backurl:"post/"+t.$route.params.id}})},1e3)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"commentlist"}},[n("Card",{staticStyle:{background:"#fbfbfb"},attrs:{bordered:!0}},[t.can_comment?n("div",[n("div",{staticClass:"commentlist"},[n("List",{attrs:{"item-layout":"vertical"}},t._l(t.commentlist,function(e,s){return n("ListItem",{key:e.id},[n("div",{staticClass:"maincomment"},[n("ListItemMeta",{attrs:{avatar:e.author.avatar,title:e.author.username+" ： "+e.content}}),t._v(" "),n("CommentAction",{attrs:{item:e},on:{addcom:t.changecl,delc:t.changec2}})],1),t._v(" "),e.sub_comments?n("div",{staticClass:"extracomment"},t._l(e.sub_comments,function(e){return n("List",{key:e.id,attrs:{"item-layout":"vertical"}},[e.reply_to?n("ListItemMeta",{attrs:{avatar:e.author.avatar,title:e.author.username+"：@"+e.reply_to.author.username+"："+e.content}}):n("ListItemMeta",{attrs:{avatar:e.author.avatar,title:e.author.username+"："+e.content}}),t._v(" "),n("CommentAction",{attrs:{i:e},on:{addcom:t.changecl,delc:t.changec2}})],1)}),1):t._e()])}),1)],1),t._v(" "),n("div",{staticClass:"addcomment"},[t.commentlist.length||t.showin?t._e():[n("Alert",{nativeOn:{click:function(e){return t.fn2(e)}}},[t._v("暂无评论呢，添加一条评论吧→_→\n          ")])],t._v(" "),t.showin?[n("Input",{attrs:{type:"textarea",autosize:!0,maxlength:240,clearable:"",placeholder:">__<..."},model:{value:t.newcom,callback:function(e){t.newcom="string"==typeof e?e.trim():e},expression:"newcom"}}),t._v(" "),n("div",{staticClass:"confb"},[n("Button",{on:{click:t.canc}},[t._v("取消")]),t._v(" "),n("Button",{attrs:{type:"success"},on:{click:t.addparcom}},[t._v("回复")])],1)]:t._e()],2)]):n("div",[n("Alert",{nativeOn:{click:function(e){return t.fn2(e)}}},[t._v("关闭评论←_←")])],1)])],1)},staticRenderFns:[]};var d=n("C7Lr")(u,l,!1,function(t){n("Ni1P")},"data-v-5e1e8f5c",null);e.default=d.exports}});