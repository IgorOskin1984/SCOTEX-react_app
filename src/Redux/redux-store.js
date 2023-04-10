import { combineReducers } from 'redux'
import createStore from './redux-store'
import headerReducer from './header-Reducer'

const reducers = combineReducers({
	header: headerReducer
})
const store = createStore(reducers)
export default store