import { createSlice } from "@reduxjs/toolkit";
import logoImg from './../images/logo.svg'
import c01 from './../images/icons/clients/01.svg.svg'
import c02 from './../images/icons/clients/02.svg.svg'
import c03 from './../images/icons/clients/03.svg.svg'
import c04 from './../images/icons/clients/04.svg.svg'
import c05 from './../images/icons/clients/05.svg.svg'

const commonSateSlice = createSlice({
	name: 'commonSateSliceName',
	initialState: {
		logo: logoImg,
		buttons: {
			buttonTexts: {
				getStarted: 'Get started',
				ourServices: 'Our services',
				contactUs: 'Contact us',
				allServices: 'All services',
				getInTouch: 'Get in touch',
				allPosts: 'All Posts',
				subscribe: 'Subscribe'
			},
			buttonColors: {
				blue: '#3D96F4',
				gray: 'rgba(129, 129, 139, 0.2)'
			}
		},
		clients: {
			images: [c01, c02, c03, c04, c05],
			tittleText: 'TRUSTED BY startups and large enterprises'
		},
		content: {
			aboutPageContent: {
				title: 'Marketing solutions that grow your business.',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'
			},
			servicesPageContent: {
				label: 'services',
				title: 'Services we offer',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'
			},
			whyUsPageContent: {
				label: 'why choose us',
				title: 'We help great brandsscale with content marketing.',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'
			},
			testimonialsPageContent: {
				label: 'Testimonials',
				title: 'See what our clients say',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'
			},
			blogPageContent: {
				label: 'Blog',
				title: 'Read our articles & news',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'
			}
		}
	}
})

export default commonSateSlice.reducer