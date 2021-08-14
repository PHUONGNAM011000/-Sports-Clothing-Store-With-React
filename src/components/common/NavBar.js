import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Cart from '../../assets/images/cart.png';

const NavBar = () => {
  return (
    <div id="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width="125px" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>Account</Link>
          </li>
        </ul>
        <img src={Cart} alt="Cart" width='30px' height='30px'/>
      </nav>
    </div>
  );
};

export default NavBar;
