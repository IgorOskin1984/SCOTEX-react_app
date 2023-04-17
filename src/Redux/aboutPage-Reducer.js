import { createSlice } from "@reduxjs/toolkit";
import img1 from './../images/peopls-img/01.jpg'
import img2 from './../images/peopls-img/02.jpg'
import img3 from './../images/peopls-img/03.jpg'
import img4 from './../images/peopls-img/04.jpg'
const aboutPageSlice = createSlice({
	name: 'aboutPageSliceName',
	initialState: {
		peoplsPhotos: [img1, img2, img3, img4]
	},
	reducers: {}
})

export default aboutPageSlice.reducer