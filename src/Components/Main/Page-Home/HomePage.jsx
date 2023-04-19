import React from "react";
import ServicesPageContainer from "../Page-Services/Container_ServicesPage";
import WhyUsContainer from "../Page-About/WhyUs-Page/Container_WhyUs";
import { AboutPage_1 } from "../Page-About/AboutPage";

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
	</>
}

export default HomePage;