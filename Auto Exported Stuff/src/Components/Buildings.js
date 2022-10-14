import React from 'react'
import './Buildings.css'
import ImgAsset from '../public'
import Title from "./Title"
import tabon from "./tabon"
import taboff from "./taboff"
import Courselist from "./Courselist"
import Footerhome from "./Footerhome"
import Search_1 from "./Search_1"
import statuslight from "./statuslight"
export default function Buildings () {
	return (
		<div className='Buildings_Buildings'>
			<div className='Courses'>
				<div className='Title'>
					<div className='Rectangle85'/>
					<Title className='Title_1'/>
				</div>
				<div className='Tabs'>
					<div className='tabs'>
						<tabon className='tabon'/>
						<taboff className='taboff'/>
						<taboff className='taboff_1'/>
					</div>
				</div>
				<div className='Courselist'>
					<div className='List'>
						<Courselist className='Courselist_1'/>
						<Courselist className='Courselist_2'/>
						<Courselist className='Courselist_3'/>
						<Courselist className='Courselist_4'/>
					</div>
				</div>
			</div>
			<div className='Footer'>
				<Footerhome className='FooterCourse'/>
			</div>
			<div className='SearchBar'>
				<Search_1 className='Search'/>
			</div>
			<div className='Title_2'>
				<span className='Buildings_1'>Buildings</span>
			</div>
			<div className='Status'>
				<statuslight className='statuslight'/>
			</div>
			<div className='Avatar'>
				<div className='Ellipse212'/>
				<div className='MaskGroup'>
					<div className='Avatar_1'>
						<img className='Vector' src = {ImgAsset.Buildings_Vector} />
					</div>
					<img className='Vector_1' src = {ImgAsset.Buildings_Vector_1} />
					<img className='Vector_2' src = {ImgAsset.Buildings_Vector_2} />
					<div className='Group'>
						<img className='Vector_3' src = {ImgAsset.Buildings_Vector_3} />
						<img className='Vector_4' src = {ImgAsset.Buildings_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.Buildings_Vector_5} />
						<img className='Vector_6' src = {ImgAsset.Buildings_Vector_6} />
						<img className='Vector_7' src = {ImgAsset.Buildings_Vector_7} />
						<img className='Vector_8' src = {ImgAsset.Buildings_Vector_8} />
						<img className='Vector_9' src = {ImgAsset.Buildings_Vector_9} />
						<img className='Vector_10' src = {ImgAsset.Buildings_Vector_10} />
						<img className='Vector_11' src = {ImgAsset.Buildings_Vector_11} />
					</div>
					<img className='Vector_12' src = {ImgAsset.Buildings_Vector_12} />
					<div className='Group_1'>
						<img className='Vector_13' src = {ImgAsset.Buildings_Vector_13} />
						<div className='Group_2'>
							<img className='Vector_14' src = {ImgAsset.Buildings_Vector_14} />
							<div className='Group_3'>
								<img className='Vector_15' src = {ImgAsset.Buildings_Vector_15} />
								<img className='Vector_16' src = {ImgAsset.Buildings_Vector_16} />
								<img className='Vector_17' src = {ImgAsset.Buildings_Vector_17} />
								<img className='Vector_18' src = {ImgAsset.Buildings_Vector_18} />
								<img className='Vector_19' src = {ImgAsset.Buildings_Vector_19} />
								<img className='Vector_20' src = {ImgAsset.Buildings_Vector_20} />
								<img className='Vector_21' src = {ImgAsset.Buildings_Vector_21} />
								<img className='Vector_22' src = {ImgAsset.Buildings_Vector_22} />
								<div className='Group_4'>
									<img className='Vector_23' src = {ImgAsset.Buildings_Vector_23} />
									<img className='Vector_24' src = {ImgAsset.Buildings_Vector_24} />
								</div>
							</div>
						</div>
						<img className='Vector_25' src = {ImgAsset.Buildings_Vector_25} />
						<img className='Vector_26' src = {ImgAsset.Buildings_Vector_26} />
						<img className='Vector_27' src = {ImgAsset.Buildings_Vector_27} />
						<img className='Vector_28' src = {ImgAsset.Buildings_Vector_28} />
						<img className='Vector_29' src = {ImgAsset.Buildings_Vector_29} />
						<img className='Vector_30' src = {ImgAsset.Buildings_Vector_30} />
						<img className='Vector_31' src = {ImgAsset.Buildings_Vector_31} />
					</div>
					<div className='Group_5'>
						<div className='Group_6'>
							<img className='Vector_32' src = {ImgAsset.Buildings_Vector_32} />
							<img className='Vector_33' src = {ImgAsset.Buildings_Vector_33} />
							<img className='Vector_34' src = {ImgAsset.Buildings_Vector_34} />
							<img className='Vector_35' src = {ImgAsset.Buildings_Vector_35} />
							<img className='Vector_36' src = {ImgAsset.Buildings_Vector_36} />
							<img className='Vector_37' src = {ImgAsset.Buildings_Vector_37} />
							<img className='Vector_38' src = {ImgAsset.Buildings_Vector_38} />
							<img className='Vector_39' src = {ImgAsset.Buildings_Vector_39} />
							<img className='Vector_40' src = {ImgAsset.Buildings_Vector_40} />
						</div>
						<img className='Vector_41' src = {ImgAsset.Buildings_Vector_41} />
						<img className='Vector_42' src = {ImgAsset.Buildings_Vector_42} />
					</div>
					<img className='image3' src = {ImgAsset.People_image3} />
				</div>
			</div>
		</div>
	)
}