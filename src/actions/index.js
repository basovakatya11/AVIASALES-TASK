export const addTickets = tickets => ({
    type: 'ADD_TICKETS',
    tickets,
})

export const changeTabValue  = tab => ({
    type: 'CHANGE_TAB_VALUE',
    tab,
})

export const changeStopsCount = count => ({
    type: 'CHANGE_STOPS_COUNT',
    count,
})

export const tabValue = {
    SHOW_THE_CHEAPEST: 'SHOW_THE_CHEAPEST',
    SHOW_THE_FASTEST: 'SHOW_THE_FASTEST',
    OPTIMAL: 'OPTIMAL',
}

export const allStops = ['0','1', '2', '3']