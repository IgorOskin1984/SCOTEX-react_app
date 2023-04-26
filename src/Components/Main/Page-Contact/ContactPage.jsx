import React from "react";
import s from './ContactPage.module.css'
import { Button } from "../../small_Components/Button/Button";

const ContactPage = (props) => {
	return (
		<>
			<section className={s.readyToStart}>
				<div className={s.container}>
					<div className={s.colums}>
						<div className={s.content}>
							<h2 className={s.title}>Ready to start scaling your business now?</h2>
							<div className={s.text}>
								<p>Lorem ipsum dolor sit am consectetur adipiscing varius enim in eros.</p>
							</div>
						</div>
					</div>
					<div className={s.colums}>
						<div className={s.buttons}>
							<Button buttonText={props.buttonText1} />
							<Button buttonText={props.buttonText2} buttonColor={props.buttonColor} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default ContactPage;