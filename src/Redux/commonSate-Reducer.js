import { createSlice } from "@reduxjs/toolkit";

const commonSateSlice = createSlice({
	name: 'commonSateSliceName',
	initialState: {
		buttons: {
			buttonTexts: {
				getStarted: 'Get started',
				ourServices: 'Our services',
				contactUs: 'Contact us'
			},
			buttonColors: {
				blue: '#3D96F4',
				gray: 'rgba(129, 129, 139, 0.2)'
			}
		},
	}

})

export default commonSateSlice.reducer