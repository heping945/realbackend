webpackJsonp([25],{"/YzL":function(e,n){},gDR0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("P9l9"),o={name:"About",components:{SuspensionPanel:function(){return t.e(29).then(t.bind(null,"RoCx"))}},data:function(){return{value:""}},created:function(){this.initabout()},methods:{initabout:function(){var e=this,n=this.$route.params.info,t=null;switch(n){case"about":t=1;break;case"version":t=2;break;case"guide":t=3;break;case"recommend":t=4}Object(a.w)({id:t}).then(function(n){e.value=n.data.body_md}).catch(function(n){e.$router.push({name:"notFound"})})}}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",{staticClass:"p-container commonpositiontop",staticStyle:{"z-index":"200"}},[t("mavon-editor",{ref:"md",attrs:{codeStyle:"monokai",boxShadow:!1,toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),e._v(" "),t("SuspensionPanel")],1)},staticRenderFns:[]};var u=t("C7Lr")(o,i,!1,function(e){t("/YzL")},"data-v-0b7bd41c",null);n.default=u.exports}});