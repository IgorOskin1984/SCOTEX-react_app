import { connect } from "react-redux";
import WhyUs from "./WhyUs";

const mapStateToProps = (state) => {
	return {
		whyUsPageContent: state.commonSate.content.whyUsPageContent,
		listItems: state.whyUsPage.listItems,
		largeImage: state.whyUsPage.images.large,
		smallImage: state.whyUsPage.images.small
	}
}

const WhyUsContainer = connect(mapStateToProps, null)(WhyUs);
export default WhyUsContainer;