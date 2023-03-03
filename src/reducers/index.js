import { combineReducers } from "redux"
import tickets from "./tickets"
import tabsValue from "./tabsValue"
import stopsCount from "./stopsCount"

export default combineReducers({
    tickets,
    tabsValue,
    stopsCount
})