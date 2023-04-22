import { connect } from "react-redux";
import Footer from "./Footer";

const mapStateToProps = (state) => {
	return {
		logo: state.commonSate.logo,
		growfyText: state.footerPage.growfyColumn.text
	}
}

const FooterContainer = connect(mapStateToProps, null)(Footer);
export default FooterContainer;