import React from "react";
import s from './Footer.module.css'
import { NavLink } from "react-router-dom";
import { Button } from "../small_Components/Button/Button";
import { LiNavLink } from "../Header/Menu_link/MenuLink";

const Footer = (props) => {

	//const navItemcreater = (arr) => {
	//	return arr.map(() => {
	//		if (!title) {
	//			return console.error('error at initial array headerSlice');
	//		}
	//		let newtitle = title[0].toUpperCase() + title.slice(1);
	//		return <LiNavLink key={title} linkPath={title} title={newtitle} />
	//	})
	//}

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
							<NavLink to={'https://www.linkedin.com/feed/'}>
								<img src="" alt="linkedin" />
							</NavLink>
							<NavLink to={'https://twitter.com/?lang=ru'}>
								<img src="" alt="twitter" />
							</NavLink>
							<NavLink to={'https://www.facebook.com/'}>
								<img src="" alt="facebook" />
							</NavLink>
							<NavLink to={'https://www.youtube.com/'}>
								<img src="" alt="youtube" />
							</NavLink>
							<NavLink to={'https://www.instagram.com/'}>
								<img src="" alt="instagram" />
							</NavLink>
						</div>
					</div>

					<div className={s.column + ' ' + s.pages}>
						<div className={s.title}>Pages</div>
						<nav className={s.list}>
							<li className={s.item}>
								<NavLink to={'/home'}>Home</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/about'}>About</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/services'}>Services</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/packages'}>Packages</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/blog'}>Blog</NavLink>
							</li>
							<li className={s.item}>
								<NavLink to={'/Password protected'}>Contact</NavLink>
							</li>
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