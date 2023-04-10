import React from "react";
import s from './Cart.module.css'

export const Cart = (props) => {
	return (
		<>
			<a className={s.cart} href="3">
				<span className={s.cartText} >Cart</span>
				<span className={s.cartQuantity}>0</span>
			</a>
		</>
	)
}