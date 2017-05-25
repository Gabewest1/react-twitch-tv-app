import {
    SHOW_ONLINE_USERS,
    HIDE_ONLINE_USERS,
    SHOW_OFFLINE_USERS,
    HIDE_OFFLINE_USERS,
} from "../TwitchUserStatusList/constants"

export function showOnlineUsers() {
    return { type: SHOW_ONLINE_USERS }
}

export function hideOnlineUsers() {
    return { type: HIDE_ONLINE_USERS }
}

export function showOfflineUsers() {
    return { type: SHOW_OFFLINE_USERS }
}

export function hideOfflineUsers() {
    return { type: HIDE_OFFLINE_USERS }
}