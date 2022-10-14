import React from 'react'
import './iconpeople.css'
import ImgAsset from '../public'
export default function Iconpeople (props) {
	return (
		<div className={`iconpeople_iconpeople ${props.className}`}>
			<img className='Union' src = {ImgAsset.iconpeople_Union} />
		</div>
	)
}