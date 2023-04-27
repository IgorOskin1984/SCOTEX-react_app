import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
	return {
		logo: state.commonSate.logo,
		buttonText: state.commonSate.buttons.buttonTexts,
		buttonColor: state.commonSate.buttons.buttonColors
	}
}

export const HeaderContainer = connect(mapStateToProps, null)(Header)