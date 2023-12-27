# Decorator를 활용하여 Mobx 앱 만들어보기

<details>
<summary>Mobx로 카운터 앱 만들기(데코레이터 사용해보기)</summary>

### 데코레이터를 사용하여 카운터 앱 만들기
- Mobx 6 이전에는 observable, computed, action을 표시하기 위해 Es.next 데코레이터를 사용하도록 권장했다.
- 그러나 데코레이터는 현재 ES 표준이 아니며 표준화 과정에도 오랜 시간이 소요되고 있다.
- 또한 표준화되는 데코레이터는 기존의 시행되었던 방식과 다를 것으로 보인다.
- Mobx 6 에서는 호환성을 위해 데코레이터에서 벗어나 makeObservable / makeAutoObservable을 사용할 것을 권장한다.
- 그러나 기존의 많은 코드베이스와 온라인 문서 및 튜토리얼 자료에서 데코레이터를 상하고 있다.
- observable, action, computed와 같이 makeObservable의 주석으로 사용할 수 있는 것은 무엇이든 데코레이터로 사용할 수 있다는 것이 규칙이다.
  - Mobx 6 부터 데코레이터 사용을 지양하지만, 이미 너무 많은 코드베이스와 튜토리얼이 데코레이터를 사용하기에 mobx 6에서 데코레이터 사용법을 익혀두면 좋다.

### [데코레이터](https://ko.mobx.js.org/enabling-decorators.html) 지원 활성화하기
- Mobx를 사용하는 새로운 코드베이스는 언어의 공식 파트가 될 때까지 데코레이터를 사용하는 것을 권자앟지 않지만, 사용할 수는 있다.
- 변환을 위한 설정이 필요하므로 Babel 또는 Typescript를 사용해야 한다.

#### Typescript
- tsconfig.json에서 "experimentalDecorators": true 와 "useDefineForClassFields": true 컴파일러 옵션을 활성화

#### Babel 7
- npm i --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators 로 데코레이터 지원 패키지를 설치한 후, babelrc 파일에서 활성화(순서를 지켜줘야 함)


### 자바스크립트에서 데코레이터 사용하는 법
- Mobx 6 이전에는 생성자에서 makeObservable(this) 호출이 요구되지 않았지만 6버전 이후로는 다르다.
- 해당 호출을 통해 데코레이터 구현이 더 간단해지고 호환성이 높아졌기 때문이다.
- observer : obervable state의 업데이트에 따라 컴포넌트를 자동으로 업데이트
```javascript
import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
export class App extends Component {
  render() {
    const myCounter = this.props.counter;
    
    return (
      <div style={{ textAlign: 'center', padding: 16}}>
        카운트: {myCounter.count}
        <br/><br/>
        마이너스?: {myCounter.isNegative}
        <br/><br/>
        <button onClick={() => myCounter.increase()}>+</button>
        <button onClick={() => myCounter.decrease()}>-</button>
      </div>
    )
  }
}

export default App
```
</details>

<details>
<summary>React Context를 이용한 Observable 공유하기</summary>

- React Context는 전체 하위 트리와 observable을 공유하는 훌륭항 메커니즘이다.
- 현재 상태에서 mobx의 observable 값을 여러 컴포넌트에 주려면 아래와 같이 하면 된다.
```javascript
root.render(
  <React.StrictMode>
    <App myCounter={store} />
    <BComponent myCounter={store} />
    <CComponent myCounter={store} />
  </React.StrictMode>
)
```

- 하지만 위의 방법은 필요할 때마다 추가해줘야한다는 번거로움이 있다.
- 따라서 이러한 방법 대신 React Context를 이용하면 Provider로 감싼 전체 하위 트리의 컴포넌트에 observable을 공유할 수 있다.
```javascript
import { observer } from 'mobx-react-lite'
import { createContext, useContext } from "react"

const TimerContext = createContext<Timer>() // Context 생성

const TimerView = observer(() => { // Context에 있는 값을 가져와서 사용하기
  // 컨텍스트에서 타이머를 가져옴
  const timer = useContext(TimerContext) // 위의 타이머 정의를 참고
  return (
    <span>Seconds passed: {timer.secondsPassed}</span>
  )
})

ReactDOM.render( // Context Provider로 감싸주기
  <TimerContext.Provider value={new Timer()}> // 공유할 value 넣어주기
    <TimerView />
  </TimerContext.Provider>
)

/*
Provider의 값을 다른 값으로 바꾸지 않는 것이 좋다.
Mobx를 사용하면 공유되는 observable이 자동으로 업데이트 되므로 Provider의 값을 다른 값으로 바꿀 필요가 없다.
*/
```
[실습은 react-mobx-counter-app에서 진행](https://github.com/Dahoonkk/Studying_React/tree/main/react/react-mobx-counter-app)
</details>