import React from 'react'
import './Footeroff.css'
import iconfootercourseoff from "./iconfootercourseoff"
export default function Footeroff (props) {
	return (
		<div className={`Footeroff_Footeroff ${props.className}`}>
			<div className='Rectangle19'/>
			<span className='Home'>Course</span>
			<iconfootercourseoff className='iconfootercourseoff'/>
		</div>
	)
}