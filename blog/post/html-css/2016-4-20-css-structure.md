---
title : "[HTML/CSS]CSS의 기본 구조"
description : "CSS(Cascading Style Sheet)는 Document가 사용자에게 어떻게 보여질가를 기술하는 언어입니다. CSS는 기본적으로 선택자와 속성, 값으로 이루어져 있습니다."
author : Reve 
date: 2016/04/20
---

`CSS(Cascading Style Sheet)`는 Document가 사용자에게 어떻게 보여질가를 기술하는 언어입니다. CSS는 기본적으로 선택자와 속성, 값으로 이루어져 있습니다.

선택자 {
	속성: 값
}

```css
p {
	background-color: #fff;
	color: #000;
}
```

세미콜론의 경우 1개 이상의 속성값을 선언할 때 각 속성을 구분하기 위해서 사용됩니다. 따라서 하나의 속성만 선언하거나 마지막 속성에는 세미콜론이 생략될 수 있습니다.

```css
p {
	background-color: #fff
}
```

```css
p {
	background-color: #fff;
	color: #000
}
```

다만 언제 어느 위치에 새로운 스타일 속성이 추가될지 모르니 세미콜론을 생략하는건 추천하지 않습니다.
