webpackJsonp([7],{"+s6m":function(e,t){},"d/gV":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l("4YfN"),o=l.n(n),i=l("2bvH"),r={name:"SubjectContent",components:{SuspensionPanel:function(){return l.e(28).then(l.bind(null,"RoCx"))}},data:function(){return{coll:!0,ifdisplay:!0,value:"# 服务器 5：【单进程异步】模型服务器 5：【单进程异步】模型服务器 5：【单进程异步】模型\n\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n本小节我们开始讲 RPC 的异步模型。异步模型是现代服务器的通用模型，它比古典的同步模型在效率上要高出一大截，但是编程难度上也要加大不少，需要程序员有较高的编程素养。关于如何应用异步模型，我们需要要先从非阻塞 IO 开始讲起，逐步理解基本原理和必备的工具和库之后，再用代码实现。\n\n## 非阻塞 IO\n\n操作系统提供的文件读写操作默认都是同步的，它必须等到数据就绪后才能返回，如果数据没有就绪，它就会阻塞当前的线程，其它的事什么都干不了，这是对操作系统线程资源的一种浪费。\n\n为了解决这个问题，操作系统给文件读写提供了非阻塞选项。当我们读写文件时，提供一个 O\\_NONBLOCK 选项，读写操作就不会阻塞。\n\n内核套接字的 ReadBuffer 有多少字节，read 操作就返回多少字节。内核套接字的 WriteBuffer 有多少剩余字节空间，write 操作就写多少字节。我们通过读写的返回值就可以知道读写了多少数据。接下来线程就可以继续干别的事去了，稍后再继续进行读写。\n\n```py\nsocket = socket.socket()\nsocket.setblocking(0)  # 开启非阻塞模式\nsocket.read()  # 有多少读多少\nsocket.write()  # 能写多少是多少\n\n```\n\n## 事件轮询"}},created:function(){this.SetSubject({title:this.$route.params.title,id:this.$route.params.id})},computed:o()({},Object(i.d)({can_scroll:"can_scroll",collAndshadow:"collAndshadow"})),methods:o()({},Object(i.b)(["SetSubject","setcollAndshadow"]),{fn1:function(){alert(1)}})},a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"commonpositiontop scindex"},[l("div",{attrs:{id:"chaptersummary"}},[l("Card",{style:{"margin-left":e.collAndshadow?"-320px":0}},[l("Timeline",[l("TimelineItem",{attrs:{color:"green"}},[e._v("发布1.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布2.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"red"}},[e._v("严重故障")]),e._v(" "),l("TimelineItem",{attrs:{color:"blue"}},[e._v("发布3.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布1.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布2.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"red"}},[e._v("严重故障")]),e._v(" "),l("TimelineItem",{attrs:{color:"blue"}},[e._v("发布3.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布1.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布2.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"red"}},[e._v("严重故障")]),e._v(" "),l("TimelineItem",{attrs:{color:"blue"}},[e._v("发布3.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布1.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布2.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"red"}},[e._v("严重故障")]),e._v(" "),l("TimelineItem",{attrs:{color:"blue"}},[e._v("发布3.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布1.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布2.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"red"}},[e._v("严重故障")]),e._v(" "),l("TimelineItem",{attrs:{color:"blue"}},[e._v("发布3.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布1.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"green"}},[e._v("发布2.0版本")]),e._v(" "),l("TimelineItem",{attrs:{color:"red"}},[e._v("严重故障")]),e._v(" "),l("TimelineItem",{attrs:{color:"blue"}},[e._v("发布3.0版本")])],1)],1)],1),e._v(" "),l("Row",[l("Col",{attrs:{xs:0,sm:0,md:24,lg:24}},[l("div",{staticClass:"chaptercontent",style:{"margin-left":e.collAndshadow?"0":"320px"}},[l("Card",[l("h3",{staticStyle:{"text-align":"center"}},[e._v("postdetail.title")]),e._v(" "),l("mavon-editor",{ref:"md",attrs:{codeStyle:"monokai",boxShadow:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)]),e._v(" "),l("Col",{attrs:{xs:24,sm:24,md:0,lg:0}},[l("div",{staticClass:"chaptercontent"},[l("Card",[l("h3",{staticStyle:{"text-align":"center"}},[e._v("postdetail.titlepostdetail.titlepostdetail.title\n          postdetail.titlepostdetail.titlepostdetail.titlepostdetail.title")]),e._v(" "),l("mavon-editor",{ref:"md",attrs:{codeStyle:"monokai",boxShadow:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)])],1),e._v(" "),l("div",{class:{shadow:!0,ifdisplay:e.collAndshadow},on:{click:e.setcollAndshadow}}),e._v(" "),l("SuspensionPanel")],1)},staticRenderFns:[]};var s=l("C7Lr")(r,a,!1,function(e){l("+s6m")},"data-v-bcdfbf8c",null);t.default=s.exports}});