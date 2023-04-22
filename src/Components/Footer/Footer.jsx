import React from "react";
import s from './Footer.module.css'
import { NavLink } from "react-router-dom";
import { Button } from "../small_Components/Button/Button";
import { LiNavLink } from "../Header/Menu_link/MenuLink";

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

	const navItemСreater = (arr) => {
		return arr.map((title) => {
			if (!title) {
				return console.error('some error');
			}
			let newtitle = title[0].toUpperCase() + title.slice(1);
			return <LiNavLink liClassName={s.pagesColumnItem} className={s.pagesColumnLinksItem} key={title} linkPath={title} title={newtitle} />
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

					<div className={s.column + ' ' + s.pages}>
						<div className={s.title}>{props.pagesColumnTitle}</div>
						<nav className={s.list}>
							{navItemСreater(props.pagesColumnLinks)}
						</nav>

					</div>

					<div className={s.column}>
						<div className={s.title}>Utility pages</div>
						<nav className={s.list}>
							<li className={s.item}>
								<NavLink to={'/instructions'}>Instructions</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/styleguide'}>Style guide</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/licenses'}>Licenses</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/changelog'}>Changelog</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/error'}>404 Not found</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/passwordprotected'}>Password protected</NavLink>
							</li>
						</nav>
					</div>


					<div className={s.column}>
						<div className={s.title}>Subscribe to our newsletter</div>
						<div className={s.text}>Lorem ipsum dolor sit am consectetur adipiscing</div>
						<div className={s.actions}>
							<input required type="email" placeholder="Enter your email" />
							<Button />
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