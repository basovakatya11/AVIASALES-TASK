/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const tabValue = {
  SHOW_THE_CHEAPEST: 'SHOW_THE_CHEAPEST',
  SHOW_THE_FASTEST: 'SHOW_THE_FASTEST',
  OPTIMAL: 'OPTIMAL',
}

const allStops = ['0', '1', '2', '3']

export const getSearchId = createAsyncThunk('tickets/getSearchId', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!res.ok) {
      throw new Error(`${res.status}`)
    }
    return await res.json()
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getTickets = createAsyncThunk('tickets/getTickets', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${localStorage.getItem('searchId')}`
    )
    if (!res.ok) {
      throw new Error(`${res.status}`)
    }
    return await res.json()
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    tabsValue: 'SHOW_THE_CHEAPEST',
    shownTickets: [],
    stopsCount: [],
    isLoading: false,
    error: null,
    searchId: false,
    fetchStatus500: 0,
    stopFetch: false,
    numShownTickets: 5,
  },
  reducers: {
    changeTabValue(state, action) {
      state.numShownTickets = 0
      state.tabsValue = action.payload
    },
    changeStopsCount(state, action) {
      state.numShownTickets = 0
      if (state.stopsCount.includes(action.payload)) {
        state.stopsCount = state.stopsCount.filter((item) => item !== action.payload)
        return
      }
      if (action.payload === 'all' || state.stopsCount[0] === 'all') {
        state.stopsCount = [action.payload]
        return
      }
      let value = [...state.stopsCount, action.payload]
      if (value.length === allStops.length && allStops.every((item) => value.includes(item))) {
        value = ['all']
      }
      state.stopsCount = value
    },
    addTicketsInList(state) {
      state.numShownTickets += 5
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
      state.shownTickets = newTickets.slice(0, state.numShownTickets)
    },
  },
  extraReducers: {
    [getSearchId.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [getTickets.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },

    [getSearchId.fulfilled]: (state, action) => {
      localStorage.setItem('searchId', action.payload.searchId)
      state.searchId = true
    },
    [getTickets.fulfilled]: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload.tickets]
      state.stopFetch = action.payload.stop
      state.isLoading = !action.payload.stop
    },

    [getSearchId.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },

    [getTickets.rejected]: (state, action) => {
      if (action.payload === '500') {
        state.fetchStatus500 += 1
      } else {
        state.isLoading = action.payload
        state.error = true
      }
    },
  },
})

const { changeTabValue, changeStopsCount } = ticketsSlice.actions
export const { addTicketsInList } = ticketsSlice.actions
export default ticketsSlice.reducer

export const changeTabs = (tab) => (dispatch) => {
  dispatch(changeTabValue(tab))
  dispatch(addTicketsInList())
}

export const changeFilters = (count) => (dispatch) => {
  dispatch(changeStopsCount(count))
  dispatch(addTicketsInList())
}
