import React from 'react'
import './Mycourse.css'
import ImgAsset from '../public'
import statuslight from "./statuslight"
import navigationbarlight from "./navigationbarlight"
export default function Mycourse () {
	return (
		<div className='Mycourse_Mycourse'>
			<div className='Learning'>
				<div className='Learning_1'>
					<div className='Rectangle34'/>
					<span className='ProductDesignv10'>Product<br/>Design v1.0</span>
					<div className='Group126'>
						<div className='Rectangle72'/>
						<img className='Rectangle73' src = {ImgAsset.Mycourse_Rectangle73} />
					</div>
					<span className='Completed'>Completed</span>
					<span className='_1424'>14/24</span>
					<div className='buttonplay'>
						<div className='Ellipse23'/>
						<div className='Polygon1'/>
					</div>
				</div>
				<div className='Learning_2'>
					<div className='Rectangle34_1'/>
					<span className='VisualDesign'>Visual Design</span>
					<div className='Group126_1'>
						<div className='Rectangle72_1'/>
						<img className='Rectangle73_1' src = {ImgAsset.Mycourse_Rectangle73_1} />
					</div>
					<span className='Completed_1'>Completed</span>
					<span className='_1016'>10/16</span>
					<div className='buttonplay_1'>
						<div className='Ellipse23_1'/>
						<div className='Polygon1_1'/>
					</div>
				</div>
				<div className='Learning_3'>
					<div className='Rectangle34_2'/>
					<span className='JavaDevelopment'>Java Development</span>
					<div className='Line'>
						<div className='Rectangle72_2'/>
						<img className='Rectangle73_2' src = {ImgAsset.Mycourse_Rectangle73_2} />
					</div>
					<span className='Completed_2'>Completed</span>
					<span className='_1218'>12/18</span>
					<div className='buttonplay_2'>
						<div className='Ellipse23_2'/>
						<div className='Polygon1_2'/>
					</div>
				</div>
			</div>
			<div className='Learnedtoday'>
				<div className='BG'/>
				<span className='Learnedtoday_1'>Learned today</span>
				<div className='Time'>
					<span className='_46min'>46min</span>
					<span className='_60min'>/ 60min</span>
				</div>
				<div className='Line_1'>
					<div className='Rectangle30'/>
					<img className='Rectangle30_1' src = {ImgAsset.Mycourse_Rectangle30_1} />
				</div>
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