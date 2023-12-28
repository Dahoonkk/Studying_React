# Zustand를 이용한 간단한 앱 만들기

<details>
<summary>Zustand란?</summary>

### [Zustand](https://github.com/pmndrs/zustand)란?
- 간소화된 Flux 원칙을 사용하는 작고 빠르고 확장 가능한 barebone 상태 관리 솔루션이다.
- 'Zustand'는 독일어로 'State'를 뜻한다.
- Zustand는 Jotai 및 React 스프링 개발자가 구축한 빠르고 확장 가능한 상태 관리 솔루션이다

### Zustand 특징
- 상용구 코드 감소
- Zustand는 상태 값이 변경될 때만 구성 요소를 렌더링한다. 구성 요소를 다시 렌더링하지 않고도 상태 변경을 처리할 수 있는 경우가 많다.
- 상태 관리는 중앙 집중식이며 단순하게 정의된 작업을 통해 업데이트된다. 이 점에서 Redux와 유사하지만 개발자가 상태를 처리하기 위해 Reducer, Action 및 Dispatch를 만들어야 하는 Redux와 달리 Zustand는 훨씬 쉽다.
- Hooks를 사용하여 상태를 사용한다.
- 컨텍스트 제공을 사용할 필요가 없어 깨끗한 코드를 제공하므로 코드가 더 짧고 가독성이 높아진다.

### Zustand를 활용한 카운터 앱 만들기
#### Store 생성하기
- 먼저 Store를 생성해서 그 안에 원하는 값과 그 값을 업데이트 해주는 함수를 넣어준다.
- Store는 Hooks로 되어 잇따.
- 이 Store에는 객체, 함수 등 무엇이든 넣을 수 있다.
- store를 생성할 때는 create 메서드를 사용하여 선언한다.
- set 함수는 상태를 변경한다.
```javascript
import create from 'zustand';

export const useCounterStore = create((set) => ({
    count:1, 
    inc: () => set((state) => ({count: state.count + 1}))
}))
```

#### Counter 컴포넌트 생성 및 Store 이용하기
```javascript
// Counter.js
import { useCounterStore } from "../store"

export default function Counter() {
    const { count, inc, dec } = useCounterStore();
    return (
        <div className="counter">
            <p>{count}</p>
            <button onClick={inc}>one up</button>
            <button onClick={dec}>one down</button>
        </div>
    )
}

// App.js
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter />
            </header>
        </div>
    )
}
```
</details>

<details>
<summary>Zustand로 Todo App 구현하기(store 생성)</summary>

### useTodoStore 생성
```javascript
export const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todoText) => set((state) => ({
        todos: [
            ...state.todos,
            {
                text: todoText,
                id: getId(),
                isCompleted: false
            }
        ]
    })),
    deleteTodo: (todoId) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== todoId)
    })),
    completeTodo: (todoId) => set((state) => ({
        todos: state.todos.map((todo) => {
            if(todo.id === todoId) {
                return {
                    ...todo,
                    isCompleted: true
                }
            }
        })
    }))
}));

let id = 0;
function getId() {
    return id++;
}
```
</details>