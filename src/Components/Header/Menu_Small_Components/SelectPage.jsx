import React from "react";
import { LiNavLink } from "../Menu_link/MenuLink";
import s from './SelectPage.module.css'
import { NavLink, Navigate } from "react-router-dom";

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
	return (
		<>
			<NavLink>
				<li className={s.title}>
					{title}
					<div className={s.body}>
						<ul className={s.items} >
							{pagesNavItemСreater(links)}
						</ul>
					</div>
				</li>

			</NavLink>
		</>


	)
}

export default SelectPage;