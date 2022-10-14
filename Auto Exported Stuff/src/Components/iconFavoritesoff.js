import React from 'react'
import './iconFavoritesoff.css'
import ImgAsset from '../public'
export default function IconFavoritesoff (props) {
	return (
		<div className={`iconFavoritesoff_iconFavoritesoff ${props.className}`}>
			<img className='VectorStroke' src = {ImgAsset.iconFavoritesoff_VectorStroke} />
		</div>
	)
}