import { combineReducers, configureStore } from "@reduxjs/toolkit";
import headerSliceReducer from "./header-toolkitSlice";
import aboutPageSliceReducer from "./aboutPage-Reducer";

//const rootReducer = combineReducers({
//	header: todosSliceReducer
//})

export const store = configureStore({
	reducer: {
		//header: todosSliceReducer.reducer
		header: headerSliceReducer,
		aboutPage: aboutPageSliceReducer
	}
})