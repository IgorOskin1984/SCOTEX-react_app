import { connect } from "react-redux";
import AboutPage from './AboutPage'

const mapStateToProps = (state) => {
	return {
		peoplsPhotos: state.aboutPage.peoplsPhotos,
		buttonText: state.commonSate.buttons.buttonTexts,
		buttonColor: state.commonSate.buttons.buttonColors
	}
}
const AboutPageContainer = connect(mapStateToProps, null)(AboutPage)

export default AboutPageContainer;