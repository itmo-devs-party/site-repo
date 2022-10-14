import React from 'react'
import './iconbankcard.css'
import ImgAsset from '../public'
export default function Iconbankcard (props) {
	return (
		<div className={`iconbankcard_iconbankcard ${props.className}`}>
			<img className='Subtract' src = {ImgAsset.iconbankcard_Subtract} />
		</div>
	)
}