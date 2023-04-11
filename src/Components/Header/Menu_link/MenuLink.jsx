import React from "react";
import s from './MenuLink.module.css'

export const MenuLink = (props) => {
	return (
		<>
			<li className={s.listItem}>
				<a className={s.listLink} href="#">{props.title}</a>
			</li>
		</>
	)
}