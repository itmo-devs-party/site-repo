import React from 'react'
import './xAppIconsCamera.css'
import ImgAsset from '../public'
export default function XAppIconsCamera (props) {
	return (
		<div className={`xAppIconsCamera_xAppIconsCamera ${props.className}`}>
			<div className='Ellipse18'/>
			<img className='AppIcon' src = {ImgAsset.xAppIconsCamera_AppIcon} />
		</div>
	)
}