# Redux-Toolkit App 만들어보기

<details>
<summary>리덕스 툴킷(Redux Toolkit)</summary>

### 리덕스 툴킷
- 리덕스 툴킷은 리덕스 로직을 작성하기 위한 공식 권장 접근 방식이다.
- 리덕스 코어를 둘러싸고 있으며 리덕스 앱을 빌드하는 데 필수적이라고 생각하는 패키지와 기능이 포함되어 있다.
- 리덕스 툴킷은 제안된 모범 사례를 기반으로 하여 대부분의 리덕스 작업을 단순화하고 일반적인 실수를 방지하고 리덕스 애플리케이션을 더 쉽게 작성할 수 있도록 한다.

[* 리덕스 툴킷으로 만들어진 카운터 앱 살펴보기](https://redux-toolkit.js.org/tutorials/quick-start)

#### 구성 방법
```bash
npx create-react-app my-app --template redux-typescript
```

![Alt text](image.png)
```bash
npm install @reduxjs/toolkit react-redux
```

### Store 생성하기
```typescript
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
})
```
![Alt text](image-1.png)

### React에 Redux 스토어 제공
- 저장소가 생성되면 src/index.js에서 애플리케이션 주위에 React-Redux<Provider>를 배치하여 React 구성 요소에서 사용할 수 있도록 할 수 있다.
- 방금 만든 Redux 저장소를 가져오고 주위에 <Provider>를 배치하고 저장소를 prop으로 전달한다.
```typescript
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    document.getElementById('root')
)
```

### Redux State Slice 생성(Reducer)
- src/features/counter/counterSlice.js라는 새 파일을 추가한다.
- 해당 파일에서 Redux Toolkit의 createSlice API를 가져온다.

### 스토어에 Slice Reducer 추가
- 다음으로 카운터 슬라이스에서 리듀서 함수를 가져와서 스토어에 추가해야 한다.
- 리듀서 매개변수 내부에 필드를 정의함으로써 스토어에 이 슬라이스 리듀서 함수를 사용하여 해당 상태에 대한 모든 업데이트를 처리하도록 지시한다.

### React 컴포넌트에서 Redux State 및 Action 사용
- useSelector : useSelector를 사용하여 저장소에서 데이터를 읽는다.
- useDipatch : useDispatch를 사용하여 Action을 전달할 수 있다.
</details>

<details>
<summary>리덕스 툴킷 더 자세히 알아보기(APIs)</summary>
</details>