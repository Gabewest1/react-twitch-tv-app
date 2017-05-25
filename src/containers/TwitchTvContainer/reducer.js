import { fromJS, Map } from "immutable"
import {
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    FETCH_USER_STREAM_DATA,
    FETCH_USER_STREAM_DATA_SUCCESS,
    FETCH_USER_STREAM_DATA_ERROR
} from "./constants"

let initialState = fromJS({
    loading: false,
    data: [],
    error: false
})

export default function twitchTv(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_DATA:
            return state.set("loading", true).set("error", false)
        case FETCH_USER_DATA_SUCCESS:
            return state.set("loading", false)
                        .update("data", (twitchUsers) => twitchUsers.push(Map(action.user)))
        case FETCH_USER_DATA_ERROR:
            return state.set("loading", false).set("error", true)
        case FETCH_USER_STREAM_DATA:
            return state.set("loading", true).set("error", false)
        case FETCH_USER_STREAM_DATA_SUCCESS:
            return state.set("loading", false)
                        .update("data", (twitchUsers) => twitchUsers.update(
                            twitchUsers.findIndex(user => user.get("username") === action.username),
                            (user) => user.set("stream", action.stream)
                        ))
        case FETCH_USER_STREAM_DATA_ERROR:
            return state.set("loading", false).set("error", true)
        default:
            return state
    }
}