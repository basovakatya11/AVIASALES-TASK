import { createReducer } from '@reduxjs/toolkit'

import { receiveTickets } from '../actions'

const tickets = createReducer([], (builder) => {
  builder.addCase(receiveTickets, (state, action) => [...action.payload])
})

export default tickets
