import React from "react";
import s from './ContentComponent.module.css'
import { NavLink } from "react-router-dom";

const ContentComponent = (props) => {

	//неиспользуемая функция
	const navTo = (navToTaxt) => {
		switch (navToTaxt) {
			case 'why choose us':
				return navToTaxt = '/about'
			default:
				return `/${navToTaxt}`;
		}
	}

	return <>
		<div className={s.wrapper}>
			{props.payload.label && <NavLink to={'/#'} className={s.label}>{props.payload.label}</NavLink>}
			{props.payload.label
				? <h2 className={s.title}>{props.payload.title}</h2>
				: <h2 className={s.titleWithBefore}>{props.payload.title}</h2>}
			<div className={s.text}>
				{/*<p>*/}
				{props.payload.text}
				{/*</p>*/}
			</div>
		</div>
	</>
}

export default ContentComponent;