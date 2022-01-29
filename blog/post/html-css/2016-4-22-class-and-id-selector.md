---
title : "[HTML/CSS]Class와 ID선택자"
description : " CSS에서 선택자는 보통 태그명을 가리킵니다. 하지만 선택자로 태그명을 입력하면 선택된 태그명을 가진 HTML문서 내의 모든 태그가 영향을 받게 됩니다."
author : Reve 
date: 2016/04/22
---

`CSS`에서 선택자는 보통 태그명을 가리킵니다. 하지만 선택자로 태그명을 입력하면 선택된 태그명을 가진 `HTML`문서 내의 모든 태그가 영향을 받게 됩니다. 따라서 `CSS`를 조금 더 세밀하게 적용시킬 수 있는 방법이 필요합니다. 더 세밀하게 `CSS`를 적용시키는 방법으로는 `Class`와 `ID선택자`가 있습니다.

`Class`는 공통적인 특징을 나타내는 그룹입니다.  
여러 태그에서 동일한 `Class`명을 사용할 수 있습니다.

```html
...
<h1 class="top-title">1.첫번째</h1>
...
<h1 class="top-title">2.두번째</h1>
...
```

`ID`는 요소의 구분자입니다.  
각 요소들을 구별할 수 있는 값으로 동일한 `ID`를 갖는 태그는 존재할 수 없습니다.

```html
...
<div id="topMenu">
    ...
</div>
...
```

하나의 태그가 `Class`와 `ID` 속성을 모두 가질 수 있습니다.

```html
...
<h1 class="subject" id="firstSubject">1.첫번째</h1>
...
<h1 class="subject" id="secondSubject">2.두번째</h1>
...
```

`Class`를 선택자로 사용하려면 `.Class명 {속성:값}` 형식으로 사용하면 됩니다.

```css
.top-title {
    font-weight: bold;
    color: red;
}
```

`ID`를 선택자로 사용하려면 `#Id명 {속성:값}` 형식으로 사용하면 됩니다.

```css
#firstSubject {
    background-color: black;
}

#secondSubject {
    background-color: white;
}
```
