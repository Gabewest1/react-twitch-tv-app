import React from "react"

import TwitchTvContainer from "../TwitchTvContainer"
import TwitchUserStatus from "../../components/TwitchUserStatus"
import Container from "./Container"

class TwitchUserStatusList extends React.Component {
    componentDidMount() {
        let twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

        twitchUsers.forEach(user => {
            this.props.fetchUserData(user)
        })
    }
    createTwitchUserStatus() {
        let { data, showOnlineUsers, showOfflineUsers } = this.props
        if(data) {
            return data.map((user, key) => {
                let currentUser = data.get(key).toJS()
                if(!showOnlineUsers && currentUser.stream) {
                    return null
                } else if(!showOfflineUsers && !currentUser.stream) {
                    return null
                }
                return (
                    <TwitchUserStatus {...currentUser} key={key} />
                )
            })
        } else {
            return null
        }
    }
    render() {
        return (
            <Container>
                {this.createTwitchUserStatus()}
            </Container>
        )
    }
}


export default TwitchTvContainer(TwitchUserStatusList)