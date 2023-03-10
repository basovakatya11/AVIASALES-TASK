import { combineReducers } from 'redux'

import tickets from './tickets'
import tabsValue from './tabsValue'
import stopsCount from './stopsCount'
import isLoading from './isLoading'
import shownTickets from './shownTickets'
import error from './error'

export default combineReducers({
  tickets,
  shownTickets,
  tabsValue,
  stopsCount,
  isLoading,
  error,
})
