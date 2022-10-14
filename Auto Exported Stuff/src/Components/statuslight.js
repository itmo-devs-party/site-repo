import React from 'react'
import './statuslight.css'
import ImgAsset from '../public'
export default function Statuslight (props) {
	return (
		<div className={`statuslight_statuslight ${props.className}`}>
			<div className='Notch'>
				<img className='Subtract' src = {ImgAsset.statuslight_Subtract} />
				<div className='Rectangle11'/>
				<img className='Subtract_1' src = {ImgAsset.statuslight_Subtract_1} />
			</div>
			<div className='StatusIcons'>
				<div className='NetworkSignalLight'>
					<img className='Path' src = {ImgAsset.statuslight_Path} />
					<img className='Path_1' src = {ImgAsset.statuslight_Path_1} />
					<img className='Path_2' src = {ImgAsset.statuslight_Path_2} />
					<img className='EmptyBar' src = {ImgAsset.statuslight_EmptyBar} />
					<img className='Path_3' src = {ImgAsset.statuslight_Path_3} />
					<img className='Path_4' src = {ImgAsset.statuslight_Path_4} />
					<img className='Path_5' src = {ImgAsset.statuslight_Path_5} />
					<img className='EmptyBar_1' src = {ImgAsset.statuslight_EmptyBar_1} />
				</div>
				<div className='WiFiSignalLight'>
					<img className='Path_6' src = {ImgAsset.statuslight_Path_6} />
					<img className='Path_7' src = {ImgAsset.statuslight_Path_7} />
					<img className='Path_8' src = {ImgAsset.statuslight_Path_8} />
				</div>
				<div className='BatteryLight'>
					<img className='_' src = {ImgAsset.statuslight__} />
					<img className='Subtract_2' src = {ImgAsset.statuslight_Subtract_2} />
					<img className='Rectangle23' src = {ImgAsset.statuslight_Rectangle23} />
					<div className='Battery'>
						<img className='_100' src = {ImgAsset.statuslight__100} />
						<img className='_50' src = {ImgAsset.statuslight__50} />
						<img className='_10' src = {ImgAsset.statuslight__10} />
					</div>
					<img className='Rectangle21Stroke' src = {ImgAsset.statuslight_Rectangle21Stroke} />
					<div className='Rectangle20'/>
				</div>
			</div>
			<div className='Indicator'>
				<div className='Indicator_1'/>
			</div>
			<div className='TimeLight'>
				<div className='_941'>
					<img className='_941_1' src = {ImgAsset.statuslight__941_1} />
				</div>
			</div>
		</div>
	)
}