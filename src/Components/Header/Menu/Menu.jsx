import React from "react";
import s from './Menu.module.css'
import { LiNavLink } from "../Menu_link/MenuLink";


const menuLinkCreater = (arr) => arr.map((title) => {
	if (!title) {
		return console.error('error at initial array headerSlice');
	}
	let newtitle = title[0].toUpperCase() + title.slice(1);

	return (
		<LiNavLink key={title} linkPath={title} title={newtitle} />
	)
})

export const Menu = (props) => {
	return (
		<>
			<nav className={s.menu}>
				<div className={`${s.menuBody} ${props.isToggle ? s.openBodyMenu : ''} `}>
					<ul className={s.menuList}>
						{/*<MenuLink />*/}
						{menuLinkCreater(props.menuTitles)}
					</ul>
				</div>
			</nav>
		</>
	)
}