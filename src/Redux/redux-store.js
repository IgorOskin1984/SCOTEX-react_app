import { combineReducers, configureStore } from "@reduxjs/toolkit";
import headerSliceReducer from "./header-toolkitSlice";
import aboutPageSliceReducer from "./aboutPage-Reducer";
import commonSateSlice from "./commonSate-Reducer";
import servicesPageSliceReducer from "./servicesPage-Reducer";
import whyUsPageSliceReducer from "./whyUs-Reducer";
import AdvantagesPageSliceReducer from './advantagesPage-Reducer';
import testimonialsPageSliceReducer from './Testimonials-Reducer';

//const rootReducer = combineReducers({
//	header: todosSliceReducer
//})

export const store = configureStore({
	reducer: {
		//header: todosSliceReducer.reducer
		header: headerSliceReducer,
		aboutPage: aboutPageSliceReducer,
		commonSate: commonSateSlice,
		servicesPage: servicesPageSliceReducer,
		whyUsPage: whyUsPageSliceReducer,
		advantagesPage: AdvantagesPageSliceReducer,
		testimonialsPage: testimonialsPageSliceReducer
	}
})