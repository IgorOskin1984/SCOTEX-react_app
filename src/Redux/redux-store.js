import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header-Reducer";

export const store = configureStore({
	reducer: {
		header: headerReducer,
	}
})