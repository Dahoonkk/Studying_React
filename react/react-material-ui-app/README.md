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

<details>
<summary>MUI 기본 사용법</summary>

### 버튼 사용법
![Alt text](/react/react-material-ui-app/readme_img/image.png)
- MUI에서 제공하는 버튼을 사용하고 싶은 경우 Button을 import 해서 사용하면 된다.

![Alt text](readme_img/image-1.png)
![Alt text](readme_img/image-2.png)
- variant props에 따라서 스타일링이 차이가 난다.
- variant뿐 아니라 아주 많은 props가 존재하는데 그것은 페이지 아래로 내려가보면 API에 자세히 나와있다. [...Go!](https://mui.com/material-ui/api/button/#props)

### [버튼에 아이콘](https://mui.com/material-ui/react-button/#buttons-with-icons-and-label)을 넣으려면?

### 버튼 색깔 바꾸기
![Alt text](readme_img/image-3.png)

> 커스텀 버튼을 만드려면?
>![Alt text](readme_img/image-4.png)

### TypoGraphy 사용법
- 한 번에 너무 많은 유형의 크기와 스타일을 사용하면 레이아웃이 손상될 수 있다.
- Typographic scale에는 레이아웃 그리드와 함께 잘 작동하는 제한된 유형 크기 세트가 있다.
```javascript
<Typography variant="h1" component="div" gutterBottom>
    h1. Heading
</Typography>
```
- h1 스타일을 사용하고 div 태그를 사용한다.
![Alt text](readme_img/image-5.png)

</details>

<details>
<summary>Theme 사용하기</summary>

> 테마는 구성 요소의 색상, 표면의 어두움, 그림자 수준, 잉크 요소의 적절한 불투명도 등을 지정한다. <br />
> 테마를 사용하면 앱에 일관된 톤을 적용할 수 있으며 이를 통해 비즈니스 또는 브랜드의 특정 요구 사항을 충족하기 위해 프로젝트의 모든 디자인 측면을 사용자 지정할 수 있다.
> 앱 간의 일관성을 높이기 위해 밝은 테마와 어두운 테마를 선택할 수 있다. 기본적으로 구성 요소는 밝은 테마 유형을 사용한다.
</details>