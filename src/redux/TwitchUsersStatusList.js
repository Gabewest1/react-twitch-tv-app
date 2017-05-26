import { fromJS, Map } from "immutable"

export const SHOW_ONLINE_USERS = "SHOW_ONLINE_USERS"
export const HIDE_ONLINE_USERS = "HIDE_ONLINE_USERS"
export const SHOW_OFFLINE_USERS = "SHOW_OFFLINE_USERS"
export const HIDE_OFFLINE_USERS = "HIDE_OFFLINE_USERS"
export const ONLINE_BUTTON_CLICKED = "ONLINE_BUTTON_CLICKED" 
export const OFFLINE_BUTTON_CLICKED = "OFFLINE_BUTTON_CLICKED" 

let initialState = fromJS({
    showOnlineUsers: true,
    showOfflineUsers: true,
})

export default function twitchUsersStatusList(state = initialState, action) {
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

export function handleOnlineButtonClick() {
    return { type: ONLINE_BUTTON_CLICKED }
}

export function handleOfflineButtonClick() {
    return { type: OFFLINE_BUTTON_CLICKED }
}