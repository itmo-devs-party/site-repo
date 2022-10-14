import React from 'react'
import './iconcheck.css'
import ImgAsset from '../public'
export default function Iconcheck (props) {
	return (
		<div className={`iconcheck_iconcheck ${props.className}`}>
			<div className='iconcheck_1'>
				<img className='VectorStroke' src = {ImgAsset.iconcheck_VectorStroke} />
			</div>
		</div>
	)
}