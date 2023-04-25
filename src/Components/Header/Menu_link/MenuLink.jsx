import React from "react";
import s from './MenuLink.module.css'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showMenuTitlesAC } from "../../../Redux/header-toolkitSlice";

export const LiNavLink = (props) => {

	const dispatch = useDispatch()
	const onMenuLinkClick = () => {
		dispatch(showMenuTitlesAC())
	}

	return (
		<>
			<li onClick={onMenuLinkClick} className={s.listItem + ' ' + props.liClassName}>
				<NavLink
					to={`/${props.linkPath}`}
					className={({ isActive }) => isActive ? s.isActive : s.listLink + ' ' + props.className}
				>

					{props.title}
				</NavLink>
			</li >
		</>
	)
}