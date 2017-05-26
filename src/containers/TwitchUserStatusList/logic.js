import { createLogic } from "redux-logic"
import {
    SHOW_ONLINE_USERS,
    HIDE_ONLINE_USERS,
    SHOW_OFFLINE_USERS,
    HIDE_OFFLINE_USERS,
    ONLINE_BUTTON_CLICKED,
    OFFLINE_BUTTON_CLICKED,
} from "../../redux/TwitchUsersStatusList"

import {
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    FETCH_USER_STREAM_DATA,
    FETCH_USER_STREAM_DATA_SUCCESS,
    FETCH_USER_STREAM_DATA_ERROR,
} from "../../redux/TwitchUsers"

//api key used for twitchTV api calls
const clientID = "drrtl64iwxyebivu4afs782bf7numf"

export const handleOnlineButtonClick = createLogic({
    type: ONLINE_BUTTON_CLICKED,
    process: function({getState, action}, dispatch, done) {
        let state = getState().twitchUsersStatusList
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
        let state = getState().twitchUsersStatusList
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

export const fetchUserData = createLogic({
    type: FETCH_USER_DATA,
    process: async function process({getState, action}, dispatch, done) {
        let { username } = action
        let endpoint = `https://api.twitch.tv/kraken/users/${username}?client_id=${clientID}`
        try {
            let response = await fetch(endpoint)
            console.log("response: ", response)
            let data = await response.json()
            let { display_name, bio, logo, _links: { self } } = data
            console.log("data: ", data)
            let user = { username: display_name, profileUrl: self, bio, logo }
            dispatch({ type: FETCH_USER_DATA_SUCCESS, user })
            dispatch({ type: FETCH_USER_STREAM_DATA, username })
        } catch(e) {
            console.log(e)
            dispatch({ type: FETCH_USER_DATA_ERROR })
        } finally {
            done()
        }
    }
})

export const fetchStreamData = createLogic({
    type: FETCH_USER_STREAM_DATA,
    process: async function process({getState, action}, dispatch, done) {
        let { username } = action
        let endpoint = `https://api.twitch.tv/kraken/streams/${username}?client_id=${clientID}`
        try {
            let response = await fetch(endpoint)
            console.log("response: ", response)
            let data = await response.json()
            console.log("data: ", data)
            let stream =  data.stream ? {game: data.stream.game, viewers: data.stream.viewers} : null
            dispatch({ type: FETCH_USER_STREAM_DATA_SUCCESS, username, stream })
        } catch(e) {
            console.log(e)
            dispatch({ type: FETCH_USER_STREAM_DATA_ERROR })
        } finally {
            done()
        }
    }
})