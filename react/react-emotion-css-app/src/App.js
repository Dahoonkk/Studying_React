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
