import React from 'react'
import './iconmessageone.css'
import ImgAsset from '../public'
export default function Iconmessageone (props) {
	return (
		<div className={`iconmessageone_iconmessageone ${props.className}`}>
			<img className='Union' src = {ImgAsset.iconmessageone_Union} />
		</div>
	)
}