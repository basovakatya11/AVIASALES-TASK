import { tabValue } from "../actions"

const tabsValue = (state = tabValue.SHOW_THE_CHEAPEST, action) => {
    switch (action.type) {
        case 'CHANGE_TAB_VALUE':
            return action.tab
        default:
            return state
    }
}

export default tabsValue