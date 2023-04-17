import React from "react";
import s from './Button.module.css'
import { NavLink } from "react-router-dom";

export const Button = ({ buttonText, ...props }) => {
	console.log(props);
	return (
		<>
			<NavLink to='/getStarted'
				className={s.button}
				href="#">{buttonText}</NavLink>
		</>
	)
}