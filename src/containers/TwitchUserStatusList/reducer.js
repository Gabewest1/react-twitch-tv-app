import { fromJS } from "immutable"
import {
    SHOW_ONLINE_USERS,
    HIDE_ONLINE_USERS,
    SHOW_OFFLINE_USERS,
    HIDE_OFFLINE_USERS,
} from "./constants"

let initialState = fromJS({
    showOnlineUsers: true,
    showOfflineUsers: true,
})

export default twitchUserStatusList(state = initialState, action) {
    switch(action.type) {
        case SHOW_ONLINE_USERS:
            return state.set("showOnlineUsers", true)
        case HIDE_ONLINE_USERS:
            return state.set("showOnlineUsers", false)
        case SHOW_OFFLINE_USERS:
            return state.set("showOfflineUsers", true)
        case HIDE_OFFLINE_USERS:
            return state.set("showOfflineUsers", false)
        default: 
            return state
    }
}