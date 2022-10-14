import React from 'react'
import './buttonsecondary.css'
import ImgAsset from '../public'
export default function Buttonsecondary (props) {
	return (
		<div className={`buttonsecondary_buttonsecondary ${props.className}`}>
			<div className='Frame9'>
				<img className='image' src = {ImgAsset.buttonsecondary_image} />
			</div>
		</div>
	)
}