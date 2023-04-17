import { connect } from "react-redux";
import AboutPage from './AboutPage'

const mapStateToProps = (state) => {
	return {
		peoplsPhotos: state.aboutPage.peoplsPhotos
	}
}
const AboutPageContainer = connect(mapStateToProps, null)(AboutPage)

export default AboutPageContainer;