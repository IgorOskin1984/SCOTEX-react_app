import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
	name: 'headerSliceName',
	initialState: {
		headerLinks: ['home', 'about',
			//  'pages', 'services', 'сart', 'getStarted'
		],
		menuTitles: ['home', 'about', 'pages', 'services'],
		burgerMenuButtonToggle: false
	},
	reducers: {
		showMenuTitlesAC(state, action) {
			state.burgerMenuButtonToggle = !state.burgerMenuButtonToggle
		}
	}
})

//export default headerSlice;
export default headerSlice.reducer;
export const { showMenuTitlesAC } = headerSlice.actions
