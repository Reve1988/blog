---
title : "[HTML/CSS]HTML문서에 CSS적용하기"
description : "HTML문서에 CSS를 적용하기 위해서는 HTML문서에서 HEAD태그 내부에 CSS에 관련된 태그를 정의해주어야 합니다. CSS는 내부 스타일 시트를 이용하는 방법과 외부 스타일 시트, 인라인 스타일 시트를 이용하는 방법이 있습니다."
author : Reve 
date: 2016/04/21
---

`HTML`문서에 `CSS`를 적용하기 위해서는 `HTML`문서에서 `HEAD`태그 내부에 `CSS`에 관련된 태그를 정의해주어야 합니다.  
`CSS`는 `내부 스타일 시트`를 이용하는 방법과 `외부 스타일 시트`, `인라인 스타일 시트`를 이용하는 방법이 있습니다.

---

### 1. 내부 스타일 시트 이용

`HEAD`태그내부에 `STYLE`태그를 정의함으로써 `CSS`를 적용할 수 있습니다. 내부 스타일 시트를 적용하게 되면 해당 `HTML`문서에는 바로 적용되지만 다른 문서에서 사용할 수 없습니다. 여러 `HTML`문서에서 동일한 `CSS`를 사용하고 싶을 경우에는 외부 스타일 시트를 이용해야 합니다.

- index.html

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Hello</title>
	<style>
		P {
			color: orange
		}
	</style>
</head>
<body>
<p>Hello! CSS</p>
</body>
</html>
```

---

### 2. 외부 스타일 시트 이용

`HEAD`태그 내부에 `LINK`태그를 정의함으로써 `CSS`를 적용할 수 있습니다. `LINK`태그에서 `CSS`파일을 호출함으로써 해당 `HTML`문서는 `CSS`를 적용할 수 있습니다.

- index.html

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Hello</title>
	<link rel="stylesheet" href="basic.css"/>
</head>
<body>
<p>Hello! CSS</p>
</body>
</html>
```

- basic.css

```css
@charset "utf-8";

P {
	color: orange
}
```

---

### 3. 인라인 스타일 시트

인라인 스타일 시트는 태그 내부에 직접 스타일을 지정해 줌으로써 스타일을 적용할 수 있습니다. 인라인 스타일 시트는 1회성 스타일 시트로 적용된 태그에만 적용됩니다.

- index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
  </head>
  <body>
    <p style="color:orange">Hello! CSS</p>
  </body>
</html>
```
