import { createSlice } from "@reduxjs/toolkit";
import img_advPage from './../images/peopls-img/AdvantagesPage/01.jpg'

const AdvantagesPageSlice = createSlice({
	name: 'AdvantagesPageSliceName',
	initialState: {
		advantagesPageCarts: [
			{
				value: '1.2M+',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'
			},
			{
				value: '3.4B',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'
			},
			{
				value: '98%',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'
			},
			{
				value: '10+',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'
			}
		],
		image: img_advPage
	}
})
export default AdvantagesPageSlice.reducer