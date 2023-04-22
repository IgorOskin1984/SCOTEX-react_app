import React from "react";
import s from './Footer.module.css'
import { NavLink } from "react-router-dom";
import { Button } from "../small_Components/Button/Button";
import { LiNavLink } from "../Header/Menu_link/MenuLink";

const Column = ({ columnClassName, title, func }) => {
	return (
		<div className={s.column + ' ' + columnClassName}>
			<div className={s.title}>{title}</div>
			<nav className={s.list}>
				{func}
			</nav>
		</div>
	)
}

const Footer = (props) => {

	const growfySocialsCreater = (arr) => {
		return arr.map((item) => {
			return (
				<NavLink key={item.key} className={s.socialItem} to={item.link}>
					<img src={item.icon} alt={item.key} />
				</NavLink>
			)
		})
	}

	const pagesNavItemСreater = (arr) => {
		return arr.map((title) => {
			if (!title) {
				return console.error('some error');
			}
			let newtitle = title[0].toUpperCase() + title.slice(1);
			return <LiNavLink liClassName={s.pagesColumnItem} className={s.pagesColumnLinksItem} key={title} linkPath={title} title={newtitle} />
		})
	}

	const utilityColumnLinkCreater = (arr) => {
		return arr.map((item) => {
			return (
				<li>
					<NavLink key={item.name} className={s.utilityColumnListItem} to={item.link}>{item.name}</NavLink>
				</li>
			)
		})
	}
	return (
		<div className={s.footer}>

			<div className={s.mainFooter}>
				<div className={s.container}>
					<div className={s.column + ' ' + s.growfy}>
						<div className={s.growfyImage}>
							<img src={props.logo} alt="growfy" />
						</div>
						<div className={s.growfyText}>
							<p>
								{props.growfyText}
							</p>
						</div>
						<div className={s.growfySocial}>
							{/* NavLinks */}
							{growfySocialsCreater(props.growfySocialIcons)}
						</div>
					</div>

					<Column columnClassName={s.pages} title={props.pagesColumnTitle} func={pagesNavItemСreater(props.pagesColumnLinks)} />
					<Column columnClassName={s.utility} title={props.utilityColumnTitle} func={utilityColumnLinkCreater(props.utilityColumnLinks)} />

					<div className={s.column}>
						<div className={s.title}>Subscribe to our newsletter</div>
						<div className={s.text}>Lorem ipsum dolor sit am consectetur adipiscing</div>
						<div className={s.actions}>
							<input required type="email" placeholder="Enter your email" />
							<Button buttonText={props.buttonText} />
						</div>

					</div>
				</div>
			</div>

			<div className={s.bottomFooter}>
				<div className={s.container}>
					<div className={s.copy}>
						© 2022
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;