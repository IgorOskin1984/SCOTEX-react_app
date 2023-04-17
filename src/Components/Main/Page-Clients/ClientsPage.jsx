import React from "react";
import s from './ClientsPage.module.css'

const imgRender = (arr) => {
	return arr.map((img) => {
		return <>
			<div className={s.item}>
				<img src={img} alt="img" />
			</div>
		</>
	})
}

const ClientsPage = (props) => {
	return <>
		<section className={s.container}>
			<h2 className={s.tittle}>{props.tittleText}</h2>
			<div className={s.items}>

				{imgRender(props.clientsImages)}

			</div>
		</section>
	</>
}

export default ClientsPage;