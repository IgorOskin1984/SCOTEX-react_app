import { connect } from "react-redux";
import ReadyToStart from "./ReadyToStart";

const mapStateToProps = (state) => {
	return {
		buttonText1: state.commonSate.buttons.buttonTexts.ourServices,
		buttonText2: state.commonSate.buttons.buttonTexts.contactUs,
		buttonColor: state.commonSate.buttons.buttonColors.gray
	}
}

const ReadyToStartContainer = connect(mapStateToProps, null)(ReadyToStart)

export default ReadyToStartContainer;