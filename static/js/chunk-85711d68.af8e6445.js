(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85711d68"],{"0307":function(t,e,r){},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),u=r("2d00"),o=i("species");t.exports=function(t){return u>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3b85":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"commonpositiontop p-container",staticStyle:{"z-index":"199"}},[r("Row",[r("Col",{attrs:{xs:24,sm:24,md:0,lg:0}},[r("div",{staticStyle:{"text-align":"center",padding:"100px 100px"}},[r("h3",{staticStyle:{"font-size":"2rem",color:"rebeccapurple"}},[t._v("此设备不支持编辑文章请更换大设备")])])]),r("Col",{attrs:{xs:0,sm:0,md:24,lg:24}},[r("Select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择专题标题"},on:{"on-change":t.getsubjectsummary},model:{value:t.topicselect,callback:function(e){t.topicselect=e},expression:"topicselect"}},t._l(t.subjectlist,(function(e){return r("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.title))])})),1),t.summary.length?r("Alert",{staticStyle:{"margin-top":"20px"},attrs:{type:"success"}},[r("List",t._l(t.summary,(function(e,n){return r("ListItem",{key:e.id,nativeOn:{click:function(r){return t.updatechapter(e)}}},[r("b",[t._v(t._s(n+1))]),t._v("： "),r("b",{staticStyle:{color:"#007fff"}},[t._v(t._s(e.order))]),t._v("： "),r("b",{staticStyle:{color:"rebeccapurple"}},[t._v(t._s(e.id))]),t._v("： "+t._s(e.title)+" ")])})),1)],1):t._e(),r("Alert",{staticStyle:{"margin-top":"20px"},attrs:{type:"warning"}},[t._v("权限，顺序控制请联系管理")]),r("Upload",{attrs:{action:t.url,format:["md"],data:t.uploaddata,name:"md_File",paste:!0,multiple:!0,accept:".md","on-success":t.getmd,"on-error":t.prerr,headers:t.h,"before-upload":t.validatetopic}},[r("div",{staticStyle:{padding:"10px 0"}},[r("Button",{staticStyle:{margin:"0 auto"},attrs:{icon:"ios-cloud-upload-outline",title:"只能选择md格式文件，可以多选",long:""}},[t._v("上传md文件")])],1)])],1)],1),r("Modal",{attrs:{title:"请输入更改信息","ok-text":"更新"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[r("Form",{attrs:{"label-width":50}},[r("FormItem",{attrs:{label:"标题"}},[r("Input",{attrs:{placeholder:"Enter title...",maxlength:64},model:{value:t.chaptertitle,callback:function(e){t.chaptertitle="string"===typeof e?e.trim():e},expression:"chaptertitle"}})],1),r("FormItem",{attrs:{label:"顺序"}},[r("InputNumber",{staticStyle:{width:"100%"},attrs:{max:200,min:0,placeholder:"Enter order..."},model:{value:t.chapterorder,callback:function(e){t.chapterorder=e},expression:"chapterorder"}})],1)],1)],1)],1)},i=[],u=(r("4de4"),r("c975"),r("a434"),r("7424")),o={name:"SubjectManage",data:function(){return{header:{},subjectlist:[],topicselect:"",summary:[],modal1:!1,value:"",chaptertitle:"",chapterorder:null,chapterid:null}},computed:{url:function(){var t="";return t="https://zhaoheping.com/api/v1/chapters/",t},h:function(){var t=this.$store.state.userinfo.token;if(t)return this.header["Authorization"]="JWT "+t,this.header},uploaddata:function(){var t={};return t["topic"]=this.topicselect,t}},created:function(){this.initsubjectlist()},methods:{initsubjectlist:function(){var t=this;Object(u["t"])().then((function(e){t.subjectlist=e.data.results})).catch((function(t){}))},getsubjectsummary:function(t){var e=this;Object(u["n"])({topic:t}).then((function(t){e.summary=t.data.results})).catch((function(t){}))},updatechapter:function(t){this.chaptertitle=t.title,this.chapterorder=t.order,this.chapterid=t.id,this.modal1=!0},ok:function(){var t=this;this.chaptertitle&&this.chapterorder?Object(u["D"])({id:this.chapterid,title:this.chaptertitle,order:this.chapterorder}).then((function(e){t.summary=t.summary.filter((function(e){return e.id!=t.chapterid}));var r=t.summary.filter((function(t){return t.order==e.data.order}));if(r.length){var n=r[0],i=t.summary.indexOf(n);t.summary.splice(i,0,e.data),t.$Message.success("更新成功")}else{var u=t.summary.indexOf(t.summary.filter((function(t){return t.order>e.data.order}))[0]);-1!=u?t.summary.splice(u,0,e.data):t.summary.push(e.data),t.$Message.success("更新成功")}})).catch((function(e){t.$Message.error("输入错误，请检查输入类型（order只能为正整数）")})):this.$Message.warning("无效输入，请检查")},cancel:function(){},getmd:function(t,e,r){var n=this.summary.filter((function(e){return e.id==t.id}));n.length?this.$Notice.warning({title:"请勿重复上传",duration:1}):(this.$Notice.success({title:"上传成功",duration:1}),this.summary.push(t))},prerr:function(t,e,r){this.$Message.error(e.detail)},validatetopic:function(){if(!this.topicselect)return this.$Message.warning("请选择一个专题"),!1;var t=this.$store.state.userinfo.username;return"heping"!=t?(this.$Message.error("您没有权限!!!请联系管理员开通权限"),!1):void 0}}},c=o,a=(r("d4b7"),r("2877")),s=Object(a["a"])(c,n,i,!1,null,"f5d424de",null);e["default"]=s.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,u=r("1dde"),o=r("ae40"),c=u("filter"),a=o("filter");n({target:"Array",proto:!0,forced:!c||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),u=r("b622"),o=u("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7424:function(t,e,r){"use strict";r("d3b7");var n=r("cebe"),i=r.n(n),u=r("4360"),o=i.a.create({baseURL:"https://zhaoheping.com/api/v1/",timeout:1e4});o.interceptors.request.use((function(t){var e=u["a"].state.userinfo.token;return e&&(t.headers["Authorization"]="JWT "+e),t}),(function(t){return Promise.reject(t)}));var c=o;r.d(e,"z",(function(){return a})),r.d(e,"B",(function(){return s})),r.d(e,"l",(function(){return f})),r.d(e,"p",(function(){return d})),r.d(e,"r",(function(){return l})),r.d(e,"e",(function(){return p})),r.d(e,"E",(function(){return h})),r.d(e,"v",(function(){return m})),r.d(e,"x",(function(){return g})),r.d(e,"g",(function(){return v})),r.d(e,"A",(function(){return b})),r.d(e,"y",(function(){return y})),r.d(e,"a",(function(){return x})),r.d(e,"h",(function(){return S})),r.d(e,"j",(function(){return w})),r.d(e,"C",(function(){return _})),r.d(e,"b",(function(){return O})),r.d(e,"k",(function(){return k})),r.d(e,"G",(function(){return A})),r.d(e,"o",(function(){return j})),r.d(e,"c",(function(){return C})),r.d(e,"i",(function(){return M})),r.d(e,"t",(function(){return $})),r.d(e,"u",(function(){return E})),r.d(e,"n",(function(){return z})),r.d(e,"m",(function(){return I})),r.d(e,"D",(function(){return R})),r.d(e,"d",(function(){return F})),r.d(e,"w",(function(){return J})),r.d(e,"f",(function(){return T})),r.d(e,"q",(function(){return B})),r.d(e,"s",(function(){return L})),r.d(e,"F",(function(){return N}));var a=function(t){return c.post("login/",t)},s=function(t){return c.post("users/",t)},f=function(t){return"slug"in t?c.get("/categories/"+t.slug+"/"):c.get("/categories/",t)},d=function(t){return c.get("/posts/",{params:t})},l=function(t){return c.get("/posts/"+t.id,t)},p=function(t){return c.post("/posts/",t)},h=function(t){return c.put("/posts/"+t.id+"/",t)},m=function(t){return c.get("/categories/",t)},g=function(t){return c.get("/tags/",t)},v=function(t){return c.post("/tags/",t)},b=function(t){return c.post("/postimg/",t,{headers:{"Content-Type":"multipart/form-data"}})},y=function(t){return c.get("/users/"+t.username,t)},x=function(t){return c.post("/userfavs/",t)},S=function(t){return c.delete("/userfavs/"+t+"/")},w=function(){return c.get("/userfavs/")},_=function(t){return c.get("/"+t.type+"/",{params:t.keyword})},O=function(t){return c.post("/uservote/",t)},k=function(){return c.get("/uservote/")},A=function(t){return c.put("/uservote/"+t.id+"/",t)},j=function(t){return c.get("/comments/",{params:t})},C=function(t){return c.post("/comments/",t)},M=function(t){return c.delete("/comments/"+t.id+"/",t)},$=function(t){return c.get("/topics/",{params:t})},E=function(t){return c.get("/topics/"+t.urltag,t)},z=function(t){return c.get("/chapters/",{params:t})},I=function(t){return c.get("/chapters/"+t.id,t)},R=function(t){return c.patch("/chapters/"+t.id+"/",t)},F=function(t){return c.post("/messages/",t)},J=function(t){return c.get("/info/"+t.id+"/",t)},T=function(t){return c.post("/dwz/",t)},B=function(t){return c.get("/dwz/"+t.arg,t)},L=function(t){return c.get("/users/"+t.username+"/",t)},N=function(t){return c.patch("/users/"+t.username+"/",t)}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),u=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,u(0,r)):t[o]=r}},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),u=r("a691"),o=r("50c4"),c=r("7b0b"),a=r("65f0"),s=r("8418"),f=r("1dde"),d=r("ae40"),l=f("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l||!p},{splice:function(t,e){var r,n,f,d,l,p,b=c(this),y=o(b.length),x=i(t,y),S=arguments.length;if(0===S?r=n=0:1===S?(r=0,n=y-x):(r=S-2,n=m(h(u(e),0),y-x)),y+r-n>g)throw TypeError(v);for(f=a(b,n),d=0;d<n;d++)l=x+d,l in b&&s(f,d,b[l]);if(f.length=n,r<n){for(d=x;d<y-n;d++)l=d+n,p=d+r,l in b?b[p]=b[l]:delete b[p];for(d=y;d>y-n+r;d--)delete b[d-1]}else if(r>n)for(d=y-n;d>x;d--)l=d+n-1,p=d+r-1,l in b?b[p]=b[l]:delete b[p];for(d=0;d<r;d++)b[d+x]=arguments[d+2];return b.length=y-n+r,f}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),u=r("5135"),o=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(u(c,t))return c[t];e||(e={});var r=[][t],s=!!u(e,"ACCESSORS")&&e.ACCESSORS,f=u(e,0)?e[0]:a,d=u(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(s&&!n)return!0;var t={length:-1};s?o(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,f,d)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),u=r("7b0b"),o=r("50c4"),c=r("65f0"),a=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,d=6==t,l=5==t||d;return function(p,h,m,g){for(var v,b,y=u(p),x=i(y),S=n(h,m,3),w=o(x.length),_=0,O=g||c,k=e?O(p,w):r?O(p,0):void 0;w>_;_++)if((l||_ in x)&&(v=x[_],b=S(v,_,y),t))if(e)k[_]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:a.call(k,v)}else if(f)return!1;return d?-1:s||f?f:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c975:function(t,e,r){"use strict";var n=r("23e7"),i=r("4d64").indexOf,u=r("a640"),o=r("ae40"),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,s=u("indexOf"),f=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:a||!s||!f},{indexOf:function(t){return a?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d4b7:function(t,e,r){"use strict";var n=r("0307"),i=r.n(n);i.a},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);