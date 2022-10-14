import React from 'react'
import './tagsoff.css'
import tagson from "./tagson"
export default function Tagsoff (props) {
	return (
		<div className={`tagsoff_tagsoff ${props.className}`}>
			<tagson className='tagson'/>
		</div>
	)
}