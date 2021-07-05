import React from 'react'
import { Card, CardHeader, CardImage, CardBody, CardTitle, CartText } from "./styles"

const User = (props) => {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardImage src={props.user.picture} alt="randomuser"/>
                </CardHeader>
                <CardBody>
                    <CardTitle>{props.user.firstName} {props.user.lastName}, {props.user.dateOfBirth}</CardTitle>
                    <CartText>{props.user.email}</CartText>
                    <CartText>Turkey</CartText>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default User