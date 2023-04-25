import { connect } from "react-redux";
import Footer from "./Footer";

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

const FooterContainer = connect(mapStateToProps, null)(Footer);
export default FooterContainer;