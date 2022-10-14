import React from 'react'
import './navigationbarlight.css'
import iconarrowleft from "./iconarrowleft"
export default function Navigationbarlight (props) {
	return (
		<div className={`navigationbarlight_navigationbarlight ${props.className}`}>
			<div className='bg'/>
			<iconarrowleft className='iconarrowleft'/>
			<span className='Title'>Title</span>
		</div>
	)
}