(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return s.p+"js/"+({collect:"collect",player:"player"}[t]||t)+"."+{collect:"364545f6",player:"d455bff6"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={collect:1,player:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({collect:"collect",player:"player"}[t]||t)+"."+{collect:"61e2f68a",player:"a21f5491"}[t]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},3321:function(t,e,n){"use strict";var a=n("509d"),o=n.n(a);o.a},"509d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"navbar"},[n("router-link",{staticClass:"link",class:{active:"/"===this.$route.path},attrs:{to:"/"}},[t._v("回首頁")]),n("router-link",{staticClass:"link",class:{active:"/collect"===this.$route.path},attrs:{to:"/collect"}},[t._v("收藏")])],1),n("keep-alive",[n("router-view",{staticStyle:{"min-height":"calc(100vh - 74px)"}})],1)],1)},r=[],i=(n("3321"),n("2877")),c={},s=Object(i["a"])(c,o,r,!1,null,"dd5f7278",null),l=s.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.infos,(function(e,a){return n("div",{key:a,staticClass:"col",on:{click:function(n){return t.watch(e)}}},[n("div",{staticClass:"box"},[n("img",{attrs:{src:e.snippet.thumbnails.standard.url}}),n("div",{staticClass:"time"},[t._v(t._s(e.contentDetails.duration))]),-1===t.collections.findIndex((function(t){return t.id===e.id}))?n("font-awesome-icon",{staticClass:"btn",attrs:{icon:["fas","folder-plus"]},on:{click:function(n){return n.stopPropagation(),t.add(e)}}}):n("font-awesome-icon",{staticClass:"btn",staticStyle:{color:"red"},attrs:{icon:["fas","folder-minus"]},on:{click:function(n){return n.stopPropagation(),t.remove(e)}}})],1),n("div",{staticClass:"title"},[t._v(t._s(e.snippet.title.length>30?e.snippet.title.slice(0,30)+"...":e.snippet.title))]),n("div",{staticClass:"text"},[t._v(t._s(e.snippet.description.length>50?e.snippet.description.slice(0,50)+"...":e.snippet.description))])])})),0),n("div",{staticClass:"row"},[n("ul",{staticClass:"pagination modal"},[n("li",[n("a",{staticClass:"prev",on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[t._v("«")])]),t._l(t.pagination,(function(e){return n("li",[n("a",{class:{active:e===t.currentPage},on:{click:function(n){return t.select(e)}}},[t._v(t._s(e))])])})),n("li",[n("a",{staticClass:"next",on:{click:function(e){return e.preventDefault(),t.next(e)}}},[t._v("»")])])],2)])])])},p=[],f=(n("a15b"),n("d81d"),n("fb6a"),n("ac1f"),n("466d"),n("b85c")),h={data:function(){return{currentPage:1,pagination:"",totalResults:"",token:""}},methods:{add:function(t){this.$store.commit("add",t)},remove:function(t){this.$store.commit("remove",t)},next:function(){this.currentPage<this.pagination&&(this.currentPage++,this.$router.push({path:this.$route.path,query:{page:this.currentPage}}))},prev:function(){this.currentPage>1&&(this.currentPage--,this.$router.push({path:this.$route.path,query:{page:this.currentPage}}))},select:function(t){t!==this.currentPage&&(this.currentPage=t,this.$router.push({path:this.$route.path,query:{page:this.currentPage}}))},getdata:function(t){var e=this;this.axios.get("https://www.googleapis.com/youtube/v3/videos",{params:{part:"snippet,contentDetails",chart:"mostPopular",maxResults:50,key:"AIzaSyBItLWYm7nMpPEY0DGGm8g9b_7E29Hr0ok",regionCode:"tw",videoCategoryId:10,pageToken:void 0===t?"":t}}).then((function(t){var n,a=Object(f["a"])(t.data.items);try{for(a.s();!(n=a.n()).done;){var o=n.value,r=o.contentDetails.duration.match(/(\d+)(?=[MHS])/gi)||[];o.contentDetails.duration=r.map((function(t){return t.length<2?"0"+t:t})).join(":")}}catch(i){a.e(i)}finally{a.f()}e.totalResults=t.data.pageInfo.totalResults,e.pagination=Math.ceil(e.totalResults/12),e.token=t.data.nextPageToken,e.$store.commit("addAllData",t.data.items),e.allvideoData.length<e.totalResults&&e.getdata(e.token)}))},watch:function(t){var e=this;this.$router.push({name:"Player",params:{id:t.id}}),this.$store.commit("activeVideo",t),this.axios.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",maxResults:4,key:"AIzaSyBItLWYm7nMpPEY0DGGm8g9b_7E29Hr0ok",regionCode:"tw",videoCategoryId:10,type:"video",relatedToVideoId:t.id}}).then((function(t){e.$store.commit("relateVideo",t.data.items)}))}},computed:{collections:function(){return this.$store.getters.collections},allvideoData:function(){return this.$store.getters.allvideoData},infos:function(){return this.allvideoData.slice(12*(this.currentPage-1),12*this.currentPage)}},mounted:function(){0===this.allvideoData.length?this.getdata(this.token):this.pagination=Math.ceil(this.allvideoData.length/12),this.currentPage=parseInt(this.$route.query.page)||1}},v=h,g=(n("86b4"),Object(i["a"])(v,d,p,!1,null,"aa53564c",null)),m=g.exports;a["a"].use(u["a"]);var y=[{path:"/",name:"Home",component:m},{path:"/collect",name:"Collect",component:function(){return n.e("collect").then(n.bind(null,"0c03"))}},{path:"/player/:id",name:"Player",component:function(){return n.e("player").then(n.bind(null,"bf5c"))}}],b=new u["a"]({routes:y}),w=b,P=(n("4de4"),n("caad"),n("2532"),n("2f62")),k=n("0e44");a["a"].use(P["a"]);var _=new P["a"].Store({state:{collections:[],allvideoData:[],activeVideo:{},relateVideo:[]},mutations:{add:function(t,e){t.collections.includes(e)||t.collections.push(e)},remove:function(t,e){t.collections=t.collections.filter((function(t){return t.id!==e.id}))},addAllData:function(t,e){var n,a=Object(f["a"])(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;t.allvideoData.push(o)}}catch(r){a.e(r)}finally{a.f()}},activeVideo:function(t,e){t.activeVideo=e},relateVideo:function(t,e){t.relateVideo=e}},getters:{collections:function(t){return t.collections},allvideoData:function(t){return t.allvideoData},activeVideo:function(t){return t.activeVideo},relateVideo:function(t){return t.relateVideo}},actions:{},modules:{},plugins:[Object(k["a"])()]}),C=n("bc3a"),D=n.n(C),x=n("a7fe"),$=n.n(x),j=n("f0e2"),O=(n("4bcc"),n("ecee")),E=n("ad3d"),S=n("c074");a["a"].prototype.$video=j["a"],O["c"].add(S["b"],S["a"]),a["a"].component("font-awesome-icon",E["a"]),a["a"].use($.a,D.a),a["a"].config.productionTip=!1,new a["a"]({router:w,store:_,render:function(t){return t(l)}}).$mount("#app")},5740:function(t,e,n){},"86b4":function(t,e,n){"use strict";var a=n("5740"),o=n.n(a);o.a}});
//# sourceMappingURL=app.1c5afb7d.js.map