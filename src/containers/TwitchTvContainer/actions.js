import { 
    FETCH_USER_DATA,
    FETCH_USER_STREAM_DATA 
} from "./constants"

export function fetchUserData(username) {
    return { type: FETCH_USER_DATA, username }
}

export function fetchUserStreamData(username) {
    return { type: FETCH_USER_STREAM_DATA, username }
}

