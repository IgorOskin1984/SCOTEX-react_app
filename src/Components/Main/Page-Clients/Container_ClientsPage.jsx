import { connect } from "react-redux";
import ClientsPage from "./ClientsPage";

const mapStateToProps = (state) => {
	console.log(state.commonSate.clients);
	return {
		clientsImages: state.commonSate.clients.images,
		tittleText: state.commonSate.clients.tittleText
	}
}

const ClientsPageContainer = connect(mapStateToProps, null)(ClientsPage);

export default ClientsPageContainer;