import React from "react";
import s from './MenuLink.module.css'
import { NavLink } from "react-router-dom";

export const LiNavLink = (props) => {
	return (
		<>
			<li className={s.listItem}>
				<NavLink to={`/${props.linkPath}`} className={s.listLink} >{props.title}</NavLink>
			</li>
		</>
	)
}