import { connect } from "react-redux";
import Footer from "./Footer";

const mapStateToProps = (state) => {
	return {
		logo: state.commonSate.logo,
		growfyText: state.footerPage.growfyColumn.text,
		growfySocialIcons: state.footerPage.growfyColumn.socialIcons,
		pagesColumnTitle: state.footerPage.pagesColumn.title,
		pagesColumnLinks: state.footerPage.pagesColumn.links
	}
}

const FooterContainer = connect(mapStateToProps, null)(Footer);
export default FooterContainer;