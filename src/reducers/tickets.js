import { RECEIVE_TICKETS } from "../actions"

const tickets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TICKETS':
            return [
                ...state,
                ...action.tickets
            ]
        case RECEIVE_TICKETS:
            return action.tickets
        default:
            return state
    }
}

export default tickets