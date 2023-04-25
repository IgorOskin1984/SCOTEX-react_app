import React from "react";
import s from './Menu.module.css'
import { LiNavLink } from "../Menu_link/MenuLink";
import SelectPage from "../Menu_Small_Components/SelectPage";


const menuLinkCreater = (arr, props) => arr.map((title) => {
	if (!title) {
		return console.error('error at initial array headerSlice');
	}
	let newtitle = title[0].toUpperCase() + title.slice(1);

	switch (newtitle) {
		case 'Pages':
			return (
				<SelectPage key={title} title={newtitle} links={props.links} />
			)
		default:
			return (
				<LiNavLink key={title} linkPath={title} title={newtitle} />
			)
	}

})

export const Menu = (props) => {
	return (
		<>
			<nav className={s.menu}>
				<div className={`${s.menuBody} ${props.isToggle ? s.openBodyMenu : ''} `}>
					<ul className={s.menuList}>
						{/*<MenuLink />*/}
						{menuLinkCreater(props.menuTitles, props)}
					</ul>
				</div>
			</nav>
		</>
	)
}