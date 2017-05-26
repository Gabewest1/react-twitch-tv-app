import { createLogic } from "redux-logic"
import {
    SHOW_ONLINE_USERS,
    HIDE_ONLINE_USERS,
    SHOW_OFFLINE_USERS,
    HIDE_OFFLINE_USERS,
} from "./constants"

import {
    ONLINE_BUTTON_CLICKED,
    OFFLINE_BUTTON_CLICKED,
} from "../Navbar/constants"

export const handleOnlineButtonClick = createLogic({
    type: ONLINE_BUTTON_CLICKED,
    process: function({getState, action}, dispatch, done) {
        let state = getState().twitchUserStatusList
        let isOnlineUsersShowing = state.get("showOnlineUsers")
        let isOfflineUsersShowing = state.get("showOfflineUsers")

        if(isOnlineUsersShowing && isOfflineUsersShowing) {
            dispatch({ type: HIDE_OFFLINE_USERS })
        } else if(!isOnlineUsersShowing && isOfflineUsersShowing) {
            dispatch({ type: SHOW_ONLINE_USERS })
            dispatch({ type: HIDE_OFFLINE_USERS })
        } else if(isOnlineUsersShowing && !isOfflineUsersShowing) {
            dispatch({ type: SHOW_OFFLINE_USERS })
        }

        done()
    }
})

export const handleOfflineButtonClick = createLogic({
    type: OFFLINE_BUTTON_CLICKED,
    process: function({getState, action}, dispatch, done) {
        let state = getState().twitchUserStatusList
        let isOnlineUsersShowing = state.get("showOnlineUsers")
        let isOfflineUsersShowing = state.get("showOfflineUsers")

        if(isOnlineUsersShowing && isOfflineUsersShowing) {
            dispatch({ type: HIDE_ONLINE_USERS })
        } else if(!isOnlineUsersShowing && isOfflineUsersShowing) {
            dispatch({ type: SHOW_ONLINE_USERS })
        } else if(isOnlineUsersShowing && !isOfflineUsersShowing) {
            dispatch({ type: SHOW_OFFLINE_USERS })
            dispatch({ type: HIDE_ONLINE_USERS })
        }

        done()
    }
})