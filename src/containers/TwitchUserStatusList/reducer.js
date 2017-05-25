import { fromJS } from "immutable"

let initialState = fromJS({
    showOnlineUsers: true,
    showOfflineUsers: true,
})

export default twitchUserStatusList(state = initialState, action) {
    switch(action.type) {
        default: 
            return state
    }
}