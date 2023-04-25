import { connect } from "react-redux";
import Footer from "./Footer";
import { addEmailAC } from "../../Redux/subscribe-Reducer";

const mapStateToProps = (state) => {
	console.log(state.subscribeEmail);
	return {
		logo: state.commonSate.logo,
		growfyText: state.footerPage.growfyColumn.text,
		growfySocialIcons: state.footerPage.growfyColumn.socialIcons,
		pagesColumnTitle: state.footerPage.pagesColumn.title,
		pagesColumnLinks: state.footerPage.pagesColumn.links,

		utilityColumnTitle: state.footerPage.utilityColumn.title,
		utilityColumnLinks: state.footerPage.utilityColumn.links,

		buttonText: state.commonSate.buttons.buttonTexts.subscribe

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClickAddEmailToState: (email) => {
			dispatch(addEmailAC(email))
		}
	}
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterContainer;