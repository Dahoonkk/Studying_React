# Recoil을 이용한 Todo 앱 만들기

<details>
<summary>Todo 앱 만들기</summary>

### TodoItemCreator()

- 새로운 todo 아이템을 생성하기 위해 우리는 todoListState 내용을 업데이트하는 setter 함수에 접근해야 한다.
- 우리는 TodoItemCreator 컴포넌트의 setter 함수를 얻기 위해 useSetRecoilState() 훅을 사용할 수 있다.

  - useRecoilState() : useState()와 유사하며 [state, setState] 튜플을 반환한다. 인자에 Atoms 혹은 Selector를 넣어준다.
  - useRecoilValue() : 전역 상태의 state 상태 값만을 참조하기 위해 사용된다. 선언된 변수에 할당하여 사용하면 된다.
  - useSetRecoilState() : 전역 상태의 setter 함수만을 활용하기 위해 사용된다. 선언된 함수 변수에 할당하여 사용하면 된다.
  - useResetRecoilState() : 전역 상태를 default(초기값)으로 Reset 하기 위해 사용된다. 선언된 함수 변수에 할당하여 사용하면 된다.

### todoList Data

- 우리는 useRecoilValue() 훅을 사용해서 todoListState 값을 읽을 수 있다.

```javascript
function App() {
    const todoList = useRecoilValue(todoListState);
    return (
        <div className="App">
            <TodoItemCreator />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem}>
            ))}
        </div>
    )
}
```

### TodoItem

- TodoItem 컴포넌트는 todo 리스트의 값을 표시하는 동시에 텍스트를 변경하고 항목을 삭제할 수 있다.
- 우리는 todoListState를 읽고 항목 텍스트를 업데이트하고, 완료된 것으로 표시하고, 삭제하는 데 사용하는 setter 함수를 얻기 위해 useRecoilState()를 사용한다.

</details>

<details>
<summary>Todo List 필터링하기</summary>

### Filtering 된 Todo 리스트 구현
- 필터링된 todo 리스트를 구현하기 위해서 우리는 atom에 저장될 수 있는 필터 기준을 선택해야 한다.
- 우리가 사용하게 될 필터 옵션은 "Show All", "Show Completed"와 "Show Uncompleted"가 있다.
- 기본값은 "Show All"이 될 것이다.

#### atom 구성
```javascript
import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  defaultValue: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  defaultValue: 'Show All'
})
```

- todoListFilterState와 todoListState를 사용해서 우리는 필터링된 리스트를 파생하는 filterdTodoListState selector를 구성할 수 있다.

```javascript
export const filteredTodoListState = atom({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch(filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        };
    }
})
```
- filteredTodoListState는 내부적으로 2개의 의존성 todoListFilterState와 todoListState을 추적한다.
- 그래서 둘 중 하나라도 변하면 filteredTodoListState는 재 실행된다.

#### Filtering 된 Todo 리스트를 보여주기
```javascript
function App() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <div className="App">
            <TodoItemCreator />
            {todoList.map((todoItem) => {
                <TodoItem key={todoItem.id} item={todoItem} />
            })}
        </div>
    )
}
```
</details>

<details>
<summary>통계 기능 추가하기</summary>

### 몇 가지 통계 기능 추가하기
- todo 항목들의 총 개수
- 완료된 todo 항목들의 총 개수
- 완료되지 않은 todo 항목들의 총 개수
- 완료된 항목의 백분율
- 각 통계에 대해 selector를 만들 수 있지만, 필요한 데이터를 포함하는 객체를 반환하는 selector 하나를 만드는 것이 더 쉬운 방법일 수 있다.
- 우리는 이 selector를 'todoListStatsState'라고 부를 것이다.
```javascript
export const todoListStatsState = selector({
    key: 'todoLIstStateState',
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUnCompletedNum = totalNum - totalCompletedNum
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUnCompletedNum,
            percentCompleted,
        }
    }
})
```

#### 통계 데이터 표시하기
```javascript
import React from 'react'
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../todoAtoms';

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUnCompletedNum,
        percentCompleted,
      } = useRecoilValue(todoListStatsState);

      const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUnCompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}

export default TodoListStats
```
</details>

<details>
<summary>비동기 데이터 쿼리</summary>

### Selector를 이용해서 비동기 요청을 한 데이터를 전역 상태에 넣어주기
- selector는 기본적으로 값을 자체적으로 캐싱한다.
- 만약 입력된 적 있는 값이라면 그 값을 기억하고, 이 값이 다시 호출되면 이전에 캐싱된 결과를 바로 보여주기 때문에 비동기 데이터를 다루는 측면에서 유리하다.
- 유저 데이터 같은 데이터는 애플리케이션을 만들 때 많은 컴포넌트에서 사용되기 때문에 전역 상태로 관리하면 좋다.
- 그래서 유저 데이터를 데이터베이스에서 가져올 때 Selector를 이용해서 전역 상태에 넣어줘보자.

#### User를 위한 Atom 파일 생성
```javascript
import {atom, selector} from "recoil";
import axios from "axios";

export const currentUserIdState = atom({
    key: 'currentUserIdState',
    default: 1
})

export const currentUserNameQuery = selector({
    key: 'currentUserName',
    get: async({get}) => {
        const path = "https://jsonplaceholder.typicode.com/users/"
        const response = await axios.get(`${path}~{get(currentUserIdState)}`)
        return response.data.name;
    }
})
```
- 만약 user의 이름이 쿼리 해야 하는 데이터베이스에 저장되어 있었다면, Promise를 리턴하거나 혹은 async 함수를 사용하기만 하면 된다.
- 의존성에 하나라도 변경점이 생긴다면, selector는 새로운 쿼리를 재평가하고 다시 실행시킬 것이다.
- 그리고 결과는 쿼리가 유니크한 인풋이 있을 때에만 실행되도록 캐시 된다.

#### 비동기 요청의 결과 보여주기
```javascript
import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { filteredTodoListState, todoListState } from "./todoAtoms";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";
import { currentUserNameQuery } from "./userAtoms";

function App() {
  // const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log(filteredTodoList);

  return (
    <div className="App">
      <CurrentUserInfo />
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>
}
```

### React Suspense와 함께 사용
- React 렌더 함수가 동기인데 promise가 resolve 되기 전에 무엇을 렌더 할 수 있을까?
  - Recoil은 보류 중인 데이터를 다루기 위해 React Suspense와 함께 동작하도록 디자인되어 있다.
  - 컴포넌트를 Suspense의 경계로 감싸는 것으로 아직 보류 중인 하위 항목들을 잡아내고 대체하기 위한 UI를 렌더 한다.
```javascript
<Suspense fallback={<div>Loading...</div>}>
    <CurrentUserInfo />
</Suspense>
```
</details>