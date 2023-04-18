import React from "react";
import AboutPageContainer from "../Page-About/Container_AboutPage";
import ServicesPageContainer from "../Page-Services/Container_ServicesPage";
import WhyUsContainer from "../Page-About/WhyUs-Page/Container_WhyUs";

const HomePage = (props) => {
	return <>
		<AboutPageContainer />
		<ServicesPageContainer />
		<WhyUsContainer />
	</>
}

export default HomePage;