import React from 'react'
import './taboff.css'
import tabon from "./tabon"
export default function Taboff (props) {
	return (
		<div className={`taboff_taboff ${props.className}`}>
			<tabon className='tabon'/>
		</div>
	)
}