(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{381:function(e,v,_){"use strict";_.r(v);var n=_(58),l=Object(n.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[_("code",[e._v("요소(Element)")]),e._v("는 "),_("code",[e._v("Inline")]),e._v("또는 "),_("code",[e._v("Block")]),e._v("이라는 성질을 가지고 있습니다. 요소가 "),_("code",[e._v("Inline")]),e._v("성질을 가지는지 "),_("code",[e._v("Block")]),e._v("성질을 가지는지에 따라서 화면에 그려지는 방식이 달라집니다. 따라서 이 두가지 성질을 잘 이해하고 있어야 화면을 구상하는데 어려움이 없을 것입니다.")]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"_1-inline-요소"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-inline-요소"}},[e._v("#")]),e._v(" 1. Inline 요소")]),e._v(" "),_("p",[e._v("줄을 바꾸지 않고 해당 위치에서 필요로 하는 폭만 유지해서 다른 요소들과 같은 라인에 위치하려는 성질을 말합니다.")]),e._v(" "),_("p",[e._v("대부분의 "),_("code",[e._v("Inline")]),e._v(" 성질은 문장 안에서 사용하는 요소들이 주로 가지고 있습니다. 하지만 모든 "),_("code",[e._v("Inline")]),e._v(" 성질을 갖는 요소들을 모두 외우고 있을수는 없습니다. 따라서 "),_("code",[e._v("Inline")]),e._v(" 성질의 특징을 발견하여 이해하는 것이 좋습니다.")]),e._v(" "),_("p",[e._v("대표적으로 "),_("code",[e._v("Inline")]),e._v(" 성질을 갖는 요소는 다음과 같습니다.")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("span, a, strong, em, img, input...\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[_("code",[e._v("Inline")]),e._v(" 성질을 갖는 요소들의 특징은 다음과 같습니다.")]),e._v(" "),_("ul",[_("li",[e._v("상, 하단 margin 속성이 적용되지 않는다.")]),e._v(" "),_("li",[e._v("너비(width)와 높이(height)속성이 적용되지 않는다.")]),e._v(" "),_("li",[_("code",[e._v("Inline")]),e._v(" 속성을 가진 태그끼리 연속해서 사용되는 경우 별도의 속성이 정의되어 있지 않으면 좌, 우에 약 5px가량의 margin속성이 적용된다.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"_2-block-요소"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-block-요소"}},[e._v("#")]),e._v(" 2. Block 요소")]),e._v(" "),_("p",[_("strong",[e._v("새로운 줄에서 시작되며 전체 좌우 너비(width)를 100% 사용하는 요소들을 말합니다.")])]),e._v(" "),_("p",[e._v("일반적으로 "),_("code",[e._v("Block")]),e._v(" 성질을 가지는 요소들이 화면의 레이아웃을 그리는데 사용됩니다. "),_("code",[e._v("Block")]),e._v(" 성질을 갖는 요소의 가장 큰 특징은 좌우 너비를 100% 사용한다는 것입니다. 한줄로 요소를 작성하였음에도 줄바꿈이 일어난다면 그 요소는 "),_("code",[e._v("Block")]),e._v(" 성질을 갖는다고 보면 됩니다.")]),e._v(" "),_("p",[e._v("대표적으로 "),_("code",[e._v("Block")]),e._v(" 성질을 갖는 요소는 다음과 같습니다.")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("html, address, blockquote, body, div, dl, dt, fieldset, form, frame, h1~6, ol, p, ul, center, dir, hr, footer, canvas...\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("p",[e._v("한가지 주의할 점은 "),_("strong",[_("code",[e._v("Block")]),e._v(" 성질을 갖는 요소는 "),_("code",[e._v("Inline")]),e._v(" 성질을 갖는 요소보다 상위 요소")]),e._v("입니다. 따라서 "),_("code",[e._v("Block")]),e._v(" 성질을 갖는 요소 내부에 "),_("code",[e._v("Inline")]),e._v(" 성질을 갖는 요소들을 포함할 수는 있지만 "),_("strong",[_("code",[e._v("Inline")]),e._v(" 성질을 갖는 요소 내부에 "),_("code",[e._v("Block")]),e._v(" 성질을 갖는 요소를 포함할 수는 없습니다.")])]),e._v(" "),_("hr"),e._v(" "),_("h3",{attrs:{id:"_3-inline-block-요소"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-inline-block-요소"}},[e._v("#")]),e._v(" 3. Inline-Block 요소")]),e._v(" "),_("p",[_("strong",[e._v("기본적으로 "),_("code",[e._v("Inline")]),e._v(" 성질을 갖지만 "),_("code",[e._v("Block")]),e._v("처럼 margin, width, height등의 속성을 정의하면 이를 표현해줍니다.")])]),e._v(" "),_("p",[e._v("기본적으로 "),_("code",[e._v("Inline-block")]),e._v(" 성질을 갖는 요소는 없습니다. 이는 CSS를 통해 따로 선언해주어야 합니다. "),_("code",[e._v("Inline")]),e._v(" 또는 "),_("code",[e._v("Block")]),e._v(" 성질을 같는 요소를 다음과 같이 정의하면 "),_("code",[e._v("Inline-block")]),e._v(" 성질을 갖습니다.")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("display:inline-block\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])])])}),[],!1,null,null,null);v.default=l.exports}}]);