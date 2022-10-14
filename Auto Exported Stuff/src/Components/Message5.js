import React from 'react'
import './Message5.css'
import Cell from "./Cell"
import tab from "./tab"
import statuslight from "./statuslight"
export default function Message5 () {
	return (
		<div className='Message5_Message5'>
			<div className='Cells'>
				<div className='list'>
					<Cell className='Cell'/>
					<Cell className='Cell_1'/>
					<Cell className='Cell_2'/>
					<Cell className='Cell_3'/>
				</div>
			</div>
			<div className='Tab'>
				<div className='tab'>
					<div className='tab_1'>
						<tab className='tab_2'/>
					</div>
					<div className='tab_3'>
						<tab className='tab_4'/>
					</div>
				</div>
			</div>
			<div className='Title'>
				<span className='Notifications'>Notifications</span>
			</div>
			<div className='Status'>
				<statuslight className='statuslight'/>
			</div>
		</div>
	)
}