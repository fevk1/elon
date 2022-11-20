import React from 'react';
import css from './navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar(){
  return(
  <div className='navbar'>
  <NavLink to='/Profile'>Profile </NavLink>
  <NavLink to='Dialog'> Messages </NavLink>
  <NavLink to='/users'>Users</NavLink>
  </div>
  )
}
export default Navbar;