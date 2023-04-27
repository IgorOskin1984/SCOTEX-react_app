import { connect } from "react-redux";
import HomePage from "./HomePage";

const mapStateToProps = (state) => {
	return {
		peoplsPhotos: state.aboutPage.peoplsPhotos,
		buttonText: state.commonSate.buttons.buttonTexts,
		buttonColor: state.commonSate.buttons.buttonColors,
		aboutPageContent: state.commonSate.content.aboutPageContent
	}
}

const HomePageContainer = connect(mapStateToProps, null)(HomePage)
export default HomePageContainer;