---
title : "[SVG] 확대해도 깨지지 않는 벡터 이미지"
description : "웹에서 사용하는 이미지 방식은 기술의 발전과 함께 계속 변화해왔습니다. 기존(지금까지도) 웹은 용량이 적고 적당히 선명한 이미지 방식을 선호해 왔습니다."
author : Reve
date: 2021/07/25
---

웹에서 사용하는 이미지 방식은 기술의 발전과 함께 계속 변화해왔습니다.
기존(지금까지도) 웹은 용량이 적고 적당히 선명한 이미지 방식을 선호해 왔습니다.
아주 옛날에는 압축되지 않은 색상정보의 집합인 bmp를 사용하였고, 이후 많은 압축방식을 들어간 jpg를 선호해 왔습니다.
비교적 최근에 와서는 네트워크 전송을 위한 전용 포멧인 png를 많이 사용합니다.

이미지파일은 일반적으로 색상 정보를 가진 점의 집합인 비트맵 방식을 사용합니다.
하지만 모든 점을 표현하면 용량이 매우 커서 웹에서 사용하기 어려웠습니다.
따라서 많은 압축방식을 가진 JPG(Joint Photograph Experts Group) 이미지 포멧이 나왔고, 이는 손실을 감수한 압축 방식을 사용합니다.
당시 디스플레이는 해상도가 낮았고, 어느정도 이미지가 손상되도 디스플레이가 이를 표현해주지 못했기 때문에 감수할 수 있는 손실이었습니다.
하지만 디스플레이의 발전으로 해상도마다 jpg 방식으로는 이미지가 다르게 보이는 문제가 있고,
투명을 표현할 수 없다는 단점이 있어 PNG(Portable Network Graphics)라는 무손실 압축 및 투명표현이 가능한 네트워크 전용 이미지 포멧이 생겼습니다.

- 비트맵 방식 예제

![비트맵 방식 예제](https://user-images.githubusercontent.com/9425680/145939501-b708475a-d2c5-4959-9d03-d8503cb29ccc.png)

하지만 PNG(Portable Network Graphics)방식 역시 비트맵 방식이므로 해상도 문제에서 자유로울 수가 없습니다.
특히 요즘 초고해상도 디스플레이가 나오면서 본격적인 문제가 발생합니다.
대표적으로 레티나 디스플레이를 사용한 맥북은 13인치의 작은 화면에 2000x1000이상의 초고해상도를 표현,
갤럭시 스마트폰 역시 6인치 남칫한 화면에 3000x1000이상의 초고해상도를 표현하며 이미지를 150~200%로 확대하는 방식을 사용하고 있습니다.
따라서 아래와 같이 웹의 모든 이미지들이 흐릿하게 보이는 현상이 있었습니다.

- 확대된 웹 화면 캡쳐, 무엇이 글자이고 무엇이 이미지인지 구분이 된다.

![확대된 웹 화면 캡쳐](https://user-images.githubusercontent.com/9425680/145939525-30c95b52-bd9d-4b60-8cf8-973a92c4ff6a.png)

간단한 아이콘마저 비트맵으로 되어있는 상황에서 초고해상도 고밀도 디스플레이어서 깨지는 현상이 발생하고,
그렇다고 아이콘 하나하나를 초고해상도 이미지로 넣기에는 서버에 부담이 많이 가는 상황이었습니다.
그래서 대안으로 나온것이 SVG(Scalable Vector Graphics) 표현 방식입니다.
이는 2차원 벡터 그래픽을 표현하기 위한 XML파일이며, W3C(World Wide Web Consortium)의 주도하에 개발된 표준 벡터 그래픽 파일 형식입니다.
벡터 그래픽은 이미지를 점의 집합이 아닌 그리는 방법을 설명하고 있기 때문에, 전달해야되는 정보의 양은 적지만 전달받은 클라이언트 추가 연산이 필요합니다.
따라서 SVG를 지원하는 클라이언트 프로그램이 필요합니다.

- SVG를 지원하는 브라우저별 최소 버전

![SVG를 지원하는 브라우저별 최소 버전](https://user-images.githubusercontent.com/9425680/145939536-da1a284c-0c04-46e0-a9ba-79ab273b73e4.png)

마지막으로 간단한 SVG파일을 만들어 보겠습니다.

sample.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <rect x="0" y="0" width="100" height="100" style="fill:red; stroke:black; stroke-width:5px"></rect>
</svg>
```

index.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Sample</title>
    <style>
        img {
            width: 100px;
            height: 100px;
        }

        .svg {
            width: 400px;
            height: 400px;
            background-image: url(sample.svg)
        }
    </style>
</head>
<body>
    <h1>IMG svg</h1>
    <img src="sample.svg" alt="">
    <h1>Background svg</h1>
    <div class="svg"></div>
</body>
</html>
```

- 결과

![결과](https://user-images.githubusercontent.com/9425680/145939552-37841c0b-867e-4bc1-a5bb-1ff0a1f7682a.png)

이렇게 직접 SVG파일을 만들어도 되지만 미리 SVG를 이용하여 만들어진 아이콘들을 받아서 사용하는 방법이 있습니다.
다만 사용하기 전 라이센스를 잘 확인하고 사용하는것이 좋습니다.

---

참고자료

- Font Awesome : [https://fontawesome.com/](https://fontawesome.com/)
- GitHub's icons (Octicons) : [https://primer.style/octicons/](https://primer.style/octicons/)
- 이미지 확장자 : [http://jinyongjeong.github.io/2016/05/29/image_type/](http://jinyongjeong.github.io/2016/05/29/image_type/)
- JPEG - 네이버 지식백과 : [https://terms.naver.com/entry.naver?docId=3573114&cid=59088&categoryId=59096](https://terms.naver.com/entry.naver?docId=3573114&cid=59088&categoryId=59096)
- SVG - 생활코딩 : [https://www.opentutorials.org/course/2418/13666](https://www.opentutorials.org/course/2418/13666)
- 아이콘 폰트를 SVG로 대체하기 : [https://brunch.co.kr/@ultra0034/70](https://brunch.co.kr/@ultra0034/70)
