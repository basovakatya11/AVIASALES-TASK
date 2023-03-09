import { createAction } from '@reduxjs/toolkit'

import AviasalesService from '../services/AviasalesService'
import store from '../index'

export const addTickets = createAction('ADD_TICKETS')

export const changeTabValue = createAction('CHANGE_TAB_VALUE')

export const changeStopsCount = createAction('CHANGE_STOPS_COUNT')

export const catchError = createAction('CATCH_ERROR')

export const tabValue = {
  SHOW_THE_CHEAPEST: 'SHOW_THE_CHEAPEST',
  SHOW_THE_FASTEST: 'SHOW_THE_FASTEST',
  OPTIMAL: 'OPTIMAL',
}

export const allStops = ['0', '1', '2', '3']

export const startLoading = createAction('START_LOADING')

export const receiveTickets = createAction('RECEIVE_TICKETS')

const aviasalesService = new AviasalesService()

const getNewFiveTickets = () => {
  const state = store.getState()
  const newTickets = [...state.tickets].filter((ticket) => {
    if (state.stopsCount.includes('all')) return true
    return state.stopsCount.includes(String(ticket.segments[0].stops.length))
  })

  if (state.tabsValue === tabValue.SHOW_THE_CHEAPEST) {
    newTickets.sort((a, b) => a.price - b.price)
  }
  if (state.tabsValue === tabValue.SHOW_THE_FASTEST) {
    newTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
  }
  return newTickets.slice(state.shownTickets.length, state.shownTickets.length + 5)
}

export const addTicketsInList = () => (dispatch) => {
  const newFiveTickets = getNewFiveTickets()
  dispatch(addTickets(newFiveTickets))
}

export const fetchTickets = (id) => async (dispatch) => {
  try {
    dispatch(startLoading())
    const tickets = await aviasalesService.getTickets(id)
    dispatch(receiveTickets(tickets))
    dispatch(addTicketsInList())
  } catch (error) {
    store.dispatch(catchError(error.message))
  }
}

export const changeTabs = (tab) => (dispatch) => {
  dispatch(changeTabValue(tab))
  dispatch(addTicketsInList())
}

export const changeFilters = (count) => (dispatch) => {
  dispatch(changeStopsCount(count))
  dispatch(addTicketsInList())
}
