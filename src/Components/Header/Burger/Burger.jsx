import React, { useState } from "react";
import s from './Burger.module.css'
import { useDispatch } from "react-redux";
import { showMenuTitlesAC } from "../../../Redux/header-toolkitSlice";

export const Burger = (props) => {

	const [isToggle, setIsToggle] = useState(false);
	const dispatch = useDispatch();

	const omButtonClick = () => {
		dispatch(showMenuTitlesAC());
		setIsToggle(!isToggle);
	}

	return (
		<>
			<button onClick={omButtonClick}
				className={`${s.iconMenu} ${isToggle ? s.active : ""}`}
				type="button">
				<span></span>
			</button>
		</>
	)
}