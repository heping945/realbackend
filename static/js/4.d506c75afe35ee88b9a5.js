webpackJsonp([4],{"/9Ha":function(t,e){},"8tQ/":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("HzJ8"),s=o.n(a),r=o("lC5x"),n=o.n(r),i=o("J0Oq"),c=o.n(i),l=o("RoCx"),u=o("P9l9"),d=o("N0tT"),p=o("Muz9"),m=o.n(p),f={name:"PostEdit",data:function(){return{defaultData:"edit",isDisable:!1,codestylelist:[],postdatail:{},categoryList:[],author:"",category:[],tagvalue:"",tagseleted:[],tagList:[],tag:[],img_file:{},post:{title:"",body:"",body_md:"",category:"",codestyle:"",tags:[],reproduce:!1,reproduce_source:"",can_comment:!0},ruleValidate:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],body_md:[{required:!0,message:"正文不能为空",trigger:"blur"}]},ifauthor:!1}},components:{SuspensionPanel:l.a},computed:{transdatapost:function(){return this.post.id=this.$route.params.id,this.post.category=this.category.id,this.post.tags=this.tagseleted,this.post.reproduce||(this.post.reproduce_source=null),this.post}},created:function(){var t=this;return c()(n.a.mark(function e(){var o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("../../../static/codestyle.json");case 2:o=e.sent,t.initpostdata(),t.initcategorydata(),t.inittagdata(),t.codestylelist=o.data.codestyle;case 7:case"end":return e.stop()}},e,t)}))()},methods:{initpostdata:function(){var t=this;Object(u.d)({id:this.$route.params.id}).then(function(e){console.log("res",e),t.postdatail=e.data,t.author=t.postdatail.author.username,t.verifyauth(),t.post.body=t.postdatail.body,t.post.body_md=t.postdatail.body_md,t.post.title=t.postdatail.title,t.post.codestyle=t.postdatail.codestyle,t.category=t.postdatail.category;var o=[],a=!0,r=!1,n=void 0;try{for(var i,c=s()(t.postdatail.tags);!(a=(i=c.next()).done);a=!0){var l=i.value;o.push(l.id)}}catch(t){r=!0,n=t}finally{try{!a&&c.return&&c.return()}finally{if(r)throw n}}t.tagseleted=o,t.post.reproduce=t.postdatail.reproduce,t.post.reproduce_source=t.postdatail.reproduce_source,t.post.can_comment=t.postdatail.can_comment,console.log("hwllo wolel",t.post)}).catch(function(e){t.$router.push({name:"index"})})},initcategorydata:function(){var t=this;Object(u.e)({}).then(function(e){t.categoryList=e.data.results,console.log("this.categoryList---\x3e",t.categoryList)}).catch(function(t){console.log(t)})},inittagdata:function(){var t=this;Object(u.f)({}).then(function(e){t.tagList=e.data.results,console.log(e)}).catch(function(t){console.log(t)})},verifyauth:function(){var t=this.author;d.a.ifCurrentUser(t)||this.$router.push({name:"index"})},$imgAdd:function(t, e){var o=this;this.img_file[t]=e;var a=new FormData;a.append("img",e),Object(u.h)(a).then(function(e){o.$refs.md.$img2Url(t,e.data.img)}).catch(function(t){alert(2)})},$imgDel:function(t){delete this.img_file[t]},updatepost:function(){var t=this;this.$refs.post.validate(function(e){e?(console.log("现在的数据",t.transdatapost),Object(u.j)(t.transdatapost).then(function(e){console.log("res----------------",e),t.$Message.info({content:"文章更新成功,3s后返回文章页面",duration:3}),t.isDisable=!0,setTimeout(function(){t.$router.push({name:"postdetail",params:{id:e.data.id}})},3e3)}).catch(function(e){console.log(e.response),console.log(t.post),alert("errors")})):t.$Message.error("请检查文章字段验证！!！")})},saveMavon:function(t,e){storage.set("currentpost",t);var o=storage.get("currentpost");console.log(o),this.post.body=e,this.post.body_md=t},change_render_value:function(t,e){this.post.body=e},back:function(){window.history.back()},changezindex:function(t,e){this.$refs.postedit.style.zIndex=t?260:234},addtag:function(){var t=this;this.$Modal.confirm({render:function(e){return e("Input",{props:{value:t.tagvalue,autofocus:!0,placeholder:"请输入标签名字...",clearable:!0,required:!0,maxlength:12},on:{input:function(e){t.tagvalue=e}}})},onOk:function(){t.tagvalue?(t.$Message.info("Clicked ok"),alert(t.tagvalue),Object(u.b)({name:t.tagvalue}).then(function(e){t.$Message.success("标签:"+e.data.name+"创建成功"),t.tagList.push(e.data)}).catch(function(e){t.$Message.error(e.response.data.name[0])})):t.$Message.warning("输入内容不可为空")},onCancel:function(){}})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"postedit",staticClass:"commonpositiontop p-container",attrs:{id:"postedit"}},[a("Row",[a("Col",{attrs:{xs:24,sm:24,md:0,lg:0}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[a("h3",{staticStyle:{"font-size":"2rem"}},[t._v("此设备不支持编辑文章请更换大设备")]),t._v(" "),a("br"),t._v(" "),a("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:o("jDCx"),alt:"皮卡丘"}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("p",[a("Button",{attrs:{type:"primary"},on:{click:t.back}},[t._v("倒退")])],1)])])],1),t._v(" "),a("Col",{attrs:{xs:0,sm:0,md:24,lg:24}},[a("Form",{ref:"post",attrs:{model:t.post,rules:t.ruleValidate}},[a("FormItem",{attrs:{prop:"title"}},[a("Input",{attrs:{placeholder:"请输入文章标题...",clearable:"",required:"",maxlength:64},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title","string"==typeof e?e.trim():e)},expression:"post.title"}})],1),t._v(" "),a("FormItem",{attrs:{prop:"body_md"}},[a("article",[a("mavon-editor",{ref:"md",attrs:{fontSize:"18px",codeStyle:t.post.codestyle,boxShadow:!1,tabSize:4},on:{fullScreen:t.changezindex,change:t.change_render_value,imgAdd:t.$imgAdd,imgDel:t.$imgDel},model:{value:t.post.body_md,callback:function(e){t.$set(t.post,"body_md",e)},expression:"post.body_md"}})],1)]),t._v(" "),a("FormItem",{attrs:{prop:"codestyle"}},[a("Select",{attrs:{placeholder:"请选择代码风格"},model:{value:t.post.codestyle,callback:function(e){t.$set(t.post,"codestyle",e)},expression:"post.codestyle"}},t._l(t.codestylelist,function(e,o){return a("Option",{key:o,attrs:{value:e}},[t._v(t._s(e))])}),1)],1),t._v(" "),a("FormItem",{attrs:{prop:"category"}},[a("Select",{attrs:{placeholder:"请选择文章分类"},model:{value:t.category.id,callback:function(e){t.$set(t.category,"id",e)},expression:"category.id"}},t._l(t.categoryList,function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1),t._v(" "),a("FormItem",{attrs:{prop:"tag"}},[a("Select",{attrs:{multiple:"","max-tag-count":4,placeholder:"请选择文章标签"},model:{value:t.tagseleted,callback:function(e){t.tagseleted=e},expression:"tagseleted"}},t._l(t.tagList,function(e){return a("Option",{key:e.value,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1),t._v(" "),a("p",{staticStyle:{margin:"-15px 0 15px"}},[a("Button",{attrs:{long:""},on:{click:t.addtag}},[t._v("没有标签？点击增加标签")])],1),t._v(" "),a("FormItem",{attrs:{prop:"can_comment",label:"是否开启评论"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.post.can_comment,callback:function(e){t.$set(t.post,"can_comment",e)},expression:"post.can_comment"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("On")]),t._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("Off")])])],1),t._v(" "),a("FormItem",{attrs:{label:"是否来自转载"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.post.reproduce,callback:function(e){t.$set(t.post,"reproduce",e)},expression:"post.reproduce"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("On")]),t._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("Off")])])],1),t._v(" "),t.post.reproduce?a("FormItem",{attrs:{prop:"url"}},[a("Input",{attrs:{type:"url",clearable:"",placeholder:"请输入转载来源地址"},model:{value:t.post.reproduce_source,callback:function(e){t.$set(t.post,"reproduce_source",e)},expression:"post.reproduce_source"}},[t._v("\n            "+t._s(t.post.reproduce_source)+"\n          ")])],1):a("FormItem",{attrs:{prop:"url"}},[a("Input",{attrs:{type:"url",disabled:"",clearable:"",placeholder:"请输入转载来源地址"},model:{value:t.post.reproduce_source,callback:function(e){t.$set(t.post,"reproduce_source",e)},expression:"post.reproduce_source"}})],1),t._v(" "),a("Button",{attrs:{type:"primary",long:"",disabled:t.isDisable},on:{click:function(e){return t.updatepost("post")}}},[t._v("更新文章")])],1)],1)],1),t._v(" "),a("SuspensionPanel")],1)},staticRenderFns:[]};var v=o("C7Lr")(f,g,!1,function(t){o("/9Ha")},"data-v-33930be2",null);e.default=v.exports},HzJ8:function(t,e,o){t.exports={default:o("l+I1"),__esModule:!0}},N0tT:function(t,e,o){"use strict";o("wtEF");var a=o("NHnr"),s=o("2fY5"),r=(o.n(s),{ifLogin:function(){return!!a.default.$store.state.userinfo.username},ifCurrentUser:function(t){return!!this.ifLogin()&&(t==a.default.$store.state.userinfo.username||void 0)}});e.a=r},jDCx:function(t,e,o){t.exports=o.p+"static/img/pikapi.c11d4b5.gif"},"l+I1":function(t,e,o){o("SXOF"),o("mxCW"),t.exports=o("o6D2")},o6D2:function(t,e,o){var a=o("fRqy"),s=o("d+Iz");t.exports=o("Rv9F").getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}}});
//# sourceMappingURL=4.d506c75afe35ee88b9a5.js.map