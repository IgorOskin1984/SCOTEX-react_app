import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice = createSlice({
	name: 'headerSliceName',
	initialState: {
		emails: [
			'example'
		]
	},
	reducers: {
		addEmailAC(state, action) {
			state.emails.push(action.payload.email);
		}
	}
});

export const { addEmailAC } = subscribeSlice.actions;
export default subscribeSlice.reducer;
