webpackJsonp([22],{KwYi:function(s,e){},c0mh:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("P9l9"),o=(t("Muz9"),{name:"Login",inject:["reload"],data:function(){var s=this;return{err:"",isDisable:!1,ifshow:!1,userinfo:{username:"",password:""},reguserinfo:{username:"",password:"",re_password:""},ruleInline:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],re_password:[{validator:function(e,t,r){""===t?r(new Error("请确认密码")):t!==s.reguserinfo.password?r(new Error("输入不一致")):r()},trigger:"blur"}]}}},computed:{host:function(){return"https://zhaoheping.com/login/"}},mounted:function(){this.$store.state.userinfo.token&&this.$router.push({name:"index"})},methods:{signUp:function(){this.ifshow=!this.ifshow},signIn:function(){this.ifshow=!this.ifshow},Signin:function(){var s=this;this.isDisable=!0,setTimeout(function(){s.isDisable=!1},1500),this.$refs.RegformInline.validate(function(e){e?Object(r.B)({username:s.reguserinfo.username,password:s.reguserinfo.re_password}).then(function(e){s.$Message.info({content:"用户>"+s.reguserinfo.username+"<注册成功,将在1s返回登录页面",duration:1,closable:!0,top:200}),s.isDisable=!0,setTimeout(function(){s.reload()},800)}).catch(function(e){var t=e.response.data.username||e.response.data.password;s.$Message.error(t[0])}):s.$Message.error("请检查输入")})},Login:function(){var s=this;this.isDisable=!0,setTimeout(function(){s.isDisable=!1},1e3),this.$refs.formInline.validate(function(e){e?Object(r.z)(s.userinfo).then(function(e){s.$Message.info({content:"登录成功",duration:1,closable:!0,top:200}),s.$store.dispatch("SaveToken",{token:e.data.token,username:e.data.username,avatar:e.data.avatar,id:e.data.user_id});var t=s.$route.query.backurl;t?s.$router.push({path:t}):s.$router.push({path:"/"})}).catch(function(e){s.$Message.error("用户名或密码错误"),s.error="用户名或密码错误"}):s.$Message.error("请检查输入")})}}}),n={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"authen"},[t("Row",[t("Col",{attrs:{xs:0,sm:0,md:0,lg:24}},[t("div",{class:{container:!0,"right-panel-active":s.ifshow},attrs:{id:"container"}},[t("div",{staticClass:"form-container sign-up-container"},[t("div",{staticClass:"inputform"},[t("h1",[s._v("注册")]),s._v(" "),t("div",{staticClass:"social-container"},[t("a",{attrs:{href:s.host+"qq"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-qq",size:20}})],1),s._v(" "),t("a",{attrs:{href:s.host+"weixin"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weixin",size:20}})],1),s._v(" "),t("a",{attrs:{href:s.host+"weibo"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weibo1",size:20}})],1)]),s._v(" "),t("Form",{ref:"RegformInline",attrs:{model:s.reguserinfo,rules:s.ruleInline}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:s.reguserinfo.username,callback:function(e){s.$set(s.reguserinfo,"username",e)},expression:"reguserinfo.username"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),s._v(" "),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"输入密码"},model:{value:s.reguserinfo.password,callback:function(e){s.$set(s.reguserinfo,"password",e)},expression:"reguserinfo.password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),s._v(" "),t("FormItem",{attrs:{prop:"re_password"}},[t("Input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:s.reguserinfo.re_password,callback:function(e){s.$set(s.reguserinfo,"re_password",e)},expression:"reguserinfo.re_password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),s._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary",disabled:s.isDisable},on:{click:s.Signin}},[s._v("注册")])],1)],1)],1)]),s._v(" "),t("div",{staticClass:"form-container sign-in-container"},[t("div",{staticClass:"inputform"},[t("h1",[s._v("登录")]),s._v(" "),t("div",{staticClass:"social-container"},[t("a",{attrs:{href:s.host+"qq"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-qq",size:20}})],1),s._v(" "),t("a",{attrs:{href:s.host+"weixin"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weixin",size:20}})],1),s._v(" "),t("a",{attrs:{href:s.host+"weibo"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weibo1",size:20}})],1)]),s._v(" "),t("span",{staticStyle:{"margin-bottom":"20px"}},[s._v("第三方账号登录")]),s._v(" "),t("Form",{ref:"formInline",attrs:{model:s.userinfo,rules:s.ruleInline}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:s.userinfo.username,callback:function(e){s.$set(s.userinfo,"username",e)},expression:"userinfo.username"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),s._v(" "),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:s.userinfo.password,callback:function(e){s.$set(s.userinfo,"password",e)},expression:"userinfo.password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),s._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary",disabled:s.isDisable},on:{click:function(e){return s.Login("formInline")}}},[s._v("登录")])],1),s._v(" "),t("a",{attrs:{href:"#"}},[s._v("忘记密码？")])],1)],1)]),s._v(" "),t("div",{staticClass:"overlay-container"},[t("div",{staticClass:"overlay"},[t("div",{staticClass:"overlay-panel overlay-left"},[t("h1",[s._v("欢迎回来！")]),s._v(" "),t("p",[s._v("请您先登录的个人信息，进行操作。")]),s._v(" "),t("button",{staticClass:"ghost",attrs:{id:"signIn"},on:{click:s.signIn}},[s._v("登录")])]),s._v(" "),t("div",{staticClass:"overlay-panel overlay-right"},[t("h1",[s._v("你好朋友！")]),s._v(" "),t("p",[s._v("输入您的个人信息注册账号。")]),s._v(" "),t("button",{staticClass:"ghost",attrs:{id:"signUp"},on:{click:s.signUp}},[s._v("注册")])])])])])]),s._v(" "),t("Col",{attrs:{xs:24,sm:24,md:24,lg:0}},[t("div",{attrs:{id:"m-log"}},[t("Card",[t("div",{staticClass:"social-container"},[t("a",{attrs:{href:s.host+"qq"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-qq",size:20}})],1),s._v(" "),t("a",{attrs:{href:s.host+"weixin"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weixin",size:20}})],1),s._v(" "),t("a",{attrs:{href:s.host+"weibo"}},[t("Icon",{staticClass:"shareicon",attrs:{custom:"icofont icon-weibo1",size:20}})],1)]),s._v(" "),t("Form",{ref:"formInline",attrs:{model:s.userinfo,rules:s.ruleInline}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:s.userinfo.username,callback:function(e){s.$set(s.userinfo,"username",e)},expression:"userinfo.username"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),s._v(" "),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:s.userinfo.password,callback:function(e){s.$set(s.userinfo,"password",e)},expression:"userinfo.password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),s._v(" "),t("FormItem",{staticStyle:{"text-align":"center"}},[t("Button",{attrs:{type:"primary",disabled:s.isDisable},on:{click:function(e){return s.Login("formInline")}}},[s._v("登录")])],1)],1)],1)],1)])],1)],1)},staticRenderFns:[]};var a=t("C7Lr")(o,n,!1,function(s){t("KwYi")},"data-v-25e7ce66",null);e.default=a.exports}});