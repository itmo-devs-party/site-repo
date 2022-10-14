import React from 'react'
import './Footeron.css'
import iconfooterhomeon from "./iconfooterhomeon"
export default function Footeron (props) {
	return (
		<div className={`Footeron_Footeron ${props.className}`}>
			<div className='Rectangle19'/>
			<span className='Home'>Home</span>
			<iconfooterhomeon className='iconfooterhomeon'/>
		</div>
	)
}