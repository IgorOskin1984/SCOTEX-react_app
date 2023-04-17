import { connect } from "react-redux";
import HomePage from "./HomePage";

const mapStateToProps = (state) => {
	return {}
}

const HomePageContainer = connect(mapStateToProps, null)(HomePage)
export default HomePageContainer;