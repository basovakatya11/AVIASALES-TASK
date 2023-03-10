import { createReducer } from '@reduxjs/toolkit'

import { catchError, receiveTickets } from '../actions'

const error = createReducer(null, (build) => {
  build.addCase(catchError, (state, action) => action.payload).addCase(receiveTickets, () => null)
})

export default error
