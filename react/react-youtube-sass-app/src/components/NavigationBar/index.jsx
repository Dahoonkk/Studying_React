
import LeftNav from './LeftNav/index';
import SearchBar from './SearchBar/index';
import RightNav from './RightNav/index';

const NavigationBar = () => {
  return (
    <nav className="Navbar">
        <LeftNav />
        <SearchBar />
        <RightNav />
    </nav>
  )
}

export default NavigationBar