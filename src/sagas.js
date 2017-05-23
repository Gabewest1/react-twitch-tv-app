//Import your sagas and add them to the rootSaga function
import { watchFetchUserData, watchFetchUserStreamData } from "./containers/TwitchTvContainer/sagas"
export default function* rootSaga() {
    yield [
        watchFetchUserData(),
        watchFetchUserStreamData()
    ]
}