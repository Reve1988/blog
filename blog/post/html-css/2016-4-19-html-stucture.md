---
title : "[HTML/CSS]HTML문서의 기본 구조"
description : "HTML문서는 모두 태그를 기반으로 만들어집니다."
author : Reve
date: 2016/04/19
---

HTML문서는 모두 태그를 기반으로 만들어집니다.  
HTML의 가장 큰 틀은 다음과 같습니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
  </head>
  <body>
    <p>Hello! HTML</p>
  </body>
</html>
```

- **DOCTYPE** : HTML문서의 형식과 버전을 알립니다. html은 html5를 나타냅니다. 다른 버전의 html문서를 나타내려면 [링크](http://html.elex.pe.kr/reference/doctype)를 참고하세요.
- **html** : HTML문서의 시작과 끝을 알립니다.
- **head** : HTML문서의 정보(메타데이터)를 전달하는 태그의 시작과 끝을 알립니다.
- **body** : 화면에 보여줄 컨텐츠의 시작과 끝을 알립니다.
