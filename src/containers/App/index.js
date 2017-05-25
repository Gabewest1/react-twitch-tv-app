import React from "react"

import TwitchUserStatusList from "../TwitchUserStatusList"
import Container from "./Container"

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <TwitchUserStatusList />
            </Container>
        )
    }
}