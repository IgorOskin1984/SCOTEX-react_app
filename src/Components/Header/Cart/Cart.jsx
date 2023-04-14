import React from "react";
import s from './Cart.module.css'
import { NavLink } from "react-router-dom";

export const Cart = (props) => {
	return (
		<>
			<NavLink to='/сart' className={s.cart} href="3">
				<span className={s.cartText} >Cart</span>
				<span className={s.cartQuantity}>0</span>
			</NavLink>
		</>
	)
}