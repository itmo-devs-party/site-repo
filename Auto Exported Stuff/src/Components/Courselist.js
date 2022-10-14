import React from 'react'
import './Courselist.css'
import ImgAsset from '../public'
import iconpeople from "./iconpeople"
export default function Courselist (props) {
	return (
		<div className={`Courselist_Courselist ${props.className}`}>
			<div className='BG'/><div className='Image' style={{backgroundImage: `url(${ImgAsset.Courselist_Image}),linear-gradient(0deg, rgba(196,196,196,1.00), rgba(196,196,196,1.00))`}}/>
			<span className='Name'>Product Design v1.0</span>
			<span className='nameenx'>Blithe Marshall</span>
			<iconpeople className='iconpeople'/>
			<div className='Frame17'>
				<div className='Price'>
					<span className='_'>$</span>
					<span className='_90'>90</span>
				</div>
				<div className='Duration'>
					<span className='Duration_1'>16 hours</span>
				</div>
			</div>
		</div>
	)
}