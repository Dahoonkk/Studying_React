# CSS Framework 공부하기 - Material UI

<details>
<summary>MUI 설치하기</summary>

> Material UI는 Google의 Material Design을 구현하는 오픈 소스 React Component 라이브러리이다.;

#### 설치 방법
```bash
npm install @mui/material @emotion/react @emotion/styled

npm install @mui/material @mui/styled-engine-sc styled-components
```
- 두 개의 설치 방법이 있지만 기본적으로 MUI 컴포넌트를 위한 스타일링을 생성할 때 사용되는 기본 스타일 라이브러리는 emotion이다.
  - 왜냐하면 SSR 환경에서 styled component를 MUI를 위한 엔진으로 사용할 때 아직 에러가 있을 수 있기 때문

```html
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<style>
      * {
        font-family: "Roboto", sans-serif;
      }
    </style>
```
- 폰트는 index.html에 넣어서 적용해준다.

- 아이콘을 위한 모듈 설치
```bash
npm install @mui/icons-material
```
</details>