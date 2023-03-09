import { createReducer } from '@reduxjs/toolkit'

import { startLoading, receiveTickets, catchError } from '../actions'

const isLoading = createReducer(false, (builder) => {
  builder
    .addCase(startLoading, () => true)
    .addCase(receiveTickets, () => false)
    .addCase(catchError, () => false)
})

export default isLoading
