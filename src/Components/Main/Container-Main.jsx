import { connect } from "react-redux";
import Main from "./Main";

const mapStateToProps = (state) => {
	return {
		headerLinks: state.header.headersLinks
	}
}

export const MainContainer = connect(mapStateToProps, null)(Main)