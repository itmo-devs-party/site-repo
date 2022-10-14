import React from 'react'
import './Empty9.css'
import ImgAsset from '../public'
import navigationbarlight from "./navigationbarlight"
import statuslight from "./statuslight"
export default function Empty9 () {
	return (
		<div className='Empty9_Empty9'>
			<div className='Navigation'>
				<navigationbarlight className='navigationbarlight'/>
			</div>
			<div className='Status'>
				<statuslight className='statuslight'/>
			</div>
			<span className='Noproducts'>No products</span>
			<span className='Youdonthaveanyproductsyet'>You don't have any products yet!</span>
			<div className='Frame30'>
			</div>
			<div className='Illustration'>
				<div className='Group'>
					<img className='Vector' src = {ImgAsset.Empty9_Vector} />
					<div className='Group_1'>
						<div className='Group_2'>
							<img className='Vector_1' src = {ImgAsset.Empty9_Vector_1} />
							<img className='Vector_2' src = {ImgAsset.Empty9_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.Empty9_Vector_3} />
							<img className='Vector_4' src = {ImgAsset.Empty9_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.Empty9_Vector_5} />
							<img className='Vector_6' src = {ImgAsset.Empty9_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Empty9_Vector_7} />
							<img className='Vector_8' src = {ImgAsset.Empty9_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.Empty9_Vector_9} />
						</div>
						<div className='Group_3'>
							<img className='Vector_10' src = {ImgAsset.Empty9_Vector_10} />
							<img className='Vector_11' src = {ImgAsset.Empty9_Vector_11} />
							<img className='Vector_12' src = {ImgAsset.Empty9_Vector_12} />
							<div className='Group_4'>
								<img className='Vector_13' src = {ImgAsset.Empty9_Vector_13} />
							</div>
							<img className='Vector_14' src = {ImgAsset.Empty9_Vector_14} />
							<img className='Vector_15' src = {ImgAsset.Empty9_Vector_15} />
							<img className='Vector_16' src = {ImgAsset.Empty9_Vector_16} />
							<img className='Vector_17' src = {ImgAsset.Empty9_Vector_17} />
						</div>
						<img className='Vector_18' src = {ImgAsset.Empty9_Vector_18} />
						<div className='Group_5'>
							<img className='Vector_19' src = {ImgAsset.Empty9_Vector_19} />
							<img className='Vector_20' src = {ImgAsset.Empty9_Vector_20} />
							<div className='Group_6'>
								<img className='Vector_21' src = {ImgAsset.Empty9_Vector_21} />
							</div>
						</div>
						<div className='Group_7'>
							<img className='Vector_22' src = {ImgAsset.Empty9_Vector_22} />
							<img className='Vector_23' src = {ImgAsset.Empty9_Vector_23} />
							<img className='Vector_24' src = {ImgAsset.Empty9_Vector_24} />
						</div>
						<img className='Vector_25' src = {ImgAsset.Empty9_Vector_25} />
						<img className='Vector_26' src = {ImgAsset.Empty9_Vector_26} />
					</div>
					<div className='Group_8'>
						<div className='Group_9'>
							<img className='Vector_27' src = {ImgAsset.Empty9_Vector_27} />
						</div>
						<div className='Group_10'>
							<img className='Vector_28' src = {ImgAsset.Empty9_Vector_28} />
							<img className='Vector_29' src = {ImgAsset.Empty9_Vector_29} />
							<img className='Vector_30' src = {ImgAsset.Empty9_Vector_30} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}