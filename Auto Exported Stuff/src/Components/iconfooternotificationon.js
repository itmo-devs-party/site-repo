import React from 'react'
import './iconfooternotificationon.css'
import ImgAsset from '../public'
export default function Iconfooternotificationon (props) {
	return (
		<div className={`iconfooternotificationon_iconfooternotificationon ${props.className}`}>
			<img className='Vector' src = {ImgAsset.iconfooternotificationon_Vector} />
			<img className='message_1_fill' src = {ImgAsset.iconfooternotificationon_message_1_fill} />
		</div>
	)
}