import React from 'react'
import './Home.css'
import ImgAsset from '../public'
import Footerhome from "./Footerhome"
import DarkModeYES from "./DarkModeYES"
import Title from "./Title"
export default function Home () {
	return (
		<div className='Home_Home'>
			<div className='bg'>
				<img className='bg_1' src = {ImgAsset.Home_bg_1} />
			</div>
			<div className='Footer'>
				<Footerhome className='Footerhome'/>
				<div className='xAppIconsCamera'>
					<div className='Ellipse18'/>
					<img className='AppIcon' src = {ImgAsset.xAppIconsCamera_AppIcon} />
				</div>
			</div>
			<div className='ads'>
				<div className='ads_1'>
					<div className='bg_2'/>
					<img className='image1' src = {ImgAsset.Home_image1} />
				</div>
				<div className='ads_2'>
					<div className='bg_3'/>
					<img className='image2' src = {ImgAsset.Home_image2} />
				</div>
			</div>
			<div className='title'>
				<span className='Hellothere'>Hello there</span>
				<span className='Thisiswhatwehavefortodya'>This is what we have for today</span>
			</div>
			<div className='Status'>
				<DarkModeYES className='statusdark'/>
			</div>
			<div className='Avatar'>
				<div className='Ellipse212'/>
				<div className='MaskGroup'>
					<div className='Avatar_1'>
						<img className='Vector' src = {ImgAsset.Home_Vector} />
					</div>
					<img className='Vector_1' src = {ImgAsset.Home_Vector_1} />
					<img className='Vector_2' src = {ImgAsset.Home_Vector_2} />
					<div className='Group'>
						<img className='Vector_3' src = {ImgAsset.Home_Vector_3} />
						<img className='Vector_4' src = {ImgAsset.Home_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.Home_Vector_5} />
						<img className='Vector_6' src = {ImgAsset.Home_Vector_6} />
						<img className='Vector_7' src = {ImgAsset.Home_Vector_7} />
						<img className='Vector_8' src = {ImgAsset.Home_Vector_8} />
						<img className='Vector_9' src = {ImgAsset.Home_Vector_9} />
						<img className='Vector_10' src = {ImgAsset.Home_Vector_10} />
						<img className='Vector_11' src = {ImgAsset.Home_Vector_11} />
					</div>
					<img className='Vector_12' src = {ImgAsset.Home_Vector_12} />
					<div className='Group_1'>
						<img className='Vector_13' src = {ImgAsset.Home_Vector_13} />
						<div className='Group_2'>
							<img className='Vector_14' src = {ImgAsset.Home_Vector_14} />
							<div className='Group_3'>
								<img className='Vector_15' src = {ImgAsset.Home_Vector_15} />
								<img className='Vector_16' src = {ImgAsset.Home_Vector_16} />
								<img className='Vector_17' src = {ImgAsset.Home_Vector_17} />
								<img className='Vector_18' src = {ImgAsset.Home_Vector_18} />
								<img className='Vector_19' src = {ImgAsset.Home_Vector_19} />
								<img className='Vector_20' src = {ImgAsset.Home_Vector_20} />
								<img className='Vector_21' src = {ImgAsset.Home_Vector_21} />
								<img className='Vector_22' src = {ImgAsset.Home_Vector_22} />
								<div className='Group_4'>
									<img className='Vector_23' src = {ImgAsset.Home_Vector_23} />
									<img className='Vector_24' src = {ImgAsset.Home_Vector_24} />
								</div>
							</div>
						</div>
						<img className='Vector_25' src = {ImgAsset.Home_Vector_25} />
						<img className='Vector_26' src = {ImgAsset.Home_Vector_26} />
						<img className='Vector_27' src = {ImgAsset.Home_Vector_27} />
						<img className='Vector_28' src = {ImgAsset.Home_Vector_28} />
						<img className='Vector_29' src = {ImgAsset.Home_Vector_29} />
						<img className='Vector_30' src = {ImgAsset.Home_Vector_30} />
						<img className='Vector_31' src = {ImgAsset.Home_Vector_31} />
					</div>
					<div className='Group_5'>
						<div className='Group_6'>
							<img className='Vector_32' src = {ImgAsset.Home_Vector_32} />
							<img className='Vector_33' src = {ImgAsset.Home_Vector_33} />
							<img className='Vector_34' src = {ImgAsset.Home_Vector_34} />
							<img className='Vector_35' src = {ImgAsset.Home_Vector_35} />
							<img className='Vector_36' src = {ImgAsset.Home_Vector_36} />
							<img className='Vector_37' src = {ImgAsset.Home_Vector_37} />
							<img className='Vector_38' src = {ImgAsset.Home_Vector_38} />
							<img className='Vector_39' src = {ImgAsset.Home_Vector_39} />
							<img className='Vector_40' src = {ImgAsset.Home_Vector_40} />
						</div>
						<img className='Vector_41' src = {ImgAsset.Home_Vector_41} />
						<img className='Vector_42' src = {ImgAsset.Home_Vector_42} />
					</div>
					<img className='image3' src = {ImgAsset.People_image3} />
				</div>
			</div>
			<div className='learningplan'>
				<div className='bg_4'>
					<div className='Rectangle29'/>
				</div>
				<Title className='Title'/>
				<span className='Seemore'>See more</span>
			</div>
			<span className='factum'>Факт (лат. factum букв. «сде́ланное») термин, в широком смысле может выступать как синоним истины; событие или результат; реальное, а не вымышленное; конкретное и единичное в противоположность общему и абстрактному.</span>
		</div>
	)
}