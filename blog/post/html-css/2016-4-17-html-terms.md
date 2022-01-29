---
title : "[HTML/CSS]용어정리"
description : "1. 태그 (Tag) HTML의 기분 구조의 핵심으로, 어떤 역할을 하는 지 웹 브라우저의 렌더링 엔진에게 알려주는 역할을 합니다."
author : Reve
date: 2016/04/17
---

### 1. 태그 (Tag)

HTML의 기분 구조의 핵심으로, 어떤 역할을 하는 지 웹 브라우저의 렌더링 엔진에게 알려주는 역할을 합니다.  
`<>` 사이에 태그명이 들어가게 되며 컨텐츠를 감싸는 시작태그와 끝 태그로 구분되어 있습니다. 또한 컨텐츠가 없는 태그는 단일 태그로 구성되어 있기도 합니다.

- Start tag : `<tag name>`
- End tag : `</tag name>`
- Single tag : `<tag name/>`

```html
<p> 컨텐츠 내용 </p>
단일<br/>태그
```

---

### 2. 요소 (Element)

태그와 컨텐츠를 통틀어 요소라고 부릅니다. 태그와 컨텐츠를 하나의 요소로 보고 보통 요소 단위로 화면을 구성하게 됩니다.

```html
<p> 컨텐츠 내용 </p>
```

---

### 3. 속성 (Attribute)

태그에 추가적으로 주어지는 속성을 말합니다.

```html
<a href="http://www.naver.com">네이버 </a>
```