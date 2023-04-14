import { connect } from "react-redux";
import Main from "./Main";

const mapStateToProps = (state) => {
	return {
		headerLinks: state.header.headerLinks
	}
}

export const MainContainer = connect(mapStateToProps, null)(Main)