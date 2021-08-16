import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Cart from '../../assets/images/cart.png';

const NavBar = () => {
  return (
    <div className="container">
      <div id="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" width="125px" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">Account</Link>
            </li>
          </ul>
          <img src={Cart} alt="Cart" width="30px" height="30px" />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
