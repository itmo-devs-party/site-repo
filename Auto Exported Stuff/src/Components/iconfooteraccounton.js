import React from 'react'
import './iconfooteraccounton.css'
import ImgAsset from '../public'
export default function Iconfooteraccounton (props) {
	return (
		<div className={`iconfooteraccounton_iconfooteraccounton ${props.className}`}>
			<img className='Vector' src = {ImgAsset.iconfooteraccounton_Vector} />
			<img className='user_2_fill' src = {ImgAsset.iconfooteraccounton_user_2_fill} />
		</div>
	)
}