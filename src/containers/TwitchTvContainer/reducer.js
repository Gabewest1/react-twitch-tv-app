import { fromJS } from "immutable"
import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from "./constants"

let initialState = fromJS({
    loading: false,
    data: false,
    error: false
})

export default function twitchTv(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS:
            return state.set("loading", true).set("error", false)
        case FETCH_USERS_SUCCESS:
            return state.set("loading", false).set("data", action.data)
        case FETCH_USERS_ERROR:
            return state.set("loading", false).set("error", true)
        default:
            return state
    }
}