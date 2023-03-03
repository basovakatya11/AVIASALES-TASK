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


export const REQUEST_TICKETS = 'REQUEST_TICKETS'
const requestTickets = () => ({
    type: REQUEST_TICKETS
})

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS'
const receiveTickets = (json) => ({
    type: RECEIVE_TICKETS,
    tickets: json
})

export const fetchTicketsAndID = () => (dispatch) => {
    dispatch(requestTickets())
    return fetch('https://aviasales-test-api.kata.academy/search')
    .then(
        response => response.json(),
        error => console.log('An error occurred: ', error)
    )
    .then(json => {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${json.searchId}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred: ', error)
            )
            .then(json => {
                dispatch(receiveTickets(json.tickets))
            })
    })
}