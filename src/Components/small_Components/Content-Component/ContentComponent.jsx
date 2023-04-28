import React from "react";
import s from './ContentComponent.module.css'
import { NavLink } from "react-router-dom";

const ContentComponent = (props) => {

	//неиспользуемая функция
	const navTo = (label) => {
		switch (label) {
			case 'why choose us':
				return '/aboutUs'
			case 'Testimonials':
				return '/testimonials'
			case 'Blog':
				return '/blog'
			default:
				return `/${label}`;
		}
	}

	const path = navTo(props.payload.label)

	return <>
		<div className={s.wrapper}>
			{props.payload.label && <NavLink to={path} className={s.label}>{props.payload.label}</NavLink>}
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