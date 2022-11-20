import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './conponents/header/Header.js';
import Navbar from './conponents/navbar/Navbar.js';
import Profile from './conponents/profile/Profile.js';
import Dialog from './conponents/dialog/Dialog.js'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Header />
      <Navbar />
      <div className='wrapper-content'>
      <Profile name = {'Elon Mask'}/>
      <Dialog />
    </div>
    </BrowserRouter>
    </div>
    )
}
export default App;
