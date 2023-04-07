import React from "react";
import './../../css/App.css'
import s from './Header.module.css'
import logo from './../../images/logo.svg'


const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.container}>
				хедер
			</div>
		</div>
	)
}

export default Header;