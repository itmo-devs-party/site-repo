import React from 'react'
import './iconfooternotificationoff.css'
import ImgAsset from '../public'
export default function Iconfooternotificationoff (props) {
	return (
		<div className={`iconfooternotificationoff_iconfooternotificationoff ${props.className}`}>
			<img className='Vector' src = {ImgAsset.iconfooternotificationoff_Vector} />
			<img className='message_1_fill' src = {ImgAsset.iconfooternotificationoff_message_1_fill} />
		</div>
	)
}