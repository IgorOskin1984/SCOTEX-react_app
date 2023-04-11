import React from "react";
import './../../css/App.css'
import s from './Header.module.css'
import logo from './../../images/logo.svg'
import { Button } from "../small_Components/Button/Button";
import { Burger } from "./Burger/Burger";
import { Menu } from "./Menu/Menu";
import { Cart } from "./Cart/Cart";
import MenuContainer from "./Menu/MenuContainer";


const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.container}>

				<a className={s.logo} href="#">
					<img src={logo} alt="logo" />
				</a>

				<MenuContainer />
				<Cart />
				<Button />

				<Burger />
			</div>
		</div>
	)
}

export default Header;