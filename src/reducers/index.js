import { combineReducers } from "redux"
import tickets from "./tickets"
import tabsValue from "./tabsValue"
import stopsCount from "./stopsCount"
import isFetching from "./isFetching"

export default combineReducers({
    tickets,
    tabsValue,
    stopsCount,
    isFetching
})