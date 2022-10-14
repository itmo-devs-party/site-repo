import React from 'react'
import './navigationbardark.css'
import navigationbarlight from "./navigationbarlight"
export default function Navigationbardark (props) {
	return (
		<div className={`navigationbardark_navigationbardark ${props.className}`}>
			<navigationbarlight className='navigationbarnight'/>
		</div>
	)
}