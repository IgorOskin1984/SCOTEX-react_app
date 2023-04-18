import React from "react";
import contStyle from './../../../css/content.module.css'
import s from './ServicesPage.module.css'
import { Button } from "../../small_Components/Button/Button";

const ServicesPage = (props) => {
	return <>
		<section className={s.services}>
			<div className={s.container}>
				<div className={contStyle.content}>
					<h2 className={s.title}>Services we offer</h2>
					<div className={contStyle.text}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
					</div>
					<div className={s.actions}>
						<Button buttonText={props.buttonText} />
					</div>
				</div>

				<div className={s.items}>
					<div className={s.itemColum}>
						<article className={s.item}>
							<div className={s.itemIcon}>
								<img src='' alt="img" />
							</div>
							<h4 className={s.itemTittle}>Social Media Marketing</h4>
							<div className={s.itemText}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim nesciunt fugiat culpa quas aliquam incidunt? Sapiente voluptatum impedit ipsa quod, qui sequi similique nesciunt culpa dicta fuga voluptas doloribus?</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>

	</>
}

export default ServicesPage;