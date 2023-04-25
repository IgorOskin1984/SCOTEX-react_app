import React from "react";
//import './../../css/App.css'
import s from './Header.module.css'
import { Button } from "../small_Components/Button/Button";
import { Cart } from "./Cart/Cart";
import MenuContainer from "./Menu/MenuContainer";
import { NavLink } from "react-router-dom";
import { Burger } from "./Burger/Burger";



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

				<Burger />
			</div>
		</div>
	)
}

export default Header;