import React from 'react'
import './Search_1.css'
import iconsearch from "./iconsearch"
import iconfilter from "./iconfilter"
import icondeletetwo from "./icondeletetwo"
export default function Search_1 (props) {
	return (
		<div className={`Search_1_Search ${props.className}`}>
			<span className='FindCousre'>Find Cousre</span>
			<iconsearch className='iconsearch'/>
			<iconfilter className='iconfilter'/>
			<icondeletetwo className='icondeletetwo'/>
		</div>
	)
}