import { connect } from "react-redux";
import AboutPage from './AboutUsPage'

const mapStateToProps = (state) => {
	//debugger
	return {
		peoplsPhotos: state.aboutPage.peoplsPhotos,
		buttonText: state.commonSate.buttons.buttonTexts,
		buttonColor: state.commonSate.buttons.buttonColors,
		aboutPageContent: state.commonSate.content.aboutPageContent

	}
}
const AboutPageContainer = connect(mapStateToProps, null)(AboutPage)

export default AboutPageContainer;