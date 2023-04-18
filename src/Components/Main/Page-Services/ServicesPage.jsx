import React from "react";
import contStyle from './../../../css/content.module.css'
import s from './ServicesPage.module.css'
import { Button } from "../../small_Components/Button/Button";

const ServicesItem = ({ paylod }) => {
	return <>
		<article className={s.item}>
			<div className={s.itemIcon}>
				<img src={paylod.icon} alt="img" />
			</div>
			<h4 className={s.itemTittle}>{paylod.tittle}</h4>
			<div className={s.itemText}>
				<p>{paylod.text}</p>
			</div>
		</article>
	</>
}

const ServicesPage = (props) => {
	return <>
		<section className={s.services}>
			<div className={s.container}>
				<div className={s.content}>
					<a href="#" className={s.label} >Services</a>
					<h1 className={s.title}>Services we offer</h1>
					<div className={s.text}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
					</div>
					<div className={s.actions}>
						<Button buttonText={props.buttonText} />
					</div>
				</div>

				<div className={s.items}>
					<div className={s.itemColum}>
						<ServicesItem paylod={props.socialMediaMarketing} />
						<ServicesItem paylod={props.emailMarketing} />
					</div>
					<div className={s.itemColum}>
						<ServicesItem paylod={props.paidAdvertising} />
						<ServicesItem paylod={props.seoOptimization} />
					</div>
				</div>
			</div>
		</section>

	</>
}

export default ServicesPage;