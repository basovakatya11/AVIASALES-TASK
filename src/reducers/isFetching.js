import { RECEIVE_TICKETS, REQUEST_TICKETS } from "../actions"

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return true
    case RECEIVE_TICKETS:
      return false
    default:
      return state
  }
}

export default isFetching