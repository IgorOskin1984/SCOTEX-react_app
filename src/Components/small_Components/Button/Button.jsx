import React from "react";
import s from './Button.module.css'
import { NavLink } from "react-router-dom";

export const Button = ({ buttonColor, buttonText, ...restProps }) => {
	//debugger
	const backgroundColor = buttonColor || undefined

	const pathFunc = (buttonText) => {
		switch (buttonText) {
			case 'Get started':
				return '/contact'
			case 'Our services':
				return '/services'
			case 'Contact us':
				return '/contact'
			case 'All services':
				return '/services'
			case 'Get in touch':
				return '/testimonials'
			case 'All Posts':
				return '/blog'
			case 'All Posts':
				return '/blog'

			default:
				return buttonText;
		}

	}

	const path = pathFunc(buttonText)

	return (
		<>
			<NavLink to={path}
				className={s.button}
				style={{ backgroundColor }}
				href="#">{buttonText}</NavLink>
		</>
	)
}