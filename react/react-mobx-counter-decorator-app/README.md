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