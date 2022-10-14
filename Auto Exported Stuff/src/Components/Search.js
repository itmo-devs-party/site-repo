import React from 'react'
import './Search.css'
import Title from "./Title"
import Courselist from "./Courselist"
import tagsoff from "./tagsoff"
import Search_1 from "./Search_1"
import statuslight from "./statuslight"
import navigationbarlight from "./navigationbarlight"
export default function Search () {
	return (
		<div className='Search_Search'>
			<div className='Results'>
				<div className='Tittle'>
					<Title className='Title'/>
				</div>
				<div className='List'>
					<Courselist className='Courselist'/>
					<Courselist className='Courselist_1'/>
					<Courselist className='Courselist_2'/>
					<Courselist className='Courselist_3'/>
				</div>
			</div>
			<div className='Tags'>
				<div className='Frame15'>
					<tagsoff className='tagsoff'/>
					<tagsoff className='tagsoff_1'/>
					<tagsoff className='tagsoff_2'/>
					<tagsoff className='tagsoff_3'/>
					<tagsoff className='tagsoff_4'/>
				</div>
			</div>
			<div className='SearchBar'>
				<Search_1 className='Search_1'/>
			</div>
			<div className='Status'>
				<statuslight className='statuslight'/>
			</div>
			<div className='navi'>
				<navigationbarlight className='navigationbarlight'/>
			</div>
		</div>
	)
}