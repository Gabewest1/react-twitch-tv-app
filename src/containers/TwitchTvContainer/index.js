import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import TwitchUserStatus from "../../components/TwitchUserStatus"
import * as actions from "./actions"

import styled from "styled-components"
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class TwitchTvContainer extends React.Component {
    componentDidMount() {
        let twitchUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

        twitchUsers.forEach(user => {
            this.props.fetchUserData(user)
            this.props.fetchUserStreamData(user)
        })
    }
    createTwitchUserStatus() {
        let { data } = this.props
        if(data) {
            return data.map((user, key) => (
                <TwitchUserStatus {...data.get(key).toJS()} key={key} />
            ))
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

function mapStateToProps(state) {
    return {
        data: state.twitchTv.get("data")
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...actions}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TwitchTvContainer)    