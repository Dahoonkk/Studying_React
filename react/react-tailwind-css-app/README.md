# CSS Framework 공부하기 - Tailwind CSS

<details>
<summary>Tailwind CSS에 대해서</summary>

### [Tailwind CSS](https://tailwindcss.com/)란 무엇인가?
- HTML 안에서, CSS 스타일을 만들 수 있게 해주는 CSS 프레임워크이다.

#### CSS 프레임워크란?
- CSS 프레임워크는 레이아웃 및 여러 컴포넌트 구성, 브라우저 호환성을 보장하는데 소요되는 시간을 최소화하기 위해 여러 웹 개발 / 디자인 프로젝트에 적용할 수 있는 CSS 파일 모음이다.
- CSS Framework 종류 for React JS
  - Material UI / React Bootstrap / Semantic UI / Ant Design / Materialize ...

### Tailwind CSS의 장점
- Tailwind CSS는 부트스트랩과 비슷하게 m-1, flex와 같이 미리 세팅된 Utility Class를 활용하는 방식으로 HTML에서 스타일링이 가능하다.
- 그렇기 때문에 빠른 스타일링 작업이 가능하며
- class 혹은 id 명을 작성하기 위한 고생을 하지 않아도 된다.
- 유틸리티 클래스가 익숙해지는 시간이 필요할 수 있지만 IntelliSense 플러그인이 제공돼서 금방 익숙해지는게 가능하다.

### [CRA(Create-React-App)에 Tailwind CSS 적용하기](https://tailwindcss.com/docs/guides/create-react-app)

</details>

<details>
<summary>CRA(Create-React-App) 리액트 앱에 Tailwind CSS 적용하기</summary>

### [CRA(Create-React-App)에 Tailwind CSS 적용하기](https://tailwindcss.com/docs/guides/create-react-app)
- npm을 통해 Tailwind CSS 및 해당 종속성을 설치한 다음 init 명령을 실행하여 tailwind.config.js 및 postcss.config.js를 모두 생성한다.

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

<br />

- 템플릿 경로 구성 : tailwind.config.js 파일에 모든 템플릿 파일의 경로를 추가한다.
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<br />

- Taiwind의 각 레이어에 대한 @tailwind 지시문을 ./src/index.css 파일에 추가한다.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 전체 구조 생성하기
![Alt text](readme_img/image.png)

### 필요한 에셋 가져오기
![Alt text](readme_img/image-1.png)

### [React/icons](https://react-icons.github.io/react-icons/) 설치
```bash
npm install react-icons --save
```

</details>

<details>
<summary>PostCSS & AutoFixer</summary>



</details>