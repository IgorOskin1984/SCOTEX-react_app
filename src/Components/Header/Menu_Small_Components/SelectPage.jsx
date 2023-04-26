import React from "react";
import { LiNavLink } from "../Menu_link/MenuLink";
import s from './SelectPage.module.css'
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showPagesListAC } from "../../../Redux/header-toolkitSlice";

const pagesNavItemСreater = (arr) => {
	return arr.map((title) => {
		if (!title) {
			return console.error('some error');
		}
		let newtitle = title[0].toUpperCase() + title.slice(1);
		return <LiNavLink
			liClassName={s.pagesColumnItem}
			className={s.hederPagesLinks}
			key={title} linkPath={title} title={newtitle} />
	})
}


const SelectPage = ({ links, title }) => {

	//const dispatch = useDispatch(showPagesListAC())
	//const classNames = isListOpen ? `${s.body} ${s.active}` : s.body;

	return (
		<li className={s.pageLink} >
			<div className={s.title}>
				<p >{title}</p>
			</div>
			<div className={s.body}>
				<ul className={s.items}>
					{pagesNavItemСreater(links)}
				</ul>
			</div>
		</li>
	)
}

export default SelectPage;