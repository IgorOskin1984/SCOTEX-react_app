import React from "react";
import s from './Button.module.css'
import { NavLink } from "react-router-dom";

export const Button = (props) => {
	return (
		<>
			<NavLink to='/getStarted' className={s.button} href="#">Get started</NavLink>
		</>
	)
}