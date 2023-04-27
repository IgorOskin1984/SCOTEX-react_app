import { connect } from "react-redux";
import AdvantagesPage from "./AdvantagesPage";

const mapStateToProps = (state) => {
	return {
		advantagesPageContent: state.advantagesPage.advantagesPageCarts,
		advantagesPageImage: state.advantagesPage.image
	}
}

const AdvantagesPageContainer = connect(mapStateToProps, null)(AdvantagesPage)

export default AdvantagesPageContainer;