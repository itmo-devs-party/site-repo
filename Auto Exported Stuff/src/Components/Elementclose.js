import React from 'react'
import './Elementclose.css'
import ImgAsset from '../public'
export default function Elementclose (props) {
	return (
		<div className={`Elementclose_Elementclose ${props.className}`}>
			<div className='Group10'>
				<div className='Ellipse21'/>
			</div>
			<img className='Union' src = {ImgAsset.Elementclose_Union} />
		</div>
	)
}