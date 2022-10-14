import React from 'react'
import './elementscheckBoxon.css'
import ImgAsset from '../public'
import elementscheckBoxoff from "./elementscheckBoxoff"
export default function ElementscheckBoxon (props) {
	return (
		<div className={`elementscheckBoxon_elementscheckBoxon ${props.className}`}>
			<elementscheckBoxoff className='elementscheckBoxoff'/>
			<img className='Vector2' src = {ImgAsset.elementscheckBoxon_Vector2} />
		</div>
	)
}