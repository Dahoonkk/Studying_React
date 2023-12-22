# 리액트 Context를 활용한 간단한 앱 만들기

<details>
<summary>리액트 Context란?</summary>

- 리액트에서 한 컴포넌트 안에서 데이터를 생성하거나 업데이트하거나 다른 컴포넌트와 데이터를 공유해서 사용하는 방법은 여러가지가 있다.
  - 리액트에서 데이터 흐름 컨트롤 하는 법(state 관리하는 법)
  - state와 props를 사용해서 컴포넌트 간에 전달
  - React Context 사용
  - mobx 사용 : 리액트에서 데이터 흐름 컨트롤 하는 법(state 관리하는 법)
  - redux를 사용
  - 등등...

### React Context
- 컨텍스트는 모든 수준에서 수동으로 props를 전달하지 않고도 구성 요소 트리를 통해 데이터를 전달할 수 있는 방법을 제공한다.
- React Context는 Component 트리의 깊이에 관계없이 props를 전달하지 않고도 Component에 데이터를 제공한다.
- Context는 전역 데이터를 관리하는 데 사용된다.(ex. 전역 상태, 테마, 서비스, 사용자 설정 등)
</details>