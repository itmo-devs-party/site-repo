import React from 'react'
import './iconfooterhomeoff.css'
import ImgAsset from '../public'
export default function Iconfooterhomeoff (props) {
	return (
		<div className={`iconfooterhomeoff_iconfooterhomeoff ${props.className}`}>
			<div className='iconfooterhomeon'>
				<div className='Frame28'>
				</div>
			</div>
			<img className='home_1_fill' src = {ImgAsset.iconfooterhomeoff_home_1_fill} />
		</div>
	)
}