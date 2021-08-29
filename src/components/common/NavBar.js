import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Cart from '../../assets/images/cart.png';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="container-bar">
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            RedStore
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item" onClick={handleClick}>
              <NavLink exact to="/product" className="nav-links">
                Product
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <NavLink exact to="#" className="nav-links">
                About
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <NavLink exact to="#" className="nav-links">
                Blog
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <NavLink exact to="#" className="nav-links">
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
          <img src={Cart} alt="cart" width="30px" height="30px" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
