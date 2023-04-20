import { connect } from "react-redux";
import Testimonials from "./Testimonials";
import star from './../../../images/icons/Testimonials/Star.svg'

const mapStateToProps = (state) => {
	return {
		testimonialsPageContent: state.commonSate.content.testimonialsPageContent,
		buttonText: state.commonSate.buttons.buttonTexts.getInTouch,
		usersCartData: state.testimonialsPage.users,
		star: star
	}
}

const TestimonialsContainer = connect(mapStateToProps, null)(Testimonials)

export default TestimonialsContainer;