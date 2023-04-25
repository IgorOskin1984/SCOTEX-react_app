import { connect } from "react-redux"
import { Burger } from "./Burger"
import { showMenuTitlesAC } from "../../../Redux/header-toolkitSlice"

const mapStateToProps = (state) => {
	return {
		isToggle: state.header.burgerMenuButtonToggle
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onBurgerClick: () => {
			dispatch(showMenuTitlesAC())
		}
	}
}

export const BurgerContainer = connect(mapStateToProps, mapDispatchToProps)(Burger)

