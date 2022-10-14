import React from 'react'
import './Footerhome.css'
import ImgAsset from '../public'
import iconsearch from "./iconsearch"
import Footeron from "./Footeron"
import Footeroff from "./Footeroff"
export default function Footerhome (props) {
	return (
		<div className={`Footerhome_Footerhome ${props.className}`}>
			<img className='Union' src = {ImgAsset.Footerhome_Union} />
			<div className='Search'>
				<span className='Scan'>Scan</span>
				<div className='Ellipse18'/>
				<iconsearch className='iconsearch'/>
			</div>
			<Footeron className='Footeron'/>
			<Footeroff className='Footeroff'/>
			<Footeroff className='Footeroff_1'/>
			<Footeroff className='Footeroff_2'/>
		</div>
	)
}