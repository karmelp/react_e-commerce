import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserAccount from '../../icons/mdi_account-alert-outline.svg';
import Search from '../../icons/akar-icons_search.svg';
import Favourites from '../../icons/akar-icons_heart.svg';
import ShoppingCart from '../../icons/ant-design_shopping-cart-outlined.svg';

import './header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className='section'></div>
      <button className='burger-menu' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </button>
      <nav className={`section ${showMenu ? 'show-menu' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className='icons section'>
        <Link to="#"><img src={UserAccount} /></Link>
        <Link to="#"><img src={Search} /></Link>
        <Link to="#"><img src={Favourites} /></Link>
        <Link to="#"><img src={ShoppingCart} /></Link>
      </div>
    </header>
  )
}

export default Header;
