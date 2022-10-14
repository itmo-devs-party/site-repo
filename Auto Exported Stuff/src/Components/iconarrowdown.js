import React from 'react'
import './iconarrowdown.css'
import ImgAsset from '../public'
export default function Iconarrowdown (props) {
	return (
		<div className={`iconarrowdown_iconarrowdown ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconarrowdown_VectorStroke} />
			<img className='Vector3' src = {ImgAsset.iconarrowdown_Vector3} />
		</div>
	)
}