import React, { useRef } from "react";
import s from './Menu.module.css'
import { NavLinks } from "../NavLinks/NavLinks";
import SelectPage from "../Menu_Small_Components/SelectPage";
import { showMenuTitlesAC } from "../../../Redux/header-toolkitSlice";
import { useDispatch } from "react-redux";


const menuLinkCreater = (arr, props) => arr.map((title) => {

	const dispatch = useDispatch()

	const onPageItemClick = () => {
		dispatch(showMenuTitlesAC())
	}

	if (!title) {
		return console.error('error at initial array headerSlice');
	}
	let newtitle = title[0].toUpperCase() + title.slice(1);
	switch (newtitle) {
		case 'Pages':
			return (
				<SelectPage key={title}
					title={newtitle}
					links={props.links}
					onPageItemClick={onPageItemClick}
				/>
			)
		default:
			return (
				<NavLinks
					onPageItemClick={onPageItemClick}
					key={title}
					linkPath={title}
					title={newtitle} />
			)
	}

})

export const Menu = (props) => {
	//const componentRef = useRef(null);
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