import React from 'react'
import './Initialscreen.css'
import ImgAsset from '../public'
export default function Initialscreen () {
	return (
		<div className='Initialscreen_Initialscreen'>
			<div className='Text'>
				<span className='Welcometotheapp'>Welcome to the app!</span>
			</div>
			<div className='Icon'>
				<div className='Frame29'>
					<div className='Rectangle84'/>
					<img className='Vector7' src = {ImgAsset.Initialscreen_Vector7} />
					<img className='Vector11' src = {ImgAsset.Initialscreen_Vector11} />
					<img className='Vector10' src = {ImgAsset.Initialscreen_Vector10} />
					<img className='Vector9' src = {ImgAsset.Initialscreen_Vector9} />
					<div className='Ellipse77'/>
					<div className='Ellipse78'/>
					<div className='Ellipse79'/>
					<div className='Ellipse80'/>
					<div className='Ellipse81'/>
					<div className='Ellipse82'/>
					<div className='Ellipse83'/>
				</div>
			</div>
		</div>
	)
}