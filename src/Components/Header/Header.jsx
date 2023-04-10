import React from "react";
import './../../css/App.css'
import s from './Header.module.css'
import logo from './../../images/logo.svg'
import { Button } from "../small_Components/Button/Button";
import { MenuLink } from "./Menu_link/MenuLink";
import { Burger } from "./Burger/Burger";


const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.container}>
				<a className={s.logo} href="#">
					<img src={logo} alt="logo" />
				</a>

				<nav className={s.menu}>
					<ul className={s.menuList}>
						<MenuLink />
						<MenuLink />
						<MenuLink />
						<MenuLink />
					</ul>
				</nav>

				<a className={s.cart} href="3">
					<span className={s.cartText} >Cart</span>
					<span className={s.cartQuantity}>0</span>
				</a>

				<Button />
				<Burger />
			</div>
		</div>
	)
}

export default Header;