import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  tweetReducer,
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  tweetList: tweetReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
