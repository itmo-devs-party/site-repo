import React from 'react'
import './iconclose.css'
import ImgAsset from '../public'
export default function Iconclose (props) {
	return (
		<div className={`iconclose_iconclose ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconclose_VectorStroke} />
		</div>
	)
}