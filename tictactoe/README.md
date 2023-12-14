# Getting First React Project - TICTACTOE

<details>
<summary><strong>SPA(Single Page Application)이란?</strong></summary>

- 현재 App.js 파일의 소스 코드를 변경하면 변경한 부분이 화면에 바로 적용됨
  - 이러한 변화가 어떠한 순서로 실행되고 있는지 알아보면


#### ◇ public/index.html
- div 엘리먼트의 id를 root로 해놓았음
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
</html>
```

### ◇ src/index.js
- 자바스크립트의 시작점
- 여기서 위의 root id를 가진 div 엘리먼트를 잡아 줌
  - 그래서 엘리먼트 안에서 화면을 꾸밀 수 있게 된다.
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
```
### Single Page Application(SPA)
- 여기서 한 가지 의문점이 생길 수 있다.
- 그것은 index.html 템플릿이 하나면 한 개의 페이지를 만들 때는 괜찮은데 두 개 이상의 페이지를 만들 때는 어떤식으로 해야할까?
- 기존에는 a 페이지를 만들면 a.html b 페이지를 만들면 b.html과 같은 방식으로 만들었다.
  - 이와 같은 방식은 전통적인 웹 사이트를 만들 때 사용하는 Multi Page Application(MPA)이다.
- 하지만 요즘에는 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현한다.(Single Page Application; SPA)

### SPA에서 화면 변경은 어떻게 일어나나?
- 전통적인 웹 사이트의 경우 a page에서 b page로 페이지 전환할 때 a.html을 보여주다가 b.html을 보여 주면 됐지만 index.html 밖에 없는 SPA에서는 어떻게 페이지 전환(브라우징)을 해줄까?
  - 이는 HTML 5의 History API를 사용해서 가능하게 만든다.
  - 자바스크립트 영역에서 History API를 이용해서 현재 페이지 내에서 화면 이동이 일어난 것처럼 작동하게 해준다.
  - React-Router-Dom -> History API 사용

### History API
- History.back() : 세션 기록의 바로 뒤 페이지로 이동하는 비동기 메서드로 브라우저의 뒤로 가기를 누르는 것과 같은 효과를 낸다.
- History.forward() : 세션 기록의 바로 앞 페이지를 이동하는 비동기 메서드로 브라우저의 앞으로 가기를 누르는 것과 같은 효과를 낸다.
- History.go() : 특정한 세션 기록으로 이동하게 해 주는 비동기 메서드, 1을 넣어 호출하면 바로 앞 페이지로, -1을 넣어 호출하면 바로 뒤 페이지로 이동한다.
- History.pushState() : 주어진 데이터를 세션 기록 스택에 넣는다. 직렬화 가능한 모든 Javascript 객체를 저장하는 것이 가능하다.
- History.replaceState() : 최근 세션 기록 스택의 내용을 주어진 데이터로 교체한다.

</details>
<details>
<summary><strong>JSX 알아보기(Javascript Syntax Extension)</strong></summary>

- JSX는 자바스크립트의 확장 문법이다. 리액트에서는 이 JSX를 이용해서 화면에서 UI가 보이는 모습을 나타내줍니다.

```javascript
const simple = <h1>Hello World!</h1>;
```
- JSX를 이용하면 UI를 나타낼 때 자바스크립트(logic)와 HTML 구조(markup)를 같이 사용할 수 있기 때문에 기본 UI에 데이터가 변하는 것들이나 이벤트들이 처리되는 부분을 더욱 쉽게 구현할 수 있다.

### 리액트에서 JSX 사용은 의무인가?
- 의무는 아니지만 자바스크립트 안에서 UI 작업을 하는게 매우 편리하기 때문에 React를 사용할 때는 거의 모든 사람이 JSX를 사용한다.

### JSX사용하지 않을 경우 리액트에서 화면을 그리는 방식
- React.createElement API를 사용하여 엘리먼트를 생성한 후(객체가 됨) 이 엘리먼트를 In-Memory에 저장한다. 그리고 ReactDOM.render 함수를 사용하여 실제 웹 브라우저에 그려준다.

### JSX는 createElement를 쉽게 사용하기 위해 사용
- 모든 UI를 만들 때마다 createElement를 사용하여 컴포넌트를 만들 수는 없다. 그러기에 JSX를 사용한 후 그걸 바벨이 다시 createElement로 바꿔 사용한다.

### JSX를 사용 시 주의해야 할 기본적인 규칙
- JSX를 사용하면서 지켜줘야 할 규칙들이 있다.
- 가장 기본적인 것으로 JSX는 컴포넌트에 여러 엘리먼트 요소가 있다면 반드시 부모 요소 하나로 감싸줘야 한다.

```javascript
// 잘못된 코드
function hello() {
    return (
        <div>Hello World!</div>
        <div>Whatr are you doing?</div>
    )
}

// 올바른 코드
function hello() {
    return (
        <div>
            <div>Hello World!</div>
            <div>What are you doing?</div>
        </div>
    )
}
```
</details>

<details>
<summary>Props를 통해 컴포넌트 간 데이터 전달하기</summary>

### Props란?
- Props란 Properties의 줄임말로 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달하는 방법을 말한다.
- Props는 읽기 전용(immutable)으로 자녀 컴포넌트 입장에서는 변하지 않는다.
  - 변하게 하고자 하면 부모 컴포넌트에서 state를 변경시켜줘야 한다.

- 부모 Board 컴포넌트에서 자식 Square 컴포넌트 prop을 전달
```javascript
// Board.js
renderSquare(i) {
    return <Sqaure value={i}/>
}

// Square.js
export class Square extends Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}
```
</details>

<details>
<summary>State 추가하기</summary>

### React State란 무엇인가?
- 컴포넌트의 랜더링 결과물에 영향을 주는 데이터를 갖고 있는 객체
- State가 변경되면 컴포넌트는 리랜더링(Re-rendering)된다. 
- 또한 State는 컴포넌트 안에서 관리된다.

### Constructor
- constructor(생성자)를 사용하면 인스턴스화된 객체에서 다른 메서드를 호출하기 전에 수행해야 하는 사용자 지정 초기화를 제공할 수 있다.
- 아래 코드를 예시로 들면 클래스를 new를 붙여 (new User("John")) 인스턴스 객체로 생성하면 넘겨받은 인수와 함께 constructor가 먼저 실행된다.
  - 이 때 넘겨받은 인수인 John이 this.name에 할당된다.
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

let user = new User("John");
user.sayHi();
```

### TicTacToe State 사용해보기
```javascript
export class Square extends Component {
  // State 생성  
  constructor(props) {
    super(props);
    this.state = {
      value:null,
    };
  }
  
  render() {
    return (
      <button className="square" onClick={() => { this.setState({value:'X'})}}> // State 변경하기
        {this.state.value} // State 이용하기
      </button>
    )
  }
}
```
- React 컴포넌트는 생성자에 this.state를 설정하는 것으로 state를 가질 수 있다. 
- this.state는 정의된 React 컴포넌트에 대해 비공개로 간주해야 한다.

> ❗ 주의사항 <br>
> JavaScript 클래스에서 하위 클래스의 생성자를 정의할 때 항상 super를 호출해야 한다. 모든 React 컴포넌트 클래스는 생성자를 가질 때 super(props) 호출 구문부터 작성해야 한다.
</details>