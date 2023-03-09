import { createReducer } from '@reduxjs/toolkit'

import { addTickets, changeStopsCount, changeTabValue } from '../actions'

const shownTickets = createReducer([], (builder) => {
  builder
    .addCase(addTickets, (state, action) => [...state, ...action.payload])
    .addCase(changeTabValue, () => [])
    .addCase(changeStopsCount, () => [])
})

export default shownTickets
