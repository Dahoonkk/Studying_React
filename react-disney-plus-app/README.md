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
