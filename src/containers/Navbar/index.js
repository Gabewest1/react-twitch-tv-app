import React from "react"
import { Field, reduxForm, SubmissionError } from "redux-form/immutable"

import styled from "styled-components"

const Container = styled.div`
    display: flex;
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
                <Button>Online</Button>
                <Button>Offline</Button>
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

export default Navbar