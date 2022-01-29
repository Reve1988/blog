---
title : "[HTML/CSS]Inline과 Block요소"
description : " 요소(Element)는 Inline또는 Block이라는 성질을 가지고 있습니다. 요소가 Inline성질을 가지는지 Block성질을 가지는지에 따라서 화면에 그려지는 방식이 달라집니다."
author : Reve
date: 2016/04/18
---

요소(Element)는 Inline또는 Block이라는 성질을 가지고 있습니다. 요소가 Inline성질을 가지는지 Block성질을 가지는지에 따라서 화면에 그려지는 방식이 달라집니다. 따라서 이 두가지 성질을 잘 이해하고 있어야 화면을 구상하는데 어려움이 없을 것입니다.

---

### 1. Inline 요소

줄을 바꾸지 않고 해당 위치에서 필요로 하는 폭만 유지해서 다른 요소들과 같은 라인에 위치하려는 성질을 말합니다.

대부분의 Inline 성질은 문장 안에서 사용하는 요소들이 주로 가지고 있습니다. 하지만 모든 Inline 성질을 갖는 요소들을 모두 외우고 있을수는 없습니다. 따라서 Inline 성질의 특징을 발견하여 이해하는 것이 좋습니다.

대표적으로 Inline 성질을 갖는 요소는 다음과 같습니다.

```
span, a, strong, em, img, input...
```

Inline 성질을 갖는 요소들의 특징은 다음과 같습니다.

- 상, 하단 margin 속성이 적용되지 않는다.
- 너비(width)와 높이(height)속성이 적용되지 않는다.
- Inline 속성을 가진 태그끼리 연속해서 사용되는 경우 별도의 속성이 정의되어 있지 않으면 좌, 우에 약 5px가량의 margin속성이 적용된다.

---

### 2. Block 요소

**새로운 줄에서 시작되며 전체 좌우 너비(width)를 100% 사용하는 요소들을 말합니다.**

일반적으로 Block 성질을 가지는 요소들이 화면의 레이아웃을 그리는데 사용됩니다. Block 성질을 갖는 요소의 가장 큰 특징은 좌우 너비를 100% 사용한다는 것입니다. 한줄로 요소를 작성하였음에도 줄바꿈이 일어난다면 그 요소는 Block성질을 갖는다고 보면 됩니다.

대표적으로 Block 성질을 갖는 요소는 다음과 같습니다.

```
html, address, blockquote, body, div, dl, dt, fieldset, form, frame, h1~6, ol, p, ul, center, dir, hr, footer, canvas...
```

한가지 주의할 점은 **Block 성질을 갖는 요소는 Inline 성질을 갖는 요소보다 상위 요소**입니다. 따라서 Block 성질을 갖는 요소 내부에 Inline 성질을 갖는 요소들을 포함할 수는 있지만 **Inline 성질을 갖는 요소 내부에 Block 성질을 갖는 요소를 포함할 수는 없습니다.**

---

### 3. Inline-Block 요소

**기본적으로 Inline 성질을 갖지만 Block처럼 margin, width, height등의 속성을 정의하면 이를 표현해줍니다.**

기본적으로 Inline-block 성질을 갖는 요소는 없습니다. 이는 CSS를 통해 따로 선언해주어야 합니다. Inline 또는 Block 성질을 같는 요소를 다음과 같이 정의하면 Inline-block 성질을 갖습니다.

```
display:inline-block
```
