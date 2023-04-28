import { Menu } from "./Menu";
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
		isToggle: state.header.burgerMenuButtonToggle,
		links: state.commonSate.pages.links,
	}
}

const MenuContainer = connect(mapStateToProps, null)(Menu)

export default MenuContainer