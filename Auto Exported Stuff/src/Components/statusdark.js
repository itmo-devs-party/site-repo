import React from 'react'
import './statusdark.css'
import DarkModeYES from "./DarkModeYES"
export default function Statusdark (props) {
	return (
		<div className={`statusdark_statusdark ${props.className}`}>
			<DarkModeYES className='statusdark_1'/>
		</div>
	)
}