import React from "react";
import s from './Button.module.css'
import { NavLink } from "react-router-dom";

export const Button = ({ buttonColor, buttonText, ...restProps }) => {
	//debugger
	const backgroundColor = buttonColor || undefined
	return (
		<>
			<NavLink to='/getStarted'
				className={s.button}
				style={{ backgroundColor }}
				href="#">{buttonText}</NavLink>
		</>
	)
}