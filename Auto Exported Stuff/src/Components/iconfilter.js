import React from 'react'
import './iconfilter.css'
import ImgAsset from '../public'
export default function Iconfilter (props) {
	return (
		<div className={`iconfilter_iconfilter ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconfilter_VectorStroke} />
		</div>
	)
}