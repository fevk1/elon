import React from 'react'
import css from './Dialog.css'
function Dialog(){
	return(
		<div className='dialog-header'>
			<div className='dialog-main'>
				<div className='dialog-main-names'>
					<p className='name1'>Иван Иванов</p>
					<p className='name2'>Дональд Трамп</p>
					<p className='name3'>Билл Гейтс</p>
				</div>
				<div className='dialog-main-messages'>
					<p className='messages1'>Привет, как дела?</p>
					<p className='messages2'>Го завтра на марс?</p>
					<p className='messages3'>Жду мой новый чип</p>
				</div>
			</div>
			<div className='inputs'>
				<input placeholder='введите сообщение' />
				<button className='btn'>send</button>
			</div>
		</div>
		)	
}
export default Dialog;