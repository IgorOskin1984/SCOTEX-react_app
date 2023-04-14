import React from "react";
import s from './AboutPage.module.css'
import { Button } from "../../small_Components/Button/Button";
import imagePeople from './../../../images/peopls-img/01.jpg'

const AboutPage = (props) => {
	return (
		<>
			<div className={s.aboutPage}>
				<div className={s.container}>
					<div className={s.content}>
						<h1 className={s.title}>Marketing solutions that grow your business.</h1>
						<div className={s.text}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								suspendisse varius enim in eros elementum tristique.
								Duis cursus, mi quis viverra ornare, eros dolor.
							</p>
						</div>
						<div className={s.actions}>
							<Button />
							<Button />
						</div>
					</div>

					<div className={s.images}>
						<div className={s.imageItem}>
							<img src={imagePeople} alt="" />
						</div>
						<div className={s.imageItem}>
							<img src={imagePeople} alt="" />
						</div>
						<div className={s.imageItem}>
							<img src={imagePeople} alt="" />
						</div>
						<div className={s.imageItem}>
							<img src={imagePeople} alt="" />
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default AboutPage;