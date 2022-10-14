import React from 'react'
import './iconmessage.css'
import ImgAsset from '../public'
export default function Iconmessage (props) {
	return (
		<div className={`iconmessage_iconmessage ${props.className}`}>
			<img className='Subtract' src = {ImgAsset.iconmessage_Subtract} />
		</div>
	)
}