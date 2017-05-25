import { createLogic } from "redux-logic"
import {
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    FETCH_USER_STREAM_DATA,
    FETCH_USER_STREAM_DATA_SUCCESS,
    FETCH_USER_STREAM_DATA_ERROR
} from "./constants"

//api key used for twitchTV api calls
const clientID = "drrtl64iwxyebivu4afs782bf7numf"

export const fetchUserData = createLogic({
    type: FETCH_USER_DATA,
    // processOptions: {
    //     successType: FETCH_USER_DATA_SUCCESS,
    //     failType: FETCH_USER_DATA_ERROR
    // },
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
    // processOptions: {
    //     successType: FETCH_USER_STREAM_DATA_SUCCESS,
    //     failType: FETCH_USER_STREAM_DATA_ERROR
    // },
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