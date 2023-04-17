import React from "react";
import s from './AboutPage.module.css'
import { Button } from "../../small_Components/Button/Button";

const AboutPage = (props) => {
	console.log(props);
	return <>
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
						<Button buttonText={props.buttonText.ourServices} />
						<Button buttonText={props.buttonText.contactUs}
							buttonColor={props.buttonColor.gray}
						/>
					</div>
				</div>

				<div className={s.images}>
					<div className={s.imageColumn}>
						<div className={`${s.imageItem} ${s.item_1}`}>
							<img src={props.peoplsPhotos[0]} alt="" />
						</div>
						<div className={`${s.imageItem} ${s.item_2}`}>
							<img src={props.peoplsPhotos[1]} alt="" />
						</div>
					</div>

					<div className={s.imageColumn}>
						<div className={`${s.imageItem} ${s.item_3}`}>
							<img src={props.peoplsPhotos[2]} alt="" />
						</div>
						<div className={`${s.imageItem} ${s.item_4}`}>
							<img src={props.peoplsPhotos[3]} alt="" />
						</div>
					</div>
				</div>

			</div>
		</div>
	</>
}

export default AboutPage;