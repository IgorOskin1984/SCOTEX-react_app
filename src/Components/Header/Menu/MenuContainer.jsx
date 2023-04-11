import React from "react";
import { Menu } from "./Menu";
import state from './../../../Redux/state.js'

class MenuContainer extends React.Component {

	render() {
		return (
			<>
				<Menu titles={state.menuTitles} />
			</>
		)
	}
}
export default MenuContainer