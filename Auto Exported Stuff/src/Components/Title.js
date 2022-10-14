import React from 'react'
import './Title.css'
export default function Title (props) {
	return (
		<div className={`Title_Title ${props.className}`}>
			<div className='Rectangle26'/>
			<span className='Popularcourse'>Popular course</span>
			<span className='Seeall'>See all</span>
		</div>
	)
}