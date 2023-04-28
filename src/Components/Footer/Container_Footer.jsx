import { connect } from "react-redux";
import Footer from "./Footer";
//import { addEmailAC } from "../../Redux/subscribe-Reducer";

const mapStateToProps = (state) => {
	return {
		logo: state.commonSate.logo,
		growfyText: state.footerPage.growfyColumn.text,
		growfySocialIcons: state.footerPage.growfyColumn.socialIcons,
		pagesColumnTitle: state.commonSate.pages.title,
		pagesColumnLinks: state.commonSate.pages.links,

		utilityColumnTitle: state.footerPage.utilityColumn.title,
		utilityColumnLinks: state.footerPage.utilityColumn.links,

		buttonText: state.commonSate.buttons.buttonTexts.subscribe

	}
}

//const mapDispatchToProps = (dispatch) => {
//	return {
//		onClickAddEmailToState: (email) => {
//			dispatch(addEmailAC(email))
//		}
//	}
//}

const FooterContainer = connect(mapStateToProps, null)(Footer);
export default FooterContainer;