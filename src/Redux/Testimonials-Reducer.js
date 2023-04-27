import { createSlice } from "@reduxjs/toolkit";
import userImg_01 from './../images/peopls-img/Testimonials/01.jpg'
import userImg_02 from './../images/peopls-img/Testimonials/02.jpg'
import userImg_03 from './../images/peopls-img/Testimonials/03.jpg'

const Testimonials = createSlice({
	name: 'TestimonialsName',
	initialState: {
		users: [
			{
				avatar: userImg_01,
				userName: 'John Doe',
				userCompany: 'Company Name',
				title: '"I recommend this agency"',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.',
				reiting: 5
			},
			{
				avatar: userImg_02,
				userName: 'Alice Smith',
				userCompany: 'Company Name',
				title: '"The support is awesome"',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.',
				reiting: 5
			},
			{
				avatar: userImg_03,
				userName: 'Sophia Miller',
				userCompany: 'Company Name',
				title: '“A game changer for us”',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.',
				reiting: 5
			}
		]

	}
})

export default Testimonials.reducer