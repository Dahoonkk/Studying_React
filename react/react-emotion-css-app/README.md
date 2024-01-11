# CSS Framework 공부하기 - Emotion CSS

<details>
<summary>Emtion이란?</summary>

> Emotion js는 JavaScript로 CSS 스타일을 작성하도록 설계된 라이브러리이다. <br />
> 소스 맵, 레이블 및 테스트 유틸리티와 같은 기능을 통해 뛰어난 개발자 경험과 함께 강력하고 예측 가능한 스타일 구성을 제공한다. <br />
> 문자열 및 개체 스타일이 모두 지원된다.;

#### Emotion js는 주로 Framework Agnostic과 React 두 가지 방식으로 사용된다.
- Agnotic은 일반화되어 다양한 시스템 간에 상호 운용할 수 있는 것을 말한다.

#### Framework Agnostic
- Emotino은 프레임워크에 구애받지 않는 라이브러리이다. 
  - 즉, 다양한 프레임워크 및 라이브러리에서 사용할 수 있다. 
  - 동일한 강력한 API와 기능으로 원하는 모든 곳에서 사용할 수 있다.
- @emotion/css 패키지는 프레임워크에 구애받지 않으며 Emotion을 사용하는 가장 간단한 방법이다.
- 추가 설정, babel 플러그인 또는 기타 구성 변경이 필요하지 않다.
- vendor-prefixing, nested selector 및 미디어 쿼리(media queries)를 지원한다.
- css 함수를 사용하여 클래스 이름을 생성하고 cx를 사용하여 구성하는 것을 선호한다.
![Alt text](welcom_readme_image/image.png)

<br />

#### React
- @emotion/react 패키지는 React가 필요하며 가능한 경우 해당 프레임워크 사용자에게 권장된다.
- 구성 가능한 빌드 환경에서 React를 사용할 때 가장 좋다.
- CSS Prop
  - style prop과 유사하며, vendor-prefixing, nested selector 및 미디어 쿼리(media queries)를 지원한다.
  - 개발자가 스타일이 지정된 API 추상화를 건너뛰고 구성 요소와 요소를 직접 스타일 지정할 수 있다.
  - css prop은 또한 개발자가 공통 및 사용자 정의 가능한 값에 쉽게 액세스할 수 있도록 하는 인수로 테마와 함께 호출되는 함수를 허용한다.
- 아무런 configuration 없이 서버 사이드 렌더링을 지원한다.
- 테마 기능을 기본적으로 사용할 수 있다.
- 적절한 패턴과 구성이 설정되었는지 확인하기 위해 ESLint 플러그인을 사용할 수 있다.
![Alt text](welcom_readme_image/image-1.png)

- [@emotion/styled](https://emotion.sh/docs/styled) 패키지는 구성 요소를 만들기 위해 styled.div 스타일 API를 사용하는 것을 선호하는 사람들을 위한 것이다.
![Alt text](welcom_readme_image/image-2.png)

#### 전체 폴더 생성
![Alt text](welcom_readme_image/image-3.png)

<br />

#### 전체 파일 생성
![Alt text](welcom_readme_image/image-4.png)

<br />

#### 필요 패키지 설치
```bash
npm install @emotion/react @emotion/styled axios react-router-dom
```

</details>

<details>
<summary> React Router Dom 적용하기</summary>

### React Router Dom 이란?
- 리액트를 사용할 때 페이지를 이동할 수 있도록 도와주는 라이브러리이다.
- 리액트는 SPA(Single Page Application)를 기본으로 하기 때문에 하나의 페이지에서 동적으로 화면을 바꿔간다.
- BrowserRouter : History API를 사용해 URL과 UI를 동기화하는 라우터
- Routes : Route에 매치되는 첫번째 요소를 렌더링
- Route : 컴포넌트 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트를 렌더링
- Link : a 태그와 비슷하며 to 속성에 설정된 링크로 이동, 기록이 history 객체에 저장된다.

```javascript
import './App.css';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookDetailPage from './pages/BookDetailPage';

const Layout = () => {
  <div>
    <Outlet />
  </div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path='/book:bookId' element={<BookDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

</details>



![Alt text](result.png)
