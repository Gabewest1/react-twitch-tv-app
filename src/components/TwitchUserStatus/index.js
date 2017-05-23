import React from "react"
import styled from "styled-components"
import { primary, secondary, complementary1, complementary2 } from "../../theme/colors"

let TwitchUserStatus = styled.div`
    background-color: ${primary}
    border: solid 2px ${secondary}
    color: ${complementary1};
    font-size: 5vw;
    font-family: helvetica;
    height: 400px;
    width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
let UserLogo = styled.div`

`
let Logo = styled.img`

`
let UserInfo = styled.div`

`

export default (props) => {
    let { displayName, logo, views, followers, streamLink, channelLink } = props

    return (
        <TwitchUserStatus>
            <UserLogo>
                <Logo src={logo} alt={displayName + " logo"}/>
            </UserLogo>
            <UserInfo>
                <h1>{displayName}</h1>
                <p>views: {views} || followers: {followers}</p>
            </UserInfo>
        </TwitchUserStatus>
    )
}