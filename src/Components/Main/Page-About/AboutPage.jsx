import React from "react";
import s from './AboutPage.module.css'
import { Button } from "../../small_Components/Button/Button";
import ImageItem from "../../small_Components/Image-Item/ImageItem";

const AboutPage = (props) => {
	console.log(props.peoplsPhotos);
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
						<div className={s.imageColumn}>
							<ImageItem peoplsPhoto={props.peoplsPhotos[0]} />
							<ImageItem peoplsPhoto={props.peoplsPhotos[1]} />
						</div>

						<div className={s.imageColumn}>
							<ImageItem peoplsPhoto={props.peoplsPhotos[2]} />
							<ImageItem peoplsPhoto={props.peoplsPhotos[3]} />
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default AboutPage;