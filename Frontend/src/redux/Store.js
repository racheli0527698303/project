import { createStore, combineReducers } from 'redux'

import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({ loginReducer })
const store = createStore(reducer)
window.store = store
export default store