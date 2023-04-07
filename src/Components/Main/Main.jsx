import React from "react";
import './../../css/index.css'
import s from './Main.module.css'

const Main = (props) => {
	return (
		<div className={s.mainPage + ' ' + s.container}>
			<h1>main</h1>
		</div>
	)
}

export default Main;