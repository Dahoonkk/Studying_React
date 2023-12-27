# Recoil를 이용한 간단한 앱 만들기

<details>
<summary>Recoil이란?</summary>

### Recoil이란?

- Recoil은 React 애플리케이션을 위한 상태 관리 라이브러리이다.
- Reciol은 Github에 14,000개 이상의 별이 있는 오픈 소스 상태 관리 라이브러리이며 Facebook의 소프트웨어 엔지니어인 Dave McCabe가 발명했다.
- React 애플리케이션의 모든 구성 요소가 상태를 쉽게 공유할 수 있도록 전영 상태를 제공하며 Redux에 비해 최소화된다.
- Facebook에서 만들긴 했지만 리액트 상태 관리를 위한 official 라이브러리는 아니다.

### Recoil 장점

- Redux를 사용할 때처럼 초반 설정을 위한 복잡한 BoilerPlate 코드를 작성하는 부분이 최소화됐습니다.
- 비록 리액트 official 상태 관리 라이브러리는 아니지만 페이스북에서 만들어진 것이기 때문에 리액트와 호환이 잘되도록 만들어졌다.
</details>

<details>
<summary>Recoil을 이용한 간단한 앱 만들기</summary>

### Recoil 설치

```bash
npm install recoil --save
```

### Recoil Root

- recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot가 필요하다.
- 루트 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소이다.

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
```

### Atom

- Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다.
- atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다. 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생할 것이다.

```javascript
export const textState = atom({
  key: "textState", // 고유한 key 값(보통 해당 atom을 생성하는 변수 명으로 지정)
  default: "", // atom의 초기값을 정의. 정적인 값(int, string...), 다른 atom의 값으로 설정할 수 있다.
});

function App() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
```

- 컴포넌트가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 아래와 같이 사용하면 된다.

```javascript
const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};
```

### Selector

- Selector는 atom 혹은 다른 Selector 상태를 입력받아 동적인 데이터를 반환하는 순수 함수이다.
- Selector가 참조하던 다른 상태가 변경되면 이도 같이 업데이트되며, 이때 Selector를 바라보던 컴포넌트들이 리 렌더링 되는 것이다.

```javascript
export const charCountState = selector({
  key: "charCountState", // 고유한 key 값
  get: ({ get }) => {
    // Selector 순수 함수. 사용할 값을 반환하며, 매개변수인 콜백 객체 내 get() 메서드로 다른 atom 혹은 selector를 참조한다.
    const text = get(textState);

    return text.length;
  },
});

function App() {
  return (
    <div style={{ padding: 16 }}>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
```

- 이제 우리는 useRecoilValue() Hook을 사용해서 charCountState 값을 읽을 수 있다.

```javascript
const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count} </>;
};

export default CharacterCount;
```

</details>
