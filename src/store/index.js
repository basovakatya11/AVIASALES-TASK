import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './ticketsSlicer'

export default configureStore({
  reducer: rootReducer,
})
