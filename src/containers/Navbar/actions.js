import {
    ONLINE_BUTTON_CLICKED,
    OFFLINE_BUTTON_CLICKED,
} from "./constants"

export function handleOnlineButtonClick() {
    return { type: ONLINE_BUTTON_CLICKED }
}

export function handleOfflineButtonClick() {
    return { type: OFFLINE_BUTTON_CLICKED }
}