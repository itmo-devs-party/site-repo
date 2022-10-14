import React from 'react'
import './iconcamera.css'
import ImgAsset from '../public'
export default function Iconcamera (props) {
	return (
		<div className={`iconcamera_iconcamera ${props.className}`}>
			<img className='Subtract' src = {ImgAsset.iconcamera_Subtract} />
		</div>
	)
}