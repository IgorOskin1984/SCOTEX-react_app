import React from "react";
//import './../../css/App.css'
import s from './Header.module.css'
import { Button } from "../small_Components/Button/Button";
import { Cart } from "./Cart/Cart";
import MenuContainer from "./Menu/MenuContainer";
import { BurgerContainer } from "./Burger/BurgerContainer";
import { NavLink } from "react-router-dom";



const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.container}>

				<NavLink to='/home' className={s.logo} href="#">
					<img src={props.logo} alt="logo" />
				</NavLink>

				<MenuContainer />
				<Cart />
				<Button buttonText={props.buttonText.getStarted} />

				<BurgerContainer />
			</div>
		</div>
	)
}

export default Header;