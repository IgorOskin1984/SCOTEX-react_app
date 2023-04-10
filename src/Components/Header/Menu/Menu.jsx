import React from "react";
import s from './Menu.module.css'
import { MenuLink } from "../Menu_link/MenuLink";

export const Menu = (props) => {
	return (
		<>
			<nav className={s.menu}>
				<div className={s.menuBody}>
					<ul className={s.menuList}>
						<MenuLink />
						<MenuLink />
						<MenuLink />
						<MenuLink />
					</ul>
				</div>
			</nav>
		</>
	)
}