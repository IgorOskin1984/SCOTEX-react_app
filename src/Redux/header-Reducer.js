const SHOW_MENU_TITLES = 'exclusive-name/header-ruducer/SHOW_MENU_TITLES'

const initialState = {
	menuTitles: ['Home', 'About', 'Pages', 'Services'],
	burgerMenuButtonToggle: false
}

const oldHeaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MENU_TITLES:
			return {
				...state,
				burgerMenuButtonToggle: action.buttonState
			}
		default:
			return state
	}
}

const showMenuTitlesAC = (buttonState) => {
	return {
		type: SHOW_MENU_TITLES,
		burgerMenuButtonToggle: buttonState
	}
}

//export default oldHeaderReducer