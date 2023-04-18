import { connect } from "react-redux";
import ServicesPage from "./ServicesPage";

const mapStateToProps = (state) => {
	return {
		buttonText: state.commonSate.buttons.buttonTexts.allServices,

		socialMediaMarketing: state.servicesPage.socialMediaMarketing,
		emailMarketing: state.servicesPage.emailMarketing,
		paidAdvertising: state.servicesPage.paidAdvertising,
		seoOptimization: state.servicesPage.seoOptimization,
		servicesPageContent: state.commonSate.content.servicesPageContent
	}
}

const ServicesPageContainer = connect(mapStateToProps, null)(ServicesPage)
export default ServicesPageContainer;