import React from 'react'
import './Person.css'
import ImgAsset from '../public'
import iconarrowright from "./iconarrowright"
import statuslight from "./statuslight"
import Footerhome from "./Footerhome"
import iconcamera from "./iconcamera"
export default function Person () {
	return (
		<div className='Person_Person'>
			<div className='Cell'>
				<div className='Cells'>
					<div className='Cell_1'>
						<div className='Rectangle53'/>
						<span className='Bio'>Bio</span>
						<span className='more'>more</span>
						<iconarrowright className='iconarrowright'/>
					</div>
					<div className='Cell_2'>
						<div className='Rectangle53_1'/>
						<span className='Email'>Email</span>
						<span className='more_1'>more</span>
						<iconarrowright className='iconarrowright_1'/>
					</div>
					<div className='Cell_3'>
						<div className='Rectangle53_2'/>
						<span className='ISU'>ISU</span>
						<span className='more_2'>more</span>
						<iconarrowright className='iconarrowright_2'/>
					</div>
					<div className='Cell_4'>
						<div className='Rectangle53_3'/>
						<span className='Scientificresearches'>Scientific researches</span>
						<span className='more_3'>more</span>
						<iconarrowright className='iconarrowright_3'/>
					</div>
				</div>
			</div>
			<div className='bg'>
				<img className='bg_1' src = {ImgAsset.Person_bg_1} />
			</div>
			<div className='Title'>
				<span className='KlimenkovHH'>Klimenkov H.H.</span>
			</div>
			<div className='Status'>
				<statuslight className='statuslight'/>
			</div>
			<Footerhome className='FooterMessage'/>
			<div className='Rectangle26'/>
			<span className='Todayfact'>Some text</span>
			<div className='Avatar'>
				<div className='Avatar_1'>
					<div className='Ellipse212'/>
					<div className='MaskGroup'>
						<div className='Avatar_2'>
							<img className='Vector' src = {ImgAsset.Person_Vector} />
						</div>
						<img className='Vector_1' src = {ImgAsset.Person_Vector_1} />
						<img className='Vector_2' src = {ImgAsset.Person_Vector_2} />
						<div className='Group'>
							<img className='Vector_3' src = {ImgAsset.Person_Vector_3} />
							<img className='Vector_4' src = {ImgAsset.Person_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.Person_Vector_5} />
							<img className='Vector_6' src = {ImgAsset.Person_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Person_Vector_7} />
							<img className='Vector_8' src = {ImgAsset.Person_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.Person_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.Person_Vector_10} />
							<img className='Vector_11' src = {ImgAsset.Person_Vector_11} />
						</div>
						<img className='Vector_12' src = {ImgAsset.Person_Vector_12} />
						<div className='Group_1'>
							<img className='Vector_13' src = {ImgAsset.Person_Vector_13} />
							<div className='Group_2'>
								<img className='Vector_14' src = {ImgAsset.Person_Vector_14} />
								<div className='Group_3'>
									<img className='Vector_15' src = {ImgAsset.Person_Vector_15} />
									<img className='Vector_16' src = {ImgAsset.Person_Vector_16} />
									<img className='Vector_17' src = {ImgAsset.Person_Vector_17} />
									<img className='Vector_18' src = {ImgAsset.Person_Vector_18} />
									<img className='Vector_19' src = {ImgAsset.Person_Vector_19} />
									<img className='Vector_20' src = {ImgAsset.Person_Vector_20} />
									<img className='Vector_21' src = {ImgAsset.Person_Vector_21} />
									<img className='Vector_22' src = {ImgAsset.Person_Vector_22} />
									<div className='Group_4'>
										<img className='Vector_23' src = {ImgAsset.Person_Vector_23} />
										<img className='Vector_24' src = {ImgAsset.Person_Vector_24} />
									</div>
								</div>
							</div>
							<img className='Vector_25' src = {ImgAsset.Person_Vector_25} />
							<img className='Vector_26' src = {ImgAsset.Person_Vector_26} />
							<img className='Vector_27' src = {ImgAsset.Person_Vector_27} />
							<img className='Vector_28' src = {ImgAsset.Person_Vector_28} />
							<img className='Vector_29' src = {ImgAsset.Person_Vector_29} />
							<img className='Vector_30' src = {ImgAsset.Person_Vector_30} />
							<img className='Vector_31' src = {ImgAsset.Person_Vector_31} />
						</div>
						<div className='Group_5'>
							<div className='Group_6'>
								<img className='Vector_32' src = {ImgAsset.Person_Vector_32} />
								<img className='Vector_33' src = {ImgAsset.Person_Vector_33} />
								<img className='Vector_34' src = {ImgAsset.Person_Vector_34} />
								<img className='Vector_35' src = {ImgAsset.Person_Vector_35} />
								<img className='Vector_36' src = {ImgAsset.Person_Vector_36} />
								<img className='Vector_37' src = {ImgAsset.Person_Vector_37} />
								<img className='Vector_38' src = {ImgAsset.Person_Vector_38} />
								<img className='Vector_39' src = {ImgAsset.Person_Vector_39} />
								<img className='Vector_40' src = {ImgAsset.Person_Vector_40} />
							</div>
							<img className='Vector_41' src = {ImgAsset.Person_Vector_41} />
							<img className='Vector_42' src = {ImgAsset.Person_Vector_42} />
						</div>
					</div>
				</div>
				<div className='Icon'>
					<div className='Ellipse72'/>
					<iconcamera className='iconcamera'/>
				</div>
			</div>
		</div>
	)
}