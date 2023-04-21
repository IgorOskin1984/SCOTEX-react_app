import React from "react";
import ServicesPageContainer from "../Page-Services/Container_ServicesPage";
import WhyUsContainer from "../Page-About/WhyUs-Page/Container_WhyUs";
import { AboutPage_1 } from "../Page-About/AboutPage";
import AdvantagesPageContainer from "../Page-Advantages/Container_AdvantagesPage";
import TestimonialsContainer from "../Page-Testimonials/Container_Testimonials";
import BlogPageContaimer from "../Page-Blog/Container_BlogPage";
import ReadyToStartContainer from "../Page-ReadyToStart/Container_ReadyToStart";

const HomePage = ({ peoplsPhotos, buttonText, buttonColor, aboutPageContent }) => {
	return <>
		<ReadyToStartContainer />
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
	</>
}

export default HomePage;