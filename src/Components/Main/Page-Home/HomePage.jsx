import React, { useEffect, useRef } from "react";
import ServicesPageContainer from "../Page-Services/Container_ServicesPage";
import WhyUsContainer from "../Page-About/WhyUs-Page/Container_WhyUs";
import { AboutPage_1 } from "../Page-About/AboutPage";
import AdvantagesPageContainer from "../Page-Advantages/Container_AdvantagesPage";
import TestimonialsContainer from "../Page-Testimonials/Container_TestimonialsPage";
import BlogPageContaimer from "../Page-Blog/Container_BlogPage";
import ReadyToStartContainer from "../Page-Contact/Container_ContactPage";

const HomePage = ({ peoplsPhotos, buttonText, buttonColor, aboutPageContent }) => {
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
			<ServicesPageContainer />
			<WhyUsContainer />
			<AdvantagesPageContainer />
			<TestimonialsContainer />
			<BlogPageContaimer />
			<ReadyToStartContainer />
		</div>)
}

export default HomePage;