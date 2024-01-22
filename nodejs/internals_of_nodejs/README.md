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
- 즉 libuv를 쓰면 각 플랫폼(window, mac, linux,...)의 가장 빠른 비동기 IO 인터페이스로 통일된 코드로 돌릴 수 있는 장점이 있다.
- 이 라이브러리는 파일 시스템, DNS, 네트워크, 파이프, 신호 처리, 폴링 및 스트리밍을 처리하는 메커니즘을 제공한다.

### [libuv](https://github.com/libuv/libuv) 오픈 소스 코드에서 어떤 식으로 돌아가는지 살펴보면
![Alt text](readme_img/image-4.png)
- 원래 unix랑 window와 파일을 컨트롤하는 방법이 다르지만 이런 식으로 libuv에서 서로 compatible 하게 해주기 때문에 노드를 사용하는 사람은 따로 신경 쓰지 않고 unix, window에서 같은 방법으로 사용할 수 있다.

</details>

<details>
<summary>비동기와 동기란?</summary>

1. 동기 : Synchronous 시간을 맞춤
2. 비동기 : Asynchronous 시간을 맞추지 않음

#### 동기와 비동기의 차이점
- 동기는 먼저 이전의 것이 끝나야 다음 것을 할 수 있지만 비동기는 1번을 하면서 2번을 할 수 있고, 3번, 4번도 할 수 있다.
![Alt text](readme_img/image-5.png)

### 코드로 보는 ASYNC & SYNC

#### SYNC
```javascript
console.log('1');
console.log('2');

/* node test.js
1
2
*/
```

#### ASYNC
```javascript
setTimeout(() => {
    console.log('1')
}, 1000);
console.log('2')

/* node test.js
2
1
*/
```

### Node.js에서 비동기를 주로 사용함
- Node.js에서 비동기를 주로 사용한다.
- 데이터베이스에서 데이터를 읽을 때, 저장할 때, 지울 때 등 대부분의 요청이 비동기로 이루어진다.
  - 대부분의 작어빙 어느 정도의 시간을 요하기 때문
- 이로 인해 여러 개의 작업을 해도 다른 작업을 기다리지 않고 빠르게 여러 작업을 처리할 수 있다.

</details>

<details>
<summary>Javascript는 Synchronous 언어</summary>

### Javascript는 동기 언어이다.
- 자바스크립트는 한 줄 실행하고 또 다음 줄 실행하는 동기 언어이다.
- 하지만 콜백 함수를 힐행하는 비동기 코드를 자주 사용하는데 이는 어떻게 된 것일까?
```javascript
setTimeout(() => {
    console.log('1')
}, 1000);
console.log('2')
```
- 위의 코드를 보면 setTimeout은 사실 자바스크립트의 부분이 아니다.
- 브라우저에서 사용 할 경우 브라우저 api(window object)를 사용하고, Node에서 사용할 경우 Node api(global object)를 사용하는 것이다.
- 결과적으로 자바스크립트는 비동기처럼 사용할 수 있지만, 다른 것의 도움을 받아 비동기 처리를 하는 것이다.

</details>