import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
	name: 'headerSliceName',
	initialState: {
		menuTitles: ['Home', 'About', 'Pages', 'Services'],
		burgerMenuButtonToggle: false
	},
	reducers: {
		showMenuTitlesAC(state, action) {
			state.burgerMenuButtonToggle = !state.burgerMenuButtonToggle
		}
	}
})

//export default todosSlice;
export default todosSlice.reducer;
export const { showMenuTitlesAC } = todosSlice.actions
