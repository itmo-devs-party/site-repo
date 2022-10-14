import React from 'react'
import './Buildingsrating.css'
import time from "./time"
export default function Buildingsrating () {
	return (
		<div className='Buildingsrating_Buildingsrating'>
			<div className='Model'>
				<div className='Rectangle35'/>
			</div>
			<div className='Overlay'>
				<div className='BG'>
					<div className='BG_1'/>
				</div>
				<div className='Learnedtoday'>
					<span className='Learnedtoday_1'>Learned today</span>
					<time className='time'/>
				</div>
				<div className='Totallyhours'>
					<span className='totallyhours'>totally hours</span>
					<time className='time_1'/>
				</div>
				<div className='Totallydays'>
					<span className='Totallydays_1'>Totally days</span>
					<time className='time_2'/>
				</div>
				<div className='Text'>
					<span className='Thanksfortheanswering'>Thanks for the answering</span>
					<span className='Leaveyourrating'>Leave your rating</span>
				</div>
				<div className='Text_1'>
					<span className='Totalrating'>Total rating</span>
				</div>
				<div className='Recorder'>
					<div className='Recorder_1'>
						<div className='Group9'>
							<div className='Ellipse20'/>
							<span className='_1'>1</span>
						</div>
						<div className='Group9_1'>
							<div className='Ellipse20_1'/>
							<span className='_2'>2</span>
						</div>
						<div className='Group9_2'>
							<div className='Ellipse20_2'/>
							<span className='_3'>3</span>
						</div>
						<div className='Group9_3'>
							<div className='Ellipse20_3'/>
							<span className='_4'>4</span>
						</div>
						<div className='Group9_4'>
							<div className='Ellipse20_4'/>
							<span className='_5'>5</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}