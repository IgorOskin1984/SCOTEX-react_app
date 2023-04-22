import React from "react";
import s from './Footer.module.css'

const Footer = (props) => {
	return (
		<div className={s.footer}>

			<div className={s.mainFooter}>
				<div className={s.container}>
					<div className={s.column + ' ' + s.growfy}>
						<div className={s.growfyImage}>
							<img src='' alt="growfy" />
						</div>
						<div className={s.growfyText}>
							<p>
								Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.
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
								<NavLink to={'/contact'}>Contact</NavLink>
							</li>
						</nav>

					</div>

					<div className={s.column}>

					</div>
					<div className={s.column}></div>
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