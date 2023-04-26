import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
	name: 'headerSliceName',
	initialState: {
		headerLinks: ['home', 'about', 'services', 'testimonials', 'contact'
			//  'pages',  'сart', 'getStarted'
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
export const { showMenuTitlesAC, showPagesListAC } = headerSlice.actions
export default headerSlice.reducer;
