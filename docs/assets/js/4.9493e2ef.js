(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{323:function(t,e,n){},324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){},327:function(t,e,n){},328:function(t,e,n){"use strict";n(323)},329:function(t,e,n){"use strict";n(324)},330:function(t,e,n){"use strict";n(325)},331:function(t,e,n){"use strict";n(326)},332:function(t,e,n){"use strict";n(327)},333:function(t,e,n){var i=n(19),a=Date.prototype,s=a.toString,o=a.getTime;"Invalid Date"!=String(new Date(NaN))&&i(a,"toString",(function(){var t=o.call(this);return t==t?s.call(this):"Invalid Date"}))},335:function(t,e,n){"use strict";n(48),n(35);var i={name:"Navigation",data:function(){return{categories:[]}},mounted:function(){this.categories=this.getCategories(this.$site.pages)},methods:{getCategories:function(t){var e=this;return t.filter((function(t){return"CategoryIndex"===t.frontmatter.layout})).map((function(t){return{name:t.frontmatter.title,path:e.$withBase(t.path)}}))},moveToHome:function(){location.href=this.$withBase("/")}}},a=(n(328),n(47)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"navigation-height"}),t._v(" "),n("nav",{staticClass:"navigation"},[n("b-container",[n("b-row",{staticClass:"navigation-height flex-between"},[n("div",{staticClass:"navigation-item navigation-title",on:{click:t.moveToHome}},[t._v("\n          "+t._s(t.$siteTitle)+"\n        ")]),t._v(" "),n("b-dropdown",{staticClass:"navigation-item navigation-right",attrs:{text:"Category",right:"",size:"sm",variant:"outline-primary"}},t._l(t.categories,(function(e){return n("b-dropdown-item",{attrs:{href:e.path}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)],1)],1)],1)])}),[],!1,null,null,null).exports,o={name:"Cover.vue"},r=(n(329),Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cover"},[e("div",{ref:"coverImage"})])}),[],!1,null,"4a8a7deb",null).exports),c={name:"Footer"},u=(n(330),{name:"CommonLayout",components:{Navigation:s,Cover:r,CommonFooter:Object(a.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("b-container",[this._v("\n    Copyrightⓒ2021 Revelope All rights reserved.\n  ")])],1)}),[],!1,null,"2266bdfd",null).exports}}),l=(n(331),Object(a.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("b-container",[e("b-row",[e("navigation")],1),this._v(" "),e("b-row",[e("cover")],1),this._v(" "),e("b-row",[this._t("default")],2),this._v(" "),e("b-row",[this._t("bottom")],2)],1),this._v(" "),e("common-footer")],1)}),[],!1,null,null,null));e.a=l.exports},336:function(t,e,n){"use strict";var i={name:"Contents"},a=(n(332),n(47)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content-box"},[this._t("default")],2)}),[],!1,null,"d9d9c08a",null);e.a=s.exports},339:function(t,e,n){},340:function(t,e,n){"use strict";var i=n(1),a=n(39).findIndex,s=n(94),o=!0;"findIndex"in[]&&Array(1).findIndex((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},341:function(t,e,n){"use strict";n(339)},342:function(t,e,n){"use strict";n.r(e);n(167),n(48),n(35),n(36),n(37),n(333);var i=n(335),a=n(336),s=(n(340),n(38),{name:"PostPagination",props:{postList:{type:Array,required:!0},currentPost:{type:Object,require:!0}},data:function(){return{displayPostList:[],postCountPerPage:5,currentPage:0,totalPage:0}},watch:{postList:function(){this.initPostPagination()}},methods:{initPostPagination:function(){var t=this.getCurrentPostIndex();this.currentPage=Math.ceil((t+1)/this.postCountPerPage),this.totalPage=Math.ceil(this.postList.length/this.postCountPerPage),this.displayPostList=this.getDisplayPostList(this.currentPage)},movePreviousPage:function(){this.currentPage=this.currentPage-1,this.displayPostList=this.getDisplayPostList(this.currentPage)},moveNextPage:function(){this.currentPage=this.currentPage+1,this.displayPostList=this.getDisplayPostList(this.currentPage)},getCurrentPostIndex:function(){var t=this;return this.postList.findIndex((function(e){return e.key===t.currentPost.key}))},getDisplayPostList:function(t){var e=(t-1)*this.postCountPerPage,n=e+this.postCountPerPage;return this.postList.slice(e,n)}}}),o=(n(341),n(47)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-pagination"},[n("div",{staticClass:"post-pagination-title"},[n("span",{staticClass:"category"},[t._v(t._s(t.currentPost.id))]),t._v(" 카테고리 내 다른 포스트\n  ")]),t._v(" "),n("b-container",t._l(t.displayPostList,(function(e){return n("b-row",{staticClass:"post-list"},[n("b-col",[n("a",{class:{"normal-post-title":e.key!==t.currentPost.key},attrs:{href:t.$withBase(e.path)}},[t._v(t._s(e.title))])])],1)})),1),t._v(" "),n("b-container",[n("b-row",{staticClass:"row-center"},[n("b-button",{attrs:{variant:"light",disabled:t.currentPage<=1},on:{click:t.movePreviousPage}},[t._v("\n        < 이전\n      ")]),t._v(" "),n("b-button",{attrs:{variant:"light",disabled:t.currentPage>=t.totalPage},on:{click:t.moveNextPage}},[t._v("\n        다음 >\n      ")])],1)],1)],1)}),[],!1,null,"4d3ae290",null).exports,c={name:"Post",components:{CommonLayout:i.a,Contents:a.a,PostPagination:r},data:function(){return{pages:[]}},mounted:function(){var t=this;this.pages=this.$getPagination(this.$page.pid,this.$page.id).pages.filter((function(t){return"Post"===t.frontmatter.layout})).map((function(e){return{key:e.key,title:e.frontmatter.title,path:e.path,description:e.frontmatter.description,image:e.frontmatter.image?t.$withBase(e.frontmatter.image):"",date:e.frontmatter.date}})).sort((function(t,e){return new Date(e.date)-new Date(t.date)}))}},u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("common-layout",{scopedSlots:t._u([{key:"bottom",fn:function(){return[n("post-pagination",{attrs:{"post-list":t.pages,"current-post":t.$page}})]},proxy:!0}])},[n("contents",[n("Content")],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);