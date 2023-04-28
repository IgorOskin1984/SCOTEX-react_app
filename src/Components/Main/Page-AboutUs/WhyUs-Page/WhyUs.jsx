import React from "react";
import s from './WhyUs.module.css'
import ContentComponent from "../../../small_Components/Content-Component/ContentComponent";

const listItemCreater = (arr) => {
	let key = 0;
	return arr.map((listItem) => {
		key += 1
		return (
			<li key={key} className={s.listItem}>{listItem}</li>
		)
	})
}

const WhyUs = (props) => {
	return <>
		<section className={s.whyUs}>
			<div className={s.container}>
				<div className={s.images}>
					<div className={s.img_01}>
						<img src={props.largeImage} alt="largeImage" />
					</div>
					<div className={s.img_02}>
						<img src={props.smallImage} alt="smallImage" />
					</div>
				</div>
				<div className={s.content}>
					<ContentComponent payload={props.whyUsPageContent} />
					<ul className={s.list}>
						{listItemCreater(props.listItems)}
					</ul>
				</div>
			</div>
		</section>
	</>
}

export default WhyUs;