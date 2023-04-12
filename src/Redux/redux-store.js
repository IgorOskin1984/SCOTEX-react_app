import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosSliceReducer from "./header-toolkitSlice";

//const rootReducer = combineReducers({
//	header: todosSliceReducer
//})

export const store = configureStore({
	reducer: {
		header: todosSliceReducer
		//header: todosSliceReducer.reducer
	}
})