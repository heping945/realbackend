webpackJsonp([15],{VPRe:function(e,t){},XSUs:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("P9l9"),n={name:"FeedBack",data:function(){return{messagetype:[{id:1,typevalue:"留言"},{id:2,typevalue:"bug提交"},{id:3,typevalue:"反馈"}],selectedtype:null,mesv:"",subj:""}},methods:{sendmes:function(){var e=this;this.$store.state.userinfo.username?this.selectedtype&&this.mesv&&this.subj?Object(a.d)({message_type:this.selectedtype,subject:this.subj,content:this.mesv}).then(function(t){e.$Message.success("您的反馈已收到，将尽快处理，谢谢←_←")}).catch(function(e){}):this.$Message.warning("无效输入，请检查"):(this.$Message.warning("请先登录"),setTimeout(function(){e.$router.push({name:"Login",query:{backurl:"/feedback"}})},1e3))}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"feedback"}},[s("Card",{staticStyle:{width:"90%","min-height":"500px","max-width":"600px"},attrs:{shadow:!0}},[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"md-happy"}}),e._v("\n      反馈建议\n    ")],1),e._v(" "),s("Select",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{placeholder:"请选择留言类型，非常感谢您的意见,将尽快反馈"},model:{value:e.selectedtype,callback:function(t){e.selectedtype=t},expression:"selectedtype"}},e._l(e.messagetype,function(t){return s("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.typevalue))])}),1),e._v(" "),s("Input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请输入标题...",maxlength:32},model:{value:e.subj,callback:function(t){e.subj="string"==typeof t?t.trim():t},expression:"subj"}}),e._v(" "),s("Input",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"textarea",autosize:{minRows:6,maxRows:12},placeholder:"请输入建议反馈...",maxlength:256},model:{value:e.mesv,callback:function(t){e.mesv="string"==typeof t?t.trim():t},expression:"mesv"}}),e._v(" "),s("Button",{attrs:{type:"success",long:"",icon:"md-checkmark-circle-outline"},on:{click:e.sendmes}},[e._v("SUBMIT")])],1)],1)},staticRenderFns:[]};var c=s("C7Lr")(n,i,!1,function(e){s("VPRe")},"data-v-4b7348d0",null);t.default=c.exports}});