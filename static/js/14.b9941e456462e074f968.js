webpackJsonp([14],{"6zAA":function(t,e){},"d/gV":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),i=a.n(n),o=a("2bvH"),s=a("P9l9"),c={name:"SubjectContent",components:{SuspensionPanel:function(){return a.e(33).then(a.bind(null,"RoCx"))}},data:function(){return{coll:!0,ifdisplay:!0,summary:[],cs:"",subject:{},chapter:{},value:"hello world"}},mounted:function(){this.$Spin.show(),this.initsubjectdetail(),this.initsubjectsummary(),this.initchapterdetail()},computed:i()({},Object(o.d)({can_scroll:"can_scroll",collAndshadow:"collAndshadow"})),methods:i()({},Object(o.b)(["SetSubject","setcollAndshadow"]),{changechapter:function(t){var e=this.$route.params.id,a=this.$route.params.title,n=document.body.offsetWidth;t!=e&&(this.$router.push({name:"subjectcontent",params:{title:a,id:t}}),this.initchapterdetail()),n<800&&this.setcollAndshadow()},initsubjectsummary:function(){var t=this,e=this.$route.params.title;Object(s.n)({topic__urltag:e}).then(function(e){t.summary=e.data.results}).catch(function(t){})},initchapterdetail:function(){var t=this,e=this.$route.params.id;Object(s.m)({id:e}).then(function(e){t.chapter=e.data,t.cs=e.data.topic.codestyle,e.data.topic.urltag==t.$route.params.title?(t.SetSubject({title:t.chapter.topic.title}),t.$Spin.hide()):(t.$Spin.hide(),t.$router.push({name:"notFound"}))}).catch(function(e){t.$Spin.hide(),t.$router.push({name:"notFound"})})},initsubjectdetail:function(){var t=this;Object(s.u)({urltag:this.$route.params.title}).then(function(e){t.subject=e.data}).catch(function(t){})}})},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commonpositiontop scindex"},[a("div",{attrs:{id:"chaptersummary"}},[a("Card",{style:{"margin-left":t.collAndshadow?"-320px":0}},[t.subject.reproduce?a("Alert",{attrs:{type:"warning","show-icon":""}},[a("b",{staticStyle:{"font-weight":"bolder",color:"indianred"}},[t._v("原载于\n          "),a("a",{attrs:{href:t.subject.reproduce_source,target:"_Blank"}},[a("Icon",{attrs:{type:"ios-undo-outline",color:"orange"}})],1),t._v(",仅供个人学习，请勿转发商用")])]):t._e(),t._v(" "),a("Timeline",t._l(t.summary,function(e){return a("TimelineItem",{key:e.id,class:{active:e.id==t.$route.params.id},attrs:{color:e.id==t.$route.params.id?"red":"green"},nativeOn:{click:function(a){return t.changechapter(e.id)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{xs:0,sm:0,md:0,lg:24}},[a("div",{staticClass:"chaptercontent",style:{"margin-left":t.collAndshadow?"0":"320px"}},[a("Card",[a("h3",[t._v(t._s(t.chapter.title))]),t._v(" "),a("mavon-editor",{ref:"md",attrs:{codeStyle:t.cs,boxShadow:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"},model:{value:t.chapter.md_body,callback:function(e){t.$set(t.chapter,"md_body",e)},expression:"chapter.md_body"}})],1)],1)]),t._v(" "),a("Col",{attrs:{xs:24,sm:24,md:24,lg:0}},[a("div",{staticClass:"chaptercontent"},[a("Card",[a("h3",[t._v("\n            "+t._s(t.chapter.title))]),t._v(" "),a("mavon-editor",{ref:"md",attrs:{codeStyle:t.cs,boxShadow:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"},model:{value:t.chapter.md_body,callback:function(e){t.$set(t.chapter,"md_body",e)},expression:"chapter.md_body"}})],1)],1)])],1),t._v(" "),a("div",{class:{shadow:!0,ifdisplay:t.collAndshadow},on:{click:t.setcollAndshadow}}),t._v(" "),a("SuspensionPanel")],1)},staticRenderFns:[]};var d=a("C7Lr")(c,r,!1,function(t){a("6zAA")},"data-v-58d40c0a",null);e.default=d.exports}});