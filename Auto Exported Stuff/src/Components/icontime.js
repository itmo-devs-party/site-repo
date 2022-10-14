import React from 'react'
import './icontime.css'
import ImgAsset from '../public'
export default function Icontime (props) {
	return (
		<div className={`icontime_icontime ${props.className}`}>
			<img className='Subtract' src = {ImgAsset.icontime_Subtract} />
		</div>
	)
}