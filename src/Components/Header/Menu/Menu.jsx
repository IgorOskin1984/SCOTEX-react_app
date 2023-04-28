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

	const newTitle = (name) => {
		const capitalizedWords = name.split(' ').map(word => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		return capitalizedWords.join(" ")
	}

	if (!title) {
		return console.error('error at initial array headerSlice');
	}

	const path = (title) => {
		const capitalizedWords = title.split(' ').map(word => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		const joiningWord = capitalizedWords.join("")
		const newPath = joiningWord.charAt(0).toLowerCase() + joiningWord.slice(1)
		return newPath;
	}

	let newtitle = newTitle(title)
	title = path(title);


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