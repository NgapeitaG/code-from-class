import {combineReducers} from 'redux'

import wombats from './wombats'
import count from './count'

export default combineReducers({
  wombats,
  count
})
