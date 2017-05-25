import { call, put, takeEvery } from "redux-saga/effects"
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

export function* watchFetchUserData() {
    yield takeEvery(FETCH_USER_DATA, fetchUserData)
}
export function* watchFetchUserStreamData() {
    yield takeEvery(FETCH_USER_STREAM_DATA, fetchUserStreamData)
}

export function* fetchUserData(action) {
    let { username } = action
    let endpoint = `https://api.twitch.tv/kraken/users/${username}?client_id=${clientID}`
    try {
            let response = yield call(fetch, endpoint)
            // console.log("response: ", response)
            let data = yield response.json()
            let { display_name, bio, logo, _links: { self } } = data
            // console.log("data: ", data)
            let user = { username: display_name, profileUrl: self, bio, logo }
            yield put({ type: FETCH_USER_DATA_SUCCESS, user })
        } catch(e) {
            console.log(e)
            yield put({ type: FETCH_USER_DATA_ERROR })
        }
}

export function* fetchUserStreamData(action) {
    let { username } = action
    let endpoint = `https://api.twitch.tv/kraken/streams/${username}?client_id=${clientID}`
    try {
            let response = yield call(fetch, endpoint)
            // console.log("response: ", response)
            let data = yield response.json()
            // console.log("data: ", data)
            let stream = {game: data.stream.game, viewers: data.stream.viewers}
            yield put({ type: FETCH_USER_STREAM_DATA_SUCCESS, stream })
        } catch(e) {
            console.log(e)
            yield put({ type: FETCH_USER_STREAM_DATA_ERROR })
        }
}