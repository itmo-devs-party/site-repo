import React from 'react'
import './Erroescreen1.css'
import ImgAsset from '../public'
import navigationbarlight from "./navigationbarlight"
import statuslight from "./statuslight"
export default function Erroescreen1 () {
	return (
		<div className='Erroescreen1_Erroescreen1'>
			<span className='NoNetwork'>No Network!</span>
			<span className='Pleasecheckyourinternetconnectionandtryagain'>Please check your internet connection and try again</span>
			<div className='Frame30'>
			</div>
			<div className='Illustration'>
				<div className='NoNetwork_1'>
					<div className='Group'>
						<img className='Vector' src = {ImgAsset.Erroescreen1_Vector} />
						<div className='Group_1'>
							<img className='Vector_1' src = {ImgAsset.Erroescreen1_Vector_1} />
							<div className='Group_2'>
								<img className='Vector_2' src = {ImgAsset.Erroescreen1_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.Erroescreen1_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.Erroescreen1_Vector_4} />
							</div>
						</div>
						<img className='Vector_5' src = {ImgAsset.Erroescreen1_Vector_5} />
						<img className='Vector_6' src = {ImgAsset.Erroescreen1_Vector_6} />
						<img className='Vector_7' src = {ImgAsset.Erroescreen1_Vector_7} />
						<img className='Vector_8' src = {ImgAsset.Erroescreen1_Vector_8} />
						<img className='Vector_9' src = {ImgAsset.Erroescreen1_Vector_9} />
						<div className='Group_3'>
							<img className='Vector_10' src = {ImgAsset.Erroescreen1_Vector_10} />
							<img className='Vector_11' src = {ImgAsset.Erroescreen1_Vector_11} />
							<img className='Vector_12' src = {ImgAsset.Erroescreen1_Vector_12} />
						</div>
						<div className='Group_4'>
							<img className='Vector_13' src = {ImgAsset.Erroescreen1_Vector_13} />
							<img className='Vector_14' src = {ImgAsset.Erroescreen1_Vector_14} />
							<img className='Vector_15' src = {ImgAsset.Erroescreen1_Vector_15} />
							<img className='Vector_16' src = {ImgAsset.Erroescreen1_Vector_16} />
						</div>
						<div className='Group_5'>
							<img className='Vector_17' src = {ImgAsset.Erroescreen1_Vector_17} />
							<img className='Vector_18' src = {ImgAsset.Erroescreen1_Vector_18} />
							<img className='Vector_19' src = {ImgAsset.Erroescreen1_Vector_19} />
						</div>
						<img className='Vector_20' src = {ImgAsset.Erroescreen1_Vector_20} />
						<img className='Vector_21' src = {ImgAsset.Erroescreen1_Vector_21} />
						<img className='Vector_22' src = {ImgAsset.Erroescreen1_Vector_22} />
						<img className='Vector_23' src = {ImgAsset.Erroescreen1_Vector_23} />
						<img className='Vector_24' src = {ImgAsset.Erroescreen1_Vector_24} />
						<img className='Vector_25' src = {ImgAsset.Erroescreen1_Vector_25} />
						<img className='Vector_26' src = {ImgAsset.Erroescreen1_Vector_26} />
						<img className='Vector_27' src = {ImgAsset.Erroescreen1_Vector_27} />
					</div>
					<img className='Vector_28' src = {ImgAsset.Erroescreen1_Vector_28} />
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