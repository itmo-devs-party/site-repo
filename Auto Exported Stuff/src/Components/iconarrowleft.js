import React from 'react'
import './iconarrowleft.css'
import ImgAsset from '../public'
export default function Iconarrowleft (props) {
	return (
		<div className={`iconarrowleft_iconarrowleft ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconarrowleft_VectorStroke} />
			<img className='Vector3' src = {ImgAsset.iconarrowleft_Vector3} />
		</div>
	)
}