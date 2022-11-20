import React from 'react';
import css from './header.css'
import logo from '../../img/logo_bk.svg'
function Header(){
  return(
    <div className='header'>
    <img src = {logo}/>
    </div>
  )
}
export default Header;