import { createReducer } from '@reduxjs/toolkit'

import { changeTabValue } from '../actions'

const tabsValue = createReducer('SHOW_THE_CHEAPEST', (builder) => {
  builder.addCase(changeTabValue, (state, action) => action.payload)
})

export default tabsValue
