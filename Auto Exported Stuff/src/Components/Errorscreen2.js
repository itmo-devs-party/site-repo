import React from 'react'
import './Errorscreen2.css'
import ImgAsset from '../public'
import navigationbarlight from "./navigationbarlight"
import statuslight from "./statuslight"
export default function Errorscreen2 () {
	return (
		<div className='Errorscreen2_Errorscreen2'>
			<span className='NoInformationFound'>No Information Found!</span>
			<span className='Wellnofifyyouoncewehavesomethingforyou'>We’ll nofify you once we have something for you </span>
			<div className='Frame30'>
			</div>
			<div className='Illustration'>
				<div className='Nonotifcations'>
					<img className='Vector' src = {ImgAsset.Errorscreen2_Vector} />
					<div className='Group'>
						<img className='Vector_1' src = {ImgAsset.Errorscreen2_Vector_1} />
						<div className='Group_1'>
							<img className='Vector_2' src = {ImgAsset.Errorscreen2_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.Errorscreen2_Vector_3} />
							<img className='Vector_4' src = {ImgAsset.Errorscreen2_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.Errorscreen2_Vector_5} />
						</div>
						<div className='Group_2'>
							<img className='Vector_6' src = {ImgAsset.Errorscreen2_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Errorscreen2_Vector_7} />
						</div>
					</div>
					<img className='Vector_8' src = {ImgAsset.Errorscreen2_Vector_8} />
					<img className='Vector_9' src = {ImgAsset.Errorscreen2_Vector_9} />
					<div className='Group_3'>
						<img className='Vector_10' src = {ImgAsset.Errorscreen2_Vector_10} />
						<img className='Vector_11' src = {ImgAsset.Errorscreen2_Vector_11} />
						<img className='Vector_12' src = {ImgAsset.Errorscreen2_Vector_12} />
						<img className='Vector_13' src = {ImgAsset.Errorscreen2_Vector_13} />
						<img className='Vector_14' src = {ImgAsset.Errorscreen2_Vector_14} />
						<img className='Vector_15' src = {ImgAsset.Errorscreen2_Vector_15} />
						<img className='Vector_16' src = {ImgAsset.Errorscreen2_Vector_16} />
						<img className='Vector_17' src = {ImgAsset.Errorscreen2_Vector_17} />
						<img className='Vector_18' src = {ImgAsset.Errorscreen2_Vector_18} />
						<img className='Vector_19' src = {ImgAsset.Errorscreen2_Vector_19} />
						<img className='Vector_20' src = {ImgAsset.Errorscreen2_Vector_20} />
						<img className='Vector_21' src = {ImgAsset.Errorscreen2_Vector_21} />
						<img className='Vector_22' src = {ImgAsset.Errorscreen2_Vector_22} />
						<img className='Vector_23' src = {ImgAsset.Errorscreen2_Vector_23} />
						<img className='Vector_24' src = {ImgAsset.Errorscreen2_Vector_24} />
						<img className='Vector_25' src = {ImgAsset.Errorscreen2_Vector_25} />
					</div>
				</div>
			</div>
			<div className='Navigation'>
				<navigationbarlight className='navigationbarlight'/>
			</div>
			<div className='Status'>
				<statuslight className='statuslight'/>
			</div>
		</div>
	)
}