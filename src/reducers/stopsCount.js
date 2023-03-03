import { allStops } from "../actions"

const stopsCount = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_STOPS_COUNT':
            if (state.includes(action.count)) {
                return state.filter((item) => item !== action.count)
            }
            if (action.count === 'all' || state[0] === 'all') {
                return [action.count]
            }
            let value = [...state, action.count]
            if (value.length === allStops.length && allStops.every((item) => value.includes(item))) {
                value = ['all']
            }
            return value

        default:
            return state
    }
}

export default stopsCount