import { createSlice } from "@reduxjs/toolkit";
import img_01 from './../images/peopls-img/Blog_page/01.jpg'
import img_02 from './../images/peopls-img/Blog_page/02.jpg'
import img_03 from './../images/peopls-img/Blog_page/03.jpg'

const BlogPageSliceReducer = createSlice({
	name: 'BlogPageSliceReducerName',
	initialState: {
		carts: [
			{
				image: img_01,
				label: 'Social Media',
				date: 'August 28, 2022',
				title: 'How to Use Social Proof in Marketing',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem.',
				navLink: '/blog',
				navLinkText: 'Read now'
			},
			{
				image: img_02,
				label: 'SEO',
				date: 'August 28, 2022',
				title: 'Make a great first impression with these titles',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem.',
				navLink: '/blog',
				navLinkText: 'Read now'
			},
			{
				image: img_03,
				label: 'Strategy',
				date: 'August 28, 2022',
				title: 'How to Grab Your Reader’s Attention',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem.',
				navLink: '/blog',
				navLinkText: 'Read now'
			}
		]

	}
})

export default BlogPageSliceReducer.reducer