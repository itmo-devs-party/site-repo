import React from 'react'
import './iconsearch.css'
import ImgAsset from '../public'
export default function Iconsearch (props) {
	return (
		<div className={`iconsearch_iconsearch ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconsearch_VectorStroke} />
		</div>
	)
}