import { connect } from "react-redux";
import ServicesPage from "./ServicesPage";

const mapStateToProps = (state) => {
	return {
		buttonText: state.commonSate.buttons.buttonTexts.allServices
	}
}

const ServicesPageContainer = connect(mapStateToProps, null)(ServicesPage)
export default ServicesPageContainer;