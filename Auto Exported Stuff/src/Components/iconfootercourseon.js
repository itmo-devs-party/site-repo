import React from 'react'
import './iconfootercourseon.css'
import ImgAsset from '../public'
export default function Iconfootercourseon (props) {
	return (
		<div className={`iconfootercourseon_iconfootercourseon ${props.className}`}>
			<img className='Vector' src = {ImgAsset.iconfootercourseon_Vector} />
			<img className='Subtract' src = {ImgAsset.iconfootercourseon_Subtract} />
		</div>
	)
}