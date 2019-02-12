import {combineReducers} from 'redux'

import isLoading from './isLoading'
import wombats from './wombats'
import count from './count'

export default combineReducers({
  isLoading,
  wombats,
  count
})
