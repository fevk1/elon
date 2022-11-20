import React from 'react'
import ava_min from '../../img/elon_mini.jpg'
import Post from './post/Post.js'
function Posts(){
	return(
		<div className='posts'>
		<h2>My posts</h2>
		<input placeholder='enter the post' />
		<button>Add post</button>
		<Post message='Hi world'/>
		<Post message='Im Elon Mask'/>
		</div>
		)
}
export default Posts;