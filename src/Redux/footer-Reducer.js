import { createSlice } from "@reduxjs/toolkit";
import linkedin from './../images/icons/footer/linkedin.svg'
import twitter from './../images/icons/footer/twitter.svg'
import facebook from './../images/icons/footer/facebook.svg'
import youtube from './../images/icons/footer/youtube.svg'
import instagram from './../images/icons/footer/instagram.svg'

const footerPageSlice = createSlice({
	name: 'aboutPageSliceName',
	initialState: {
		growfyColumn: {
			text: 'Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.'
		}
	},
	reducers: {}
})

export default footerPageSlice.reducer