import { call, put, takeEvery } from "redux-saga/effects"
import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from "./constants"

export function* watchFetchUsers() {
    yield takeEvery(FETCH_USERS, fetchUsers)
}

export function* fetchUsers(action) {
    let endpoint = "https://api.twitch.tv/kraken/streams/noobs2ninjas?client_id=drrtl64iwxyebivu4afs782bf7numf"
    try {
            let response = yield call(fetch, endpoint)
            console.log("response: ", response)
            let data = yield response.json()
            console.log("data: ", data)
            yield put({ type: FETCH_USERS_SUCCESS, data })
        } catch(e) {
            console.log(e)
            yield put({ type: FETCH_USERS_ERROR })
        }
}