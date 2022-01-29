(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{397:function(s,t,a){"use strict";a.r(t);var n=a(58),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("자바 16버전이 2021년 3월 16일에 공개되었다."),a("br"),s._v("\n한꺼번에 두개 버전을 확인하려니 조금 힘들다."),a("br"),s._v("\n역시 미루는 습관은 좋지 않아...")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://jdk.java.net/16/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java16"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://openjdk.java.net/projects/jdk/16/",target:"_blank",rel:"noopener noreferrer"}},[s._v("JDK16"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("이번 변경사항은 LTS(Long Term Support : JDK16)버전이 나오기 전 단계라 그런지 JDK를 정리하는 패치가 주를 이뤘다."),a("br"),s._v("\n(OpneJDK의 소스코드를 Github에 올렸다던지 등..)")]),s._v(" "),a("p",[s._v("그래서 JDK를 깊게 공부할게 아니라면 특별하게 살펴볼만한건 없으므로 간단하게 포스팅하려고 한다."),a("br"),s._v("\n(귀찮아서 그런건 아님...)")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/9425680/141606057-911667dd-bde3-453c-a2b2-c02268e72be7.png",alt:"emoticon"}})]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-packaging-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-packaging-tool"}},[s._v("#")]),s._v(" 1. Packaging  Tool")]),s._v(" "),a("p",[s._v("설치형  응용 소프트웨어를  만들기 위한  jpackage라는 툴을 제공한다."),a("br"),s._v("\nJDK14에서 incubating으로 소개되었고 이번에  product되었다.")]),s._v(" "),a("p",[s._v("필자는 웹 개발자이고 jar를 이용한 배포에 익숙하지만 설치형 클라이언트 프로그램을 만드는 사람이라면 한번 관심을 가져볼 만 할 것 같다.")]),s._v(" "),a("p",[s._v("운영체제는 Linux, Windows, MacOS를 지원하며, 운영체제별 지원하는 설치 포멧은 아래와 같다.")]),s._v(" "),a("ul",[a("li",[s._v("Linux : deb, rpm")]),s._v(" "),a("li",[s._v("MacOS : pkg, dmg")]),s._v(" "),a("li",[s._v("Windows : msi, exe")])]),s._v(" "),a("p",[s._v("참고로 윈도우만 테스트 해 보았는데, WIX(Windows Intaller XML)를 3.0이상 버전으로 설치해야 패키징 할 수 있다.")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"_2-pattern-matching-for-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-pattern-matching-for-instanceof"}},[s._v("#")]),s._v(" 2. Pattern Matching for instanceof")]),s._v(" "),a("p",[s._v("JDK14에서 공개된 기능이며, Preview에서 Product되었다."),a("br"),s._v("\n기본 사용법은 "),a("a",{attrs:{href:"https://blog.revelope.kr/post/java/java14/#_1-pattern-matching-for-instanceof-preview",target:"_blank",rel:"noopener noreferrer"}},[s._v("기존 포스팅"),a("OutboundLink")],1),s._v("을 참고하면 되겠다.")]),s._v(" "),a("p",[s._v("기존 포스팅이 조금 부실해서 내용을 추가하자면 if문 내에서도 and로 이어진 다수의 조건이라면 아래와 같이 사용 가능하다.")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" object "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("object "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("다만 or조건의 경우에는 사용할 수 없다."),a("br"),s._v("\n아래와 같은 경우 instanceof가 false이므로 message변수를 만들지 못한다.")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" object "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("object "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("조건이 좀 더 복잡하다면 아래와 같이 간결하게 표현할 수 있다.")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("object "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Point")]),s._v(" other "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("object "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Point")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"_3-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-records"}},[s._v("#")]),s._v(" 3. Records")]),s._v(" "),a("p",[s._v("Java14에서 공개된 Records는 Preview에서 Product 되었다."),a("br"),s._v("\n문법에 변경된 사항이 없으니 내용은 "),a("a",{attrs:{href:"https://blog.revelope.kr/post/java/java14/#_2-records-preview",target:"_blank",rel:"noopener noreferrer"}},[s._v("이전 포스팅"),a("OutboundLink")],1),s._v("에서 확인하면 된다.")])])}),[],!1,null,null,null);t.default=e.exports}}]);