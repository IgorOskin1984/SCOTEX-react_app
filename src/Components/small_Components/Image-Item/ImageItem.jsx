import React from "react";
import imagePeople from './../../../images/peopls-img/01.jpg'
import s from './Container-imageItem'

const ImageItem = (props) => {
	return <>
		<div className={s.imageItem}>
			<img src={props.peoplsPhoto} alt="" />
		</div>
	</>
}

export default ImageItem;