import { createSlice } from "@reduxjs/toolkit";
import img_01 from './../images/icons/services/01.svg'
import img_02 from './../images/icons/services/02.svg'
import img_03 from './../images/icons/services/03.svg'
import img_04 from './../images/icons/services/04.svg'

const servicesSlice = createSlice({
	name: 'servicesSliceName',
	initialState: {
		socialMediaMarketing: {
			icon: img_01,
			tittle: 'Social Media Marketing',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'
		},
		emailMarketing: {
			icon: img_02,
			tittle: 'Email Marketing',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'
		},
		paidAdvertising: {
			icon: img_03,
			tittle: 'Paid Advertising',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'
		},
		seoOptimization: {
			icon: img_04,
			tittle: 'SEO Optimization',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'
		}
	}
})
export default servicesSlice.reducer;