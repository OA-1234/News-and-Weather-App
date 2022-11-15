import './navbar.css';
import HomeIcon from './home-icon.svg'
import NewsIcon from './news-icon.svg'
import CallIcon from './call-icon.svg'

function Navbar() {
  return (
    <div>
      <ul>
        <li><a href='/' className='NavItem'><img src={HomeIcon} alt="Home"/> HOME</a></li>
        <li><a href='/news' className='NavItem'><img src={NewsIcon} alt="news-icon"/> NEWS</a></li>
        <li><a href='/contact' className='NavItem'><img src={CallIcon} alt="conatact-icon"/>Contact</a></li>
        <li><a href='/about' className='NavItem'>About</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
 