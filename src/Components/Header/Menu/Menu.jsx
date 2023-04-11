import React from "react";
import s from './Menu.module.css'
import { MenuLink } from "../Menu_link/MenuLink";


const nenuItemCreater = (arr) => arr.map((arrElement) => {
	return (
		<MenuLink key={arrElement} title={arrElement} />
	)
})

export const Menu = (props) => {
	return (
		<>
			<nav className={s.menu}>
				<div className={s.menuBody}>
					<ul className={s.menuList}>
						{/*<MenuLink />*/}
						{nenuItemCreater(props.titles)}

					</ul>
				</div>
			</nav>
		</>
	)
}