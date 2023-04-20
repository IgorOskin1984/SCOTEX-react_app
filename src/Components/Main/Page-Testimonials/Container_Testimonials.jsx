import { connect } from "react-redux";
import Testimonials from "./Testimonials";

const mapStateToProps = (state) => {
	return {
		testimonialsPageContent: state.commonSate.content.testimonialsPageContent,
		buttonText: state.commonSate.buttons.buttonTexts.getInTouch
	}
}

const TestimonialsContainer = connect(mapStateToProps, null)(Testimonials)

export default TestimonialsContainer;