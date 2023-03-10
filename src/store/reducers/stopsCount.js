import { createReducer } from '@reduxjs/toolkit'

import { allStops, changeStopsCount } from '../actions'

const stopsCount = createReducer([], (builder) => {
  builder.addCase(changeStopsCount, (state, action) => {
    if (state.includes(action.payload)) {
      return state.filter((item) => item !== action.payload)
    }
    if (action.payload === 'all' || state[0] === 'all') {
      return [action.payload]
    }
    let value = [...state, action.payload]
    if (value.length === allStops.length && allStops.every((item) => value.includes(item))) {
      value = ['all']
    }
    return value
  })
})

export default stopsCount
