(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e056e6"],{6884:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"postadd",staticClass:"commonpositiontop p-container",attrs:{id:"postadd"}},[a("Row",[a("Col",{attrs:{xs:24,sm:24,md:0,lg:0}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("h3",[t._v("此设备不支持创建文章请切换大设备")]),a("br"),a("p",[a("Button",{attrs:{type:"primary"},on:{click:t.back}},[t._v("倒退")])],1)])])],1),a("Col",{attrs:{xs:0,sm:0,md:24,lg:24}},[a("Form",{ref:"post",attrs:{model:t.post,rules:t.ruleValidate}},[a("FormItem",{attrs:{prop:"title"}},[a("Input",{attrs:{placeholder:"请输入文章标题...",clearable:"",required:"",maxlength:64},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title","string"===typeof e?e.trim():e)},expression:"post.title"}})],1),a("FormItem",{attrs:{prop:"body_md"}},[a("article",[a("mavon-editor",{ref:"md",attrs:{subfield:!1,defaultOpen:t.defaultData,codeStyle:t.post.codestyle,boxShadow:!1},on:{fullScreen:t.changezindex,save:t.saveMavon,change:t.change_render_value,imgAdd:t.$imgAdd,imgDel:t.$imgDel},model:{value:t.post.body_md,callback:function(e){t.$set(t.post,"body_md",e)},expression:"post.body_md"}})],1)]),a("FormItem",{attrs:{prop:"codestyle"}},[a("Select",{attrs:{placeholder:"请选择代码风格"},model:{value:t.post.codestyle,callback:function(e){t.$set(t.post,"codestyle",e)},expression:"post.codestyle"}},t._l(t.codestylelist,(function(e,o){return a("Option",{key:o,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),a("FormItem",{attrs:{prop:"category"}},[a("Select",{attrs:{placeholder:"请选择文章分类"},model:{value:t.post.category,callback:function(e){t.$set(t.post,"category",e)},expression:"post.category"}},t._l(t.categoryList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name)+" ")])})),1)],1),a("FormItem",{attrs:{prop:"tag"}},[a("Select",{attrs:{multiple:"","max-tag-count":4,placeholder:"请选择文章标签"},model:{value:t.post.tags,callback:function(e){t.$set(t.post,"tags",e)},expression:"post.tags"}},t._l(t.tagList,(function(e){return a("Option",{key:e.value,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1),a("p",{staticStyle:{margin:"-15px 0 15px"}},[a("Button",{attrs:{long:""},on:{click:t.addtag}},[t._v("没有标签？点击增加标签")])],1),a("FormItem",{attrs:{prop:"can_comment",label:"是否开启评论"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.post.can_comment,callback:function(e){t.$set(t.post,"can_comment",e)},expression:"post.can_comment"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("On")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("Off")])])],1),a("FormItem",{attrs:{label:"是否来自转载"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.post.reproduce,callback:function(e){t.$set(t.post,"reproduce",e)},expression:"post.reproduce"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("On")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("Off")])])],1),t.post.reproduce?a("FormItem",{attrs:{prop:"url"}},[a("Input",{attrs:{type:"url",clearable:"",placeholder:"请输入转载来源地址"},model:{value:t.post.reproduce_source,callback:function(e){t.$set(t.post,"reproduce_source",e)},expression:"post.reproduce_source"}})],1):a("FormItem",{attrs:{prop:"url"}},[a("Input",{attrs:{type:"url",disabled:"",clearable:"",placeholder:"请输入转载来源地址"},model:{value:t.post.reproduce_source,callback:function(e){t.$set(t.post,"reproduce_source",e)},expression:"post.reproduce_source"}})],1),a("Button",{attrs:{type:"primary",long:"",disabled:t.isDisable},on:{click:function(e){return t.addpost("post")}}},[t._v("创建文章")])],1)],1)],1),a("SuspensionPanel")],1)},s=[],n=(a("b0c0"),a("d3b7"),a("07ac"),a("96cf"),a("1da1")),r=a("f573"),c=a("7424"),i=a("68fe"),l=function(){return a.e("chunk-64da6ede").then(a.bind(null,"1faa"))},u={name:"PostAdd",data:function(){return{isDisable:!1,defaultData:"edit",codestylelist:[],categoryList:[],tagvalue:"",tagseleted:[],tagList:[],img_file:{},post:{title:"",body:"",body_md:"",category:"",codestyle:"monokai",tags:[],reproduce:!1,reproduce_source:"",can_comment:!0},ruleValidate:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],body_md:[{required:!0,message:"正文不能为空",trigger:"blur"}],category:[{required:!0,message:"请选择分类",trigger:"change",type:"number"}]}}},components:{SuspensionPanel:l},computed:{codeStyle:function(){return r.codestyle}},created:function(){this.initcategorydata(),this.inittagdata()},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.codestylelist=t.codeStyle,a=i["a"].get("currentpost"),!a){e.next=8;break}t.post.body_md=a,e.next=9;break;case 8:return e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))()},methods:{initcategorydata:function(){var t=this;Object(c["v"])({}).then((function(e){t.categoryList=e.data.results})).catch((function(t){}))},inittagdata:function(){var t=this;Object(c["x"])({}).then((function(e){t.tagList=e.data.results})).catch((function(t){}))},addpost:function(){var t=this;this.isDisable=!0,setTimeout((function(){t.isDisable=!1}),1e3),this.$refs.post.validate((function(e){e?Object(c["e"])(t.post).then((function(e){t.$Message.info({content:"文章添加成功,1s后返回文章页面",duration:1}),t.isDisable=!0,setTimeout((function(){t.$router.push({name:"postdetail",params:{id:e.data.id}})}),1e3)})).catch((function(e){var a=e.response.data,o=Object.values(a)[0][0];t.$Message.error(o)})):t.$Message.error("请检查文章字段验证！!！")}))},$imgAdd:function(t,e){var a=this;this.img_file[t]=e;var o=new FormData;o.append("img",e),Object(c["A"])(o).then((function(e){a.$refs.md.$img2Url(t,e.data.img)})).catch((function(t){a.$Message.error("格式或类型错误，请重新上传")}))},$imgDel:function(t){delete this.img_file[t]},saveMavon:function(t,e){i["a"].set("currentpost",t),this.post.body=e,this.post.body_md=t},change_render_value:function(t,e){this.post.body=e},changezindex:function(t,e){this.$refs.postadd.style.zIndex=t?260:234},addtag:function(){var t=this;this.$Modal.confirm({render:function(e){return e("Input",{props:{value:t.tagvalue,autofocus:!0,placeholder:"请输入标签名字...",clearable:!0,required:!0,maxlength:12},on:{input:function(e){t.tagvalue=e}}})},onOk:function(){t.tagvalue?Object(c["g"])({name:t.tagvalue}).then((function(e){t.$Message.success("标签:"+e.data.name+"创建成功"),t.tagList.unshift(e.data)})).catch((function(e){t.$Message.error(e.response.data.name[0])})):t.$Message.warning("输入内容不可为空")},onCancel:function(){}})},back:function(){window.history.back()}}},d=u,p=(a("928e"),a("2877")),m=Object(p["a"])(d,o,s,!1,null,"6957d1dd",null);e["default"]=m.exports},"839f":function(t,e,a){},"928e":function(t,e,a){"use strict";var o=a("839f"),s=a.n(o);s.a}}]);