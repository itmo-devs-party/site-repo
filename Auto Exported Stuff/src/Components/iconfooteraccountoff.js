import React from 'react'
import './iconfooteraccountoff.css'
import ImgAsset from '../public'
export default function Iconfooteraccountoff (props) {
	return (
		<div className={`iconfooteraccountoff_iconfooteraccountoff ${props.className}`}>
			<img className='Vector' src = {ImgAsset.iconfooteraccountoff_Vector} />
			<img className='user_2_fill' src = {ImgAsset.iconfooteraccountoff_user_2_fill} />
		</div>
	)
}