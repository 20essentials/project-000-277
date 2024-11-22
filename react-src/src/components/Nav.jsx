import React from 'react';
import { NavLink } from 'react-router-dom';

const isActive = ({isActive})  => isActive ? 'active' : '';

const Nav = () => {
  return (
    <nav className='component-1-nav'>
      <div className='left'>
        <NavLink className={isActive} to='/artisans'>Artisans</NavLink>
        <NavLink className={isActive} to='/keycaps'>Keycaps</NavLink>
        <NavLink className={isActive} to='/switches'>Switches</NavLink>
      </div>
      <div className='center'>
        <NavLink className={isActive} to='/'>
          <img src='home/logo.webp' alt='logo' />
        </NavLink>
      </div>
      <div className='right'>
        <NavLink className={isActive} to='/mousepads'>Mousepads</NavLink>
        <NavLink className={isActive} to='/cables'>Cables</NavLink>
        <NavLink className={isActive} to='/accessories'>Accessories</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
