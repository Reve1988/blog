---
title : "[HTML]from태그의 enctype속성에 대하여"
description : "HTML에서 form태그로 데이터를 전송할 때 enctype이라는 속성으로 전송할 데이터 타입을 지정해줄 수 있다. 이 속성은 MIME에 지정된 타입을 지정해주면 되나 실제 사용하는 타입은 2가지이다."
author : Reve
date: 2016/12/08
---

HTML에서 form태그로 데이터를 전송할 때 enctype이라는 속성으로 전송할 데이터 타입을 지정해줄 수 있다. 이 속성은 MIME에 지정된 타입을 지정해주면 되나 실제 사용하는 타입은 2가지이다.

```html
<form action="demo_post_enctype.asp" method="post" enctype="multipart/form-data">
   First name: <input type="text" name="fname"><br>
   Last name: <input type="text" name="lname"><br>
   <input type="submit" value="Submit">
</form>
```

- `application/x-www-form-urlencoded` : 모든 문자열은 전송되기 전에 인코딩된다(공백은 "+"심볼로 변환되며, 특수문자는 ASCII 16진수로 변환된다.) 기본값이므로 enctype설정이 없으면 이 속성이 선택된다.
- `multipart/form-data` : 문자열이 인코딩되지 않는다. 이 속성은 보통 파일 업로드를 할 때 사용된다.
- `text/plain` : 공백을 "+"심볼로 변환하며, 특수문자는 변환되지 않는다. 잘 사용되지 않는 속성이다.
