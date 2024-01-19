# Node.js의 내부

<details>
<summary>Node..js가 작업을 처리하는 방법</summary>

> 런타임 환경에서 1+1 같은 자바스크립트로 처리할 수 있는 작업은 v8 엔진을 통해서 하게 된다. <br/>
> 하지만 파일을 읽는 것과 같은 작업은 v8 엔진으로 할 수 없다. <br/>
> 그래서 이러한 부분은 libuv를 통해서 작업한다.

![Alt text](readme_img/image.png)

![Alt text](readme_img/image-1.png)

#### 만약 인터넷에 있는 어떤 파일을 다운로드해야 한다면?
![Alt text](readme_img/image-2.png)

---

### 간단 요약
- v8이 코드를 해석하고 Node.js APIs들 중 하나의 함수를 호출하고 Node.js 바인딩을 통해 libuv에 의해 원하는 작업을 처리하게 된다.
![Alt text](readme_img/image-3.png)

</details>

<details>
<summary>libuv</summary>

### libuv(유티콘 벨로시티랩터 라이브러리)
- 이벤트 루프를 기반으로 하는 비동기 I/O에 대한 지원을 제공하는 다중 플랫폼 C 라이브러리이다.
- 주로 Node.js에서 사용하도록 개발되었지만 Julia, Luvit, pyuv 등과 같은 다른 도구에서도 사용된다.
- Node.js는 이 라이브러리를 사용하여 지원되는 모든 플랫폼에서 통합 인터페이스로 I/O 작업을 추상화한다.
- 즉 libuv를 쓰면 각 플랫폼(window, mac, linux,...)의 가장 빠른 비동기 IO 인터페이스로 통일된 코드로 돌릴 수 있는 장점이 있따.

</details>