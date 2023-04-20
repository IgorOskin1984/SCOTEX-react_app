import React from "react";
import ServicesPageContainer from "../Page-Services/Container_ServicesPage";
import WhyUsContainer from "../Page-About/WhyUs-Page/Container_WhyUs";
import { AboutPage_1 } from "../Page-About/AboutPage";
import AdvantagesPageContainer from "../Page-Advantages/Container_AdvantagesPage";
import TestimonialsContainer from "../Page-Testimonials/Container_Testimonials";

const HomePage = ({ peoplsPhotos, buttonText, buttonColor, aboutPageContent }) => {
	return <>
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
	</>
}

export default HomePage;