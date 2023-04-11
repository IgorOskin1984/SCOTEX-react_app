import React from "react";
import { Menu } from "./Menu";

const menuTitles = ['Home', 'About', 'Pages', 'Services'];

class MenuContainer extends React.Component {
	render() {
		return (
			<>
				<Menu titles={menuTitles} />
			</>
		)
	}
}
export default MenuContainer