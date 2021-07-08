import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardHeader, CardImage, CardBody, CardTitle, CartText } from "./styles"

const User = (props) => {
    
    const [usersDetails, setUsersDetails] = useState([])
    useEffect(() => {
            axios.get(`https://dummyapi.io/data/api/user/${props.user.id}`, { headers: { 'app-id': "60e6ff797b73cc658fe0a67e"}})
            .then((response) => {
                setUsersDetails(response.data)
            })
    }, [])

    const currentYear = new Date().getFullYear()
    const dateOfBirth = usersDetails.dateOfBirth && usersDetails.dateOfBirth.slice(0, 4)

    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardImage src={props.user.picture} alt="randomuser"/>
                </CardHeader>
                <CardBody>
                    <CardTitle>{props.user.firstName} {props.user.lastName}, {currentYear - dateOfBirth}</CardTitle>
                    <CartText>{props.user.email}</CartText>
                    <CartText>{usersDetails.location?.country}</CartText>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default User