import React from 'react'
import './iconFavoriteson.css'
import ImgAsset from '../public'
export default function IconFavoriteson (props) {
	return (
		<div className={`iconFavoriteson_iconFavoriteson ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconFavoriteson_VectorStroke} />
		</div>
	)
}