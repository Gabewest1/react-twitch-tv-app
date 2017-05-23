import React from "react"
import styled from "styled-components"
import { primary, secondary, complementary1, complementary2 } from "../../theme/colors"

let TwitchUserStatus = styled.div`
    opacity: .7;
    background-color: ${primary}
    border: solid 2px ${secondary}
    color: ${complementary1};
    font-size: 5vw;
    font-family: helvetica;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
let UserLogo = styled.div`
    align-self: flex-start;
    opacity: 1;
`
let Logo = styled.img`
    max-width: 100%;
`
let UserInfo = styled.div`
    opacity: 1;
`
let Wrapper = styled.div`
    background-image: url(${(props) => props.logo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export default (props) => {
    let { username, logo, profileUrl, stream } = props
    
    //if the user is currently streaming then render component with the extra
    //stream related data available. Else render the component with a message saying
    //the user is offline
    if(stream) {
        let { viewers, game } = stream
        return (
            <Wrapper logo={logo}>
                <TwitchUserStatus >
                    <UserLogo>
                        {/*<Logo src={logo} alt={username + " logo"} />*/}
                    </UserLogo>
                    <UserInfo>
                        <h1>{username}</h1>
                        <p>Playing: {game}</p>
                        <p>viewers: {viewers}</p>
                    </UserInfo>
                </TwitchUserStatus>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper logo={logo}>
                <TwitchUserStatus >
                    <UserLogo>
                        {/*<Logo src={logo} alt={username + " logo"} />*/}
                    </UserLogo>
                    <UserInfo>
                        <h1>{username}</h1>
                        <p>Currently offline</p>
                    </UserInfo>
                </TwitchUserStatus>
            </Wrapper>
        )
    }
}