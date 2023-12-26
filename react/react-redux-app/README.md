# Redux를 이용한 간단한 앱 만들기(미들웨어 없이 리덕스 카운터 앱 만들기)

<details>
<summary>리덕스(Redux)란?</summary>

### 리덕스(Redux)란?
- Redux is a predictable state container for JavaSciprt apps.
- 자바스크립트 애플리케이션을 위한 상태 관리 라이브러리이다.

### Props vs State
1. Props
   - properties의 줄임말
   - Props는 구성 요소가 서로 통시하는 방법이다.
   - Props는 상위 구성 요소에서 아래쪽으로 흐른다.
   - 해당 값을 변경하려면 자식 관점에서 Props을 변경 할 수 있는지? -> 부모는 내부 상태를 변경해야 한다.
```javascript
<ChatMessages
    message={message}
    currentMember={member}
/>
```

2. State
   - parent component에서 child component로 data를 보내는게 아닌 그 component 안에서 데이터를 전달하려면? State 활용
     - 예를 들어 검색 창에 글을 입력할 때 글이 변하는 것은 state를 바꿈
   - State가 변하면 re-render 된다.
```javascript
state = {
    message: '',
    attachFile: undefined,
    openMenu: false,
}
```

#### React는 State를 관리하는 것
- redux를 활용하면 store에 상태를 저장하고 이 것을 가져와 사용하면서 상태 관리를 보다 효율적으로 할 수 있다.

### Redux 데이터 Flow(strict unidirectional data flow)
![Alt text](image.png)
- ACTION : ACTION은 간단한 JavaScript 객체이다. 여기에는 우리가 수행하는 작업의 유형을 지정하는 'type' 속성이 있으며 선택적으로 redux 저장소에 일부 데이터를 보내는 데 사용되는 'payload' 속성을 가질 수도 있다.
```json
{ type: 'LIKE_ARTICLE', articleId: 42}
{ type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Mary' }}
{ type: 'ADD_TODO', text: 'Read the Redux docs.' }
```
- REDUCER : 리듀서는 애플리케이션 상태의 변경 사항을 결정하고 업데이트된 상태를 반환하는 함수이다. 그들은 인수로 조치를 취하고 store 내부의 상태를 업데이트 한다.
```javascript
{previousState, action} => nextState
```
- 이전 State와 action object를 받은 후에 next state를 return 한다.

#### Reducer는 pure function이기에 reducer 내부에서 하지 말아야 할 것들!!
- Mutate its arguments
- Perform side effects like API calls and routing transitions
- Call non-pure function, e.g. Data.now() or Math.random().

<br/>
-Redux Store : 이들을 하나로 모으는 객체 저장소는 애플리케이션의 전체 상대 트리를 보유한다. 내부 상태를 변경하는 유일한 방법은 해당 상태에 대한 Action을 전달하는 것이다. Redux Store는 클래스가 아니며, 몇 가지 Methods가 있는 객체일 뿐이다.
</details>

<details>
<summary>미들웨어 없이 리덕스 카운터 앱 만들기</summary>


</details>