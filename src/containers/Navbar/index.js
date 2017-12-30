import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { Field, reduxForm, SubmissionError } from "redux-form/immutable"
import { primary } from "../../theme/colors"

import * as actions from "../../redux/TwitchUsersStatusList"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 120px;
    background-color: ${primary};
    margin-bottom: 2.5em;
`
const Button = styled.button`
    width: 80%;
`
class Navbar extends React.Component {
    handleSubmit() {

    }
    render() {
        return (
            <Container>
                <Button onClick={this.props.handleOnlineButtonClick}>Online</Button>
                <Button onClick={this.props.handleOfflineButtonClick}>Offline</Button>
                <Field 
                    name="searchUser"
                    component="input"
                    type="text"
                    placeholder="search user"
                />
                <Field 
                    name="addUser"
                    component="input"
                    type="text"
                    placeholder="add user"
                />
            </Container>   
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.twitchUsers.get("data")
    }
}

function mapDispatchToProps(dispatch) {
    console.log("actions:", actions)
    return bindActionCreators({...actions}, dispatch)
}

export default reduxForm(
    
)(connect(mapStateToProps, mapDispatchToProps)(Navbar))