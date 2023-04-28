import React from "react";
import { LiNavLink } from "../NavLinks/MenuLink";
import s from './SelectPage.module.css'

const pagesNavItemСreater = (arr, onPageItemClick) => {
	return arr.map((title) => {
		if (!title) {
			return console.error('some error');
		}
		let newtitle = title[0].toUpperCase() + title.slice(1);
		return <LiNavLink
			onPageItemClick={onPageItemClick}
			liClassName={s.pagesColumnItem}
			className={s.hederPagesLinks}
			key={title} linkPath={title} title={newtitle} />
	})
}


const SelectPage = ({ links, title, onPageItemClick }) => {

	const [isActive, setIsActive] = React.useState(false);
	const handleSetActive = () => {
		setIsActive(!isActive);
	};

	const classNames = isActive ? `${s.pageLink} ${s.active}` : s.pageLink;

	return (
		<li className={classNames} onClick={handleSetActive}>
			<div className={s.title}>
				<p >{title}</p>
			</div>
			<div className={s.body}>
				<ul className={s.items}>
					{pagesNavItemСreater(links, onPageItemClick)}
				</ul>
			</div>
		</li>
	)
}

export default SelectPage;