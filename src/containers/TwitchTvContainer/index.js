import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import TwitchUserStatus from "../../components/TwitchUserStatus"
import * as actions from "./actions"

class TwitchTvContainer extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    createTwitchUserStatus() {
        let { data } = this.props
        if(data) {
            let userStatuses = data.map((user, key) => (
                <TwitchUserStatus key={key}>This is the twitch container</TwitchUserStatus>
            ))

            return userStatuses
        } else {
            return null
        }
    }
    render() {
        return (
            <div>
                {this.createTwitchUserStatus()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.twitchTv.get("data")
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...actions}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TwitchTvContainer)    