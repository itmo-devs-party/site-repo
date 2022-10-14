import React from 'react'
import './Formemail.css'
import iconcheck_1 from "./iconcheck_1"
export default function Formemail (props) {
	return (
		<div className={`Formemail_Formemail ${props.className}`}>
			<div className='bg'/>
			<iconcheck_1 className='iconcheck'/>
			<div className='Email'>
				<span className='Cooper_Kristingmailcom'>Cooper_Kristin@gmail.com</span>
			</div>
			<div className='title'>
				<span className='YourEmail'>Your  Email</span>
			</div>
		</div>
	)
}