//Import your sagas and add them to the rootSaga function
import { watchFetchUsers } from "./containers/TwitchTvContainer/sagas"
export default function* rootSaga() {
    yield [
        watchFetchUsers()
    ]
}