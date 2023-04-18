import React from "react";
import s from './AboutPage.module.css'
import contStyle from './../../../css/content.module.css'
import { Button } from "../../small_Components/Button/Button";
import ClientsPageContainer from "../Page-Clients/Container_ClientsPage";


const AboutPage = (props) => {
	return <>
		<section className={s.aboutPage}>
			<div className={s.container}>
				<div className={contStyle.content}>
					<h1 className={contStyle.title}>Marketing solutions that grow your business.</h1>
					<div className={contStyle.text}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							suspendisse varius enim in eros elementum tristique.
							Duis cursus, mi quis viverra ornare, eros dolor.
						</p>
					</div>
					<div className={contStyle.actions}>
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
		</section>

		<ClientsPageContainer />
	</>
}

export default AboutPage;