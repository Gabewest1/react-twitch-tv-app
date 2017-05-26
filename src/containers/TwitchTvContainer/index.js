import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import TwitchUserStatus from "../../components/TwitchUserStatus"
import * as actions from "./actions"

export default function TwitchTvContainer(Component) {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}
function mapStateToProps(state) {
    return {
        data: state.twitchTv.get("data"),
        showOnlineUsers: state.twitchTv.get("showOnlineUsers"),
        showOfflineUsers: state.twitchTv.get("showOfflineUsers")
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...actions}, dispatch)
}
