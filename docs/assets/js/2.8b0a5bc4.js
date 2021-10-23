(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{323:function(t,e,n){},324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){},327:function(t,e,n){},328:function(t,e,n){},329:function(t,e,n){"use strict";n(323)},330:function(t,e,n){"use strict";n(324)},331:function(t,e,n){"use strict";n(325)},332:function(t,e,n){"use strict";n(326)},333:function(t,e,n){"use strict";n(327)},334:function(t,e,n){"use strict";n(328)},335:function(t,e,n){var a=n(19),o=Date.prototype,s=o.toString,i=o.getTime;"Invalid Date"!=String(new Date(NaN))&&a(o,"toString",(function(){var t=i.call(this);return t==t?s.call(this):"Invalid Date"}))},336:function(t,e,n){},337:function(t,e,n){"use strict";n(48),n(35);var a={name:"Navigation",data:function(){return{categories:[]}},mounted:function(){this.categories=this.getCategories(this.$site.pages)},methods:{getCategories:function(t){var e=this;return t.filter((function(t){return"CategoryIndex"===t.frontmatter.layout})).map((function(t){return{name:t.frontmatter.title,path:e.$withBase(t.path)}}))},moveToHome:function(){location.href=this.$withBase("/")}}},o=(n(329),n(47)),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"navigation-height"}),t._v(" "),n("nav",{staticClass:"navigation"},[n("b-container",[n("b-row",{staticClass:"navigation-height flex-between"},[n("div",{staticClass:"navigation-item navigation-title",on:{click:t.moveToHome}},[t._v("\n          "+t._s(t.$siteTitle)+"\n        ")]),t._v(" "),n("b-dropdown",{staticClass:"navigation-item navigation-right",attrs:{text:"Category",right:"",size:"sm",variant:"outline-primary"}},t._l(t.categories,(function(e){return n("b-dropdown-item",{attrs:{href:e.path}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)],1)],1)],1)])}),[],!1,null,null,null).exports,i={name:"Cover.vue"},r=(n(330),Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cover"},[e("div",{ref:"coverImage"})])}),[],!1,null,"4a8a7deb",null).exports),c={name:"Footer",methods:{openNewTab:function(t){window.open(t)}}},l=(n(331),n(332),{name:"CommonLayout",components:{Navigation:s,Cover:r,CommonFooter:Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("b-container",[n("b-row",[n("b-col",[n("img",{staticClass:"icon",attrs:{src:t.$withBase("/svg/github-mark.svg"),alt:"github"},on:{click:function(e){return t.openNewTab("https://github.com/Reve1988")}}}),t._v(" "),n("img",{staticClass:"icon",attrs:{src:t.$withBase("/svg/naver-blog-mark.svg"),alt:"github"},on:{click:function(e){return t.openNewTab("https://blog.naver.com/kgw1988")}}})])],1),t._v(" "),n("b-row",[n("b-col",[t._v("Copyrightⓒ2021 Revelope All rights reserved.")])],1)],1)],1)}),[],!1,null,"e3040520",null).exports}}),u=(n(333),Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("b-container",[e("b-row",[e("navigation")],1),this._v(" "),e("b-row",[e("cover")],1),this._v(" "),e("b-row",[this._t("default")],2),this._v(" "),e("b-row",[this._t("bottom")],2)],1),this._v(" "),e("common-footer")],1)}),[],!1,null,null,null));e.a=u.exports},338:function(t,e,n){"use strict";var a={name:"Contents"},o=(n(334),n(47)),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-box"},[t.$page.frontmatter.title?n("h1",[t._v(t._s(t.$page.frontmatter.title))]):t._e(),t._v(" "),t.$page.frontmatter.author&&t.$page.frontmatter.date?n("span",[t._v(t._s(t.$page.frontmatter.author)+" - "+t._s(t.$page.frontmatter.date))]):t._e(),t._v(" "),t.$page.frontmatter.title||t.$page.frontmatter.author&&t.$page.frontmatter.date?n("hr"):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"2cafb792",null);e.a=s.exports},339:function(t,e,n){"use strict";n(336)},340:function(t,e,n){"use strict";n(166),n(48),n(35),n(36),n(37),n(335);var a={name:"PostCard.vue",props:{pages:[]},data:function(){return{posts:[],displayPosts:[],perPage:5}},computed:{showMoreButton:function(){return this.displayPosts.length<this.posts.length}},mounted:function(){this.posts=this.getPosts(),this.displayMorePosts()},methods:{getPosts:function(){var t=this;return this.pages.filter((function(t){return"Post"===t.frontmatter.layout})).map((function(e){return{key:e.key,title:e.frontmatter.title,path:e.path,description:e.frontmatter.description,image:e.frontmatter.image?t.$withBase(e.frontmatter.image):"",date:e.frontmatter.date}})).sort((function(t,e){return new Date(e.date)-new Date(t.date)}))},goToPost:function(t){location.href=this.$withBase(t)},displayMorePosts:function(){for(var t=this.displayPosts.length,e=t;e<t+this.perPage;e++){if(this.displayPosts.length>=this.posts.length)return;this.displayPosts.push(this.posts[e])}}}},o=(n(339),n(47)),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"post-card-box"},t._l(t.displayPosts,(function(e,a){return n("b-card",{staticClass:"card overflow-hidden",class:{"margin-bottom-0":a===t.displayPosts.length-1},attrs:{"no-body":""},on:{click:function(n){return t.goToPost(e.path)}}},[n("b-row",{attrs:{"no-gutters":""}},[e.image?n("b-col",{staticClass:"card-img-box",attrs:{md:"3"}},[n("b-card-img",{staticClass:"card-img",attrs:{src:e.image,alt:"Post image"}})],1):t._e(),t._v(" "),n("b-col",{attrs:{md:e.image?9:12}},[n("b-card-body",{attrs:{title:e.title}},[n("b-card-text",[t._v("\n              "+t._s(e.description)),n("br"),t._v("\n              "+t._s(e.date)+"\n            ")])],1)],1)],1)],1)})),1),t._v(" "),t.showMoreButton?n("div",{staticClass:"more-row"},[n("b-button",{on:{click:t.displayMorePosts}},[t._v("More..")])],1):t._e()])}),[],!1,null,"2ce9f4be",null);e.a=s.exports},345:function(t,e,n){"use strict";n.r(e);var a=n(337),o=n(338),s=n(340),i={name:"CategoryIndex",components:{CommonLayout:a.a,Contents:o.a,PostCard:s.a}},r=n(47),c=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("common-layout",[e("contents",[e("post-card",{attrs:{pages:this.$pagination.pages}})],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);