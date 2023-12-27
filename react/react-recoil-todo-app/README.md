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
  </details>
