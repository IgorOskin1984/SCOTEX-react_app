import React from "react";
import s from './Burger.module.css'

export const Burger = (props) => {
	return (
		<>
			<button className={s.iconMenu} type="button">
				<span></span>
			</button>
		</>
	)
}