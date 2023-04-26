import React, { useEffect, useRef } from "react";
import s from './ServicesPage.module.css'
import { Button } from "../../small_Components/Button/Button";
import ContentComponent from "../../small_Components/Content-Component/ContentComponent";

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
	const ref = useRef(null);

	useEffect(() => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return <>
		<section ref={ref} className={s.services}>
			<div className={s.container}>
				<div className={s.content}>
					<ContentComponent payload={props.servicesPageContent} />
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