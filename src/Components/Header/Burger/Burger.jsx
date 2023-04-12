import React from "react";
import s from './Burger.module.css'
export const Burger = (props) => {
	console.log(props);
	return (
		<>
			<button onClick={props.onBurgerClick} className={s.iconMenu} type="button">
				<span></span>
			</button>
		</>
	)
}