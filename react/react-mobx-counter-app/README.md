# Mobx를 이용한 간단한 앱 만들기

<details>
<summary>Mobx란?</summary>

### [Mobx란?](https://ko.mobx.js.org/README.html)
- react에서 redux 이후로 많이 사용되는 상태 관리 라이브러리이다.
- 간단하고 확장 가능한 상태 관리가 가능하며, 쉽고 확장성 있게 만들어 주는 검증된 라이브러리이다.

### 특징
![Alt text](image.png)

#### 원래는 @데코레이터를 사용했지만 mobx 6부터는 데코레이터 사용을 지양하는 중이다.

### mobx 작동 원리
![Alt text](image-1.png)
```javascript
import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Timer {
  secondPassed = 0 // observable state 변경

  constructor() {
    makeAutoObservable(this)
  };

  increase() { // 액션 Triggered
    this.secondPassed += 1
  };

  reset() {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer()

// observable state를 사용하는 사용자 인터페이스를 구축합니다.
const TimerView = observer(({ timer }) => ( // 변경사항에 따른 리 렌더링
  <button onClick={() => timer.reset()}>Second passed: {timer.secondPassed}</button>
))

ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// 매초마다 Seconds passed: X를 업데이트 한다. 
setInterval(() => { // 이벤트 발생
  myTimer.increase()
}, 1000)
```
- 모든 이벤트(onClic, setInterval)는 observable state(myTimer.secondsPassed)를 변경시키는 action(myTimer.increase, myTimer.reset)을 호출한다. 
- observable state의 변경 사항은 모든 연산과 변경사항에 따라 달라지는 부수 효과(TimerView)에 전파된다.

### 애플리케이션 상태를 모델링
- observable : state를 저장하는 추적 가능한 필드를 정의한다.
- action : state를 수정하는 메서드를 표시한다.
- computed : state로부터 새로운 사실을 도출하고 그 결괏값을 캐시 하는 getter를 나타낸다.
- makeObservable : 속성(property),모든 객체, 배열, map과 set은 observable로 설정될 수 있다. 객체를 observable로 만드는 가장 기본적인 방법은 makeObservable를 사용하여 속성마다 주석을 지정하는 것이다.

```javascript
constructor() {
  makeObservable(this, {
    count: observable,
    isNegative: computed,
    increase: action,
    decrease: action
  })
};

get isNegative() {
  return this.count < 0 ? 'Yes' : 'No'
}

increase() {
  this.count += 1;
}

decrease() {
  this.count -= 1;
}
```

#### observer
- Observer HoC는 렌더링 중에 사용되는 모든 Observable에 React 구성 요소를 자동으로 구독한다. 결과적으로 관련 observable 항목이 변경되면 Component가 자동으로 다시 렌더링된다.
- 또한 관련 변경 사항이 없을 때 Component가 다시 렌더링되지 않도록 한다.
- 따라서 Component에서 액세스할 수 있지만 실제로 읽지 않는 Observable은 다시 렌더링되지 않는다.
- 그리고 observer를 사용하기 위해선 mobx-react나 mobx-react-lite를 설치해줘야 한다.
</details>

