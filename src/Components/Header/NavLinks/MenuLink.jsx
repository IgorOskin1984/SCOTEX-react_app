import React from "react";
import s from './MenuLink.module.css'
import { NavLink } from "react-router-dom";

export const LiNavLink = (props) => {
	return (
		<>
			<li onClick={props.onPageItemClick} className={s.listItem + ' ' + props.liClassName}>
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