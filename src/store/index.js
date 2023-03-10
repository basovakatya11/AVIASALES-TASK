import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './ticketsSlice'

export default configureStore({
  reducer: rootReducer,
})
