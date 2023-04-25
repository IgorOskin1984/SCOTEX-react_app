import React from "react";
import s from './Burger.module.css'
export const Burger = (props) => {
	return (
		<>
			<button onClick={props.onBurgerClick}
				className={`${s.iconMenu} ${props.isToggle ? s.active : ""}`}
				type="button">
				<span></span>
			</button>
		</>
	)
}