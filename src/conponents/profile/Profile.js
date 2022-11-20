import React from 'react';
import css from './profile.css'
import ava from '../../img/elon.jpg'
import ava_mini from '../../img/elon_mini.jpg'
import Posts from '../posts/Posts.js'
import Dialog from '../dialog/Dialog.js'
function Profile(props){
  return(
  <div className='profile'>
    <div className='me'>
    <img src={ava} alt="profile mini photo" />
    <p>{props.name}</p>
    <p>West.</p>
    <p>City: California</p>
    </div>
    <Posts />
    <Dialog />
  </div>  
  )
}
export default Profile;