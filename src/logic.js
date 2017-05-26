import {fetchUserData, fetchStreamData} from "./containers/TwitchTvContainer/logic"
import {handleOnlineButtonClick, handleOfflineButtonClick} from "./containers/TwitchUserStatusList/logic"

export default [
    fetchUserData, 
    fetchStreamData,
    handleOnlineButtonClick, 
    handleOfflineButtonClick,
]