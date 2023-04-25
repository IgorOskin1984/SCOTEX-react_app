import Menu from "./Menu";
import { showMenuTitlesAC } from "../../../Redux/old-header-Reducer";
import { connect } from "react-redux";

//class MenuContainer extends React.Component {

//	render() {
//		return (
//			<>
//				<Menu titles={state.menuTitles} />
//			</>
//		)
//	}
//}
//debugger

const mapStateToProps = (state) => {
	return {
		menuTitles: state.header.menuTitles,
		isToggle: state.header.burgerMenuButtonToggle
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onClickAddPost: (buttonState) => {
			dispatch(showMenuTitlesAC(buttonState))
		}
	}
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer