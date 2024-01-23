# Node.js 모듈 시스템

<details>
<summary>Module이란?</summary>

### 모듈이란 무엇인가?

- Node.js에서 module은 필요한 함수들의 집합을 의미한다.
- 사용하고자 하는 모든 기능을 다 자신이 처음부터 만들어서 사용할 수 없기 때문에 누군가가 이미 만들어 놓은 모듈을 이용해서 사용할 수 있다.
- Node.js에서 제공해주는 많은 모듈들을 손쉽게 사용할 수 있다.
- 또한 직접 모듈을 만들어서 사용할 수도 있다.
- 이러한 모듈을 가져와서 사용할 때는 require 함수를 이용해서 다른 모듈들을 가져올 수 있다.

### 모듈 종류

- Core Module
- Local Module
- Third Party Module

### 모듈을 불러오는 법

```javascript
const module = require("module_name");
```

- require() 함수를 이용해서 자바스크립트 파일을 읽고 그 파일을 실행시켜 객체를 반환한다.
- 이렇게 모듀을 가져와서 변수 또는 상수에 할당해서 사용할 수 있다.
  ![Alt text](readme_img/image.png)

</details>

<details>
<summary>HTTP 서버 구축하기</summary>

### HTTP 모듈 이용하기

- Node.js Built-in 모듈 중에서 HTTP 모듈을 이용해서 서버를 구현해보자.
- 아래와 같이 3000번 포트를 이용하여 로컬 호스트에 브라우저로 접근하면 Hello, World!라는 문구가 나오게 해보면
  ![Alt text](readme_img/image-1.png)

```javascript
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
```

- req은 요청 세부 정보를 제공한다.
  - 이를 통해 요청 헤더 및 요청 데이터에 액세스한다.(http.IncomingMessage 객체)
- res는 클라이언트에 반환할 데이터를 채우는데 사용된다.(http.ServerResponse 객체)
- res.status 코드 = 200;
  - 성공적인 응답을 나타내기 위해 statusCode 속성을 200으로 설정한다.
- Content-Type 헤더도 설정한다.
  - res.setHeader('콘텐츠 유형', '텍스트/html');
  - 그리고 end()에 대한 인수로 내용을 추가하여 응답을 종료한다.

</details>

<details>
<summary>모듈을 사용하는 이유</summary>

### 모듈들이 모엿 프로그램이 이루어진다.

![Alt text](readme_img/image-2.png)

- 이때 모듈 사용의 장점으로는
  - 존재하는(이미 작성한) 코드를 재사용할 수 있다.
  - 관계가 있는 코드끼리 모아 놓아서 코드를 정리할 수 있다.
  - 관계없는 디테일한 부분은 숨기고 직접 사용되는 코드만 가져와서 보여줄 수 있다.(해당 모듈 전체를 가져오는게 아닌 특정 함수나 변수, 클래스만을 가져와서 사용한다.)

</details>

<details>
<summary>모듈 생성하기</summary>

### HTTPS 모듈 생성하기

- 주로 모듈은 이미 만들어져 있는 것을 이용하지만 직접 만들어서 사용할 수도 있다.
- HTTPS 모듈을 생성해보자.

#### Https 모듈

![Alt text](readme_img/image-3.png)

#### 모듈을 위한 파일 생성

![Alt text](readme_img/image-4.png)

#### https.js

```javascript
function makeRequest(url, data) {
  // 요청을 보내기
  // 데이터를 return 하기
}
```

#### request.js

- 데이터를 암호화해서 특정 경로에 요청을 보냄

```javascript
function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`${encryptedData} is being sent to ${url}`);
}
```

#### response.js

- 암호화돼서 온 결과 데이터를 복호화하기

```javascript
function decrypt(data) {
  return "decrypted data";
}

function read() {
  return decrypt("data");
}
```

#### module 키워드를 이용하여 필요한 함수 가져오기

- https에서 request에 있는 함수와 response에 있는 함수를 가져와야 한다.
  ![Alt text](readme_img/image-5.png)

#### 모듈 완성하기

```javascript
const request = require("./request");
const response = require("./response");

function makeRequest(url, data) {
  // 요청을 보내기
  request.send(url);
  //데이터를 return 하기
  return response.read();
}

const responseData = makeRequest("https://naver.com", "any data");
console.log("responseData", responseData);
```

</details>

<details>
<summary>모듈에서 exports 하는 방법</summary>

</details>
