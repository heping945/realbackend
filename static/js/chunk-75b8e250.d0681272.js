(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75b8e250"],{"586b":function(t,e,o){"use strict";var s=o("5abb"),n=o.n(s);n.a},"5abb":function(t,e,o){},"69d7":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"article-suspended-panel"},[o("ul",[o("li",{class:1==t.votestate?"vote":2==t.votestate?"dislike":"",attrs:{title:"双击反对"},on:{dblclick:t.fn2}},[o("Badge",{attrs:{count:t.postuc,offset:[0,0],type:t.postuc>0?"success":"normal"}},[o("Icon",{attrs:{type:2==t.votestate?"md-thumbs-down":"md-thumbs-up"},on:{click:t.fn1}})],1)],1),o("li",{attrs:{title:"评论一下吧"}},[o("Badge",{attrs:{count:t.get_post_comment_count,offset:[0,0],type:"info"}},[o("a",{attrs:{href:"#hpcomment"}},[o("Icon",{attrs:{type:"ios-chatbubbles"}})],1)])],1),o("li",{class:t.favstate?"fav":"",attrs:{title:"收藏"},on:{click:t.favOrdisfav}},[o("Icon",{attrs:{type:"md-star"}})],1),o("div",[t._v(" 分享 ")]),o("li",[o("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-qq"}})],1),o("li",[o("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weixin"}})],1),o("li",[o("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weibo1"}})],1)])])},n=[],i=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),c=o("7424"),a=o("2f62");function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){Object(i["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var l={name:"ArticleSuspendedPanel",props:["get_post_comment_count"],data:function(){return{clicktime:null,vo:0}},computed:u({},Object(a["c"])({favstate:"favstate",votestate:"votestate"}),{},Object(a["d"])({post_title:"post_title",postuc:"postuc",userinfo:"userinfo"})),methods:u({},Object(a["b"])(["PostFavstate","PostVotestate","PostUpvoteCountOperation"]),{favOrdisfav:function(){var t=this,e=this.$route.params.id,o=this.userinfo.token;o?this.favstate?Object(c["h"])(e).then((function(e){t.$Notice.success({title:"取消收藏成功",duration:1}),t.PostFavstate(!1)})).catch((function(t){})):Object(c["a"])({post:e}).then((function(e){t.$Notice.success({title:"文章“"+t.post_title+"”收藏成功",duration:1}),t.PostFavstate(!0)})).catch((function(t){})):this.needlog()},fn1:function(){var t=this,e=this.$route.params.id,o=this.userinfo.token;this.clicktime&&(clearTimeout(this.clicktime),this.clicktime=null),this.clicktime=setTimeout((function(){o?null==t.votestate?Object(c["b"])({post:e,vote:1}).then((function(e){t.PostVotestate(1),t.PostUpvoteCountOperation(1)})).catch((function(t){})):1==t.votestate||2==t.votestate?Object(c["G"])({id:e,vote:0}).then((function(e){1==t.votestate?t.PostUpvoteCountOperation(-1):t.PostUpvoteCountOperation(1),t.PostVotestate(0)})).catch((function(t){})):Object(c["G"])({id:e,vote:1}).then((function(e){t.PostUpvoteCountOperation(1),t.PostVotestate(1)})).catch((function(t){})):t.needlog()}),400)},fn2:function(){var t=this;this.clicktime&&(clearTimeout(this.clicktime),this.clicktime=null);var e=this.$route.params.id,o=this.userinfo.token;o?null==this.votestate?Object(c["b"])({post:e,vote:2}).then((function(e){t.PostUpvoteCountOperation(-1),t.PostVotestate(2)})).catch((function(t){})):1!=this.votestate&&0!=this.votestate||Object(c["G"])({id:e,vote:2}).then((function(e){1==t.votestate?t.PostUpvoteCountOperation(-2):t.PostUpvoteCountOperation(-1),t.PostVotestate(2)})).catch((function(t){})):this.needlog()},needlog:function(){var t=this;this.$Message.error({content:"您尚未登录,将返回登录页面",duration:1}),setTimeout((function(){t.$router.push({name:"Login",query:{backurl:"post/"+t.$route.params.id}})}),300)}})},p=l,f=(o("586b"),o("2877")),h=Object(f["a"])(p,s,n,!1,null,"6ea92175",null);e["default"]=h.exports}}]);