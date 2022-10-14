import React from 'react'
import './iconarrowright.css'
import ImgAsset from '../public'
export default function Iconarrowright (props) {
	return (
		<div className={`iconarrowright_iconarrowright ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconarrowright_VectorStroke} />
			<img className='Vector3' src = {ImgAsset.iconarrowright_Vector3} />
		</div>
	)
}