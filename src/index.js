import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'
import App from './components/App'
import { catchError, fetchTickets } from './actions'
import AviasalesService from './services/AviasalesService'

const store = configureStore({
  reducer: rootReducer,
})

const aviasalesService = new AviasalesService()

aviasalesService
  .getSearchId()
  .then((id) => {
    store.dispatch(fetchTickets(id))
  })
  .catch((error) => store.dispatch(catchError(error.message)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

export default store
