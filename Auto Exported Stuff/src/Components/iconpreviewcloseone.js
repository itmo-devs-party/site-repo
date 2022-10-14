import React from 'react'
import './iconpreviewcloseone.css'
import ImgAsset from '../public'
export default function Iconpreviewcloseone (props) {
	return (
		<div className={`iconpreviewcloseone_iconpreviewcloseone ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconpreviewcloseone_VectorStroke} />
		</div>
	)
}