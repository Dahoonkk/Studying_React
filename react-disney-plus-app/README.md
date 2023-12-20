# 디즈니 플러스 클론 코딩

<details>
<summary>The Moive DB API 요청을 위한 Axios 인스턴스 생성 및 요청 보내기</summary>

### Axios란 무엇인가?

- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.
- 쉽게 말해 백엔드랑 프론트엔드 통신을 쉽게 하기 위해 Ajax와 더불어 사용한다.
- fetch보다 훨씬 더 많이 사용됨(기능이 많고 바로 Json으로 받을 수 있음)

#### Axios 사용 방법

- axios 모듈 설치

```bash
npm install axios --save
```

#### Axios 인스턴스화 하는 이유

- 중복된 부분을 계속 입력하지 않아도 되기 때문에

#### Axios 인스턴스 만드는 순서

1. 인스턴스 생성할 폴더 파일 생성
2. axios.js 파일 생성

```javascript
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "my key",
    language: "ko-KR",
  },
});

export default instance;
```

</details>
<details>
<summary>Styled Component에 대해 알아보기</summary>

### Styled Component란?

- Styled Component란 Css-in-JS라고 하는 Javascript 파일 안에서 CSS를 처리할 수 있게 해주는 대표적인 라이브러리이다.

#### 설치 방법

```bash
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

</details>

<details>
<summary>CSS 관련</summary>

### Position 속성

- 태그를 어떻게 위치시킬지를 정의하며, 아래의 5가지 값을 갖는다.
  - static : 기본값, 다른 태그와의 관계에 의해 자동으로 배치되며 위치를 임의로 설정해 줄수 없다.
  - relative : 요소 자기 자신을 기준으로 배치(원래 있던 위치를 기준으로 좌표를 지정한다.)
  - absolute : 부모(조상) 요소를 기준으로 배치.(절대 좌표와 함께 위치를 지정해 줄 수 있다.)부모 요소에 position: static이 아닌 것이 있으면 그것을 기준으로 배치한다. 하지만 position: static이 아닌 것이 없다면 body를 기준으로 배치한다.
  - fixed : 스크롤과 상관없이 항상 문서 최 좌측 상단을 기준으로 좌표를 고정한다.(스크롤이 있을 때 스크롤을 내리면 해당 요소도 같이 내려간다.)
  - sticky : 스크롤 영역 기준으로 배치한다.

### 가상요소 ::before ::after

- 가상 클래스(Pseudo-Class)는 별도의 class를 지정하지 않아도 지정한 것처럼 요소를 선택할 수 있다.
- 가상 요소(Pseudo-Element)는 가상 클래스처럼 선택자(selector)에 추가되며, 존재하지 않는 요소를 존재하는 것처럼 부여하여 문서의 특정 부분 선택이 가능하다.

  - ::before : 요소의 콘텐츠 시작부분에 생성된 콘텐츠를 추가한다.
  - ::after : 요소의 컨텐츠 끝 부분에 생성된 콘텐츠를 추가한다.
  - ::before와 ::after는 꼭 'content'와 같이 사용되야 한다. -> 이 content는 가짜 속성이다.
  - HTML 문서에 정보로 포함되지 않은 요소를 CSS에서 새롭게 생성시켜주는 역할을 한다.

</details>

<details>
<summary>async await</summary>

- Promise{<pending>}이라고 나오는 이유는?
  ![Alt text](image.png) - 비동기 처리하는 중이기 때문

#### 해결 방법은??

- 아직 Response가 오지 않은 (Pending) 한 상태가 아닌 결과값을 받은 이후에 값을 처리해주면 된다.

  1. async request .then
  2. async await

![Alt text](image-1.png)

 </details>
