import React, { useState } from 'react';
import './VerticalNav.scss';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';
import DropdownItem from '../DropdownItem';

const VerticalNav = ({ setNavTitle }: any) => {
  return (
    <div className="vertical-nav">
      {/* Part 1: Top section with logo and search bar */}
      <div className="vertical-nav__top">
        <img
          className="vertical-nav__logo"
          src="/path/to/logo.png"
          alt="Logo"
        />
        <SearchBar />
      </div>
      {/* Part 2: Navigation dropdowns */}
      <nav className="vertical-nav__menu">
        <ul className="vertical-nav__menu-item-wrapper">
          <li
            className="vertical-nav__item"
            onClick={() => setNavTitle('Home')}
          >
            <a className="vertical-nav__link">Home</a>
          </li>
          <DropdownItem label="Purchase Orders">
            <ul className="vertical-nav__submenu">
              <li
                className="vertical-nav__item"
                onClick={() => setNavTitle('Orders')}
              >
                <a className="vertical-nav__link">Orders</a>
              </li>
              <li
                className="vertical-nav__item"
                onClick={() => setNavTitle('Products')}
              >
                <a className="vertical-nav__link">Products</a>
              </li>
              <li
                className="vertical-nav__item"
                onClick={() => setNavTitle('Reports')}
              >
                <a className="vertical-nav__link">Reports</a>
              </li>
            </ul>
          </DropdownItem>
          <li
            className="vertical-nav__item"
            onClick={() => setNavTitle('Assembly')}
          >
            <a className="vertical-nav__link">Assembly</a>
          </li>
          <li
            className="vertical-nav__item"
            onClick={() => setNavTitle('Users')}
          >
            <a className="vertical-nav__link">Users</a>
          </li>
        </ul>
      </nav>
      {/* Part 3: Support and Settings buttons */}
      <div className="vertical-nav__bottom">
        <button className="vertical-nav__button">Support</button>
        <button className="vertical-nav__button">Settings</button>
      </div>
      {/* Part 4: Logout button and user information */}
      <div className="vertical-nav__user">
        <Avatar />
        <div className="vertical-nav__info">
          <div className="vertical-nav__name">John Doe</div>
          <div className="vertical-nav__email">johndoe@example.com</div>
        </div>
      </div>
      <button className="vertical-nav__button">Logout</button>
    </div>
  );
};

export default VerticalNav;
