import React, { useEffect, useRef } from "react";
import s from './AboutPage.module.css'
import contStyle from './../../../css/content.module.css'
import { Button } from "../../small_Components/Button/Button";
import ClientsPageContainer from "../Page-Clients/Container_ClientsPage";
import ContentComponent from "../../small_Components/Content-Component/ContentComponent";
import WhyUsContainer from "./WhyUs-Page/Container_WhyUs";

const AboutPage = ({ peoplsPhotos, buttonText, buttonColor, aboutPageContent }) => {
	const ref = useRef(null);

	useEffect(() => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}, []);
	return (
		<div ref={ref}>
			<AboutPage_1
				peoplsPhotos={peoplsPhotos}
				buttonText={buttonText}
				buttonColor={buttonColor}
				aboutPageContent={aboutPageContent}
			/>
			<WhyUsContainer />

		</div>
	)
}

export const AboutPage_1 = (props) => {
	const ref = useRef(null);

	useEffect(() => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return <>
		<section ref={ref} className={s.aboutPage}>
			<div className={s.container}>
				<div className={contStyle.content}>
					<ContentComponent payload={props.aboutPageContent} />
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