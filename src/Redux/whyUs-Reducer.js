import { createSlice } from "@reduxjs/toolkit";
import img_01 from './../images/peopls-img/whyUs_page/01.jpg'
import img_02 from './../images/peopls-img/whyUs_page/02.jpg'

const whyUsSlice = createSlice({
	name: 'whyUsSliceName',
	initialState: {
		images: {
			large: img_01,
			small: img_02
		},
		listItems: [
			'This is some text inside of a div.',
			'This is some text inside of a div.',
			'This is some text inside of a div.',
			'This is some text inside of a div.'
		]
	}
})

export default whyUsSlice.reducer