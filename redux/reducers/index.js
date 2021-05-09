// src/reducers/index.js

import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import TripReducer from './TripReducer'


const rootReducer = combineReducers({
  user: UserReducer,
  trip: TripReducer,
})

export default rootReducer