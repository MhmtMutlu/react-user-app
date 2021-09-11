import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Card, CardHeader, CardImage, CardBody, CardTitle, CardText } from "./styles"

const User = (props) => {
    
    const [usersDetails, setUsersDetails] = useState([])
    const [loading, setLoading] = useState(false)
    async function takeDetails() { 
        setLoading(true);
        await axios.get(`https://dummyapi.io/data/v1/user/${props.user.id}`, { headers: { 'app-id': "613d0eb3a108d30fc10bd6b1"}})
        .then((response) => {
            setUsersDetails(response.data)
        })
        setLoading(false);
    }

    const currentYear = new Date().getFullYear()
    const dateOfBirth = usersDetails.dateOfBirth && usersDetails.dateOfBirth.slice(0, 4)
    const age = currentYear - dateOfBirth

    return (
        <React.Fragment>
            <Card onClick={takeDetails}>
                <CardHeader>
                    <CardImage src={props.user.picture} alt="randomuser"/>
                </CardHeader>
                <CardBody>
                    <CardTitle>{props.user.firstName} {props.user.lastName}</CardTitle>
                    {
                        loading
                            ? <CardText>Loading...</CardText> 
                            : (
                                <>
                                    {
                                        usersDetails.dateOfBirth && 
                                        <CardText>{age}</CardText>
                                    }
                                    <CardText>{usersDetails.email}</CardText>
                                    <CardText>{usersDetails.phone}</CardText>
                                    <CardText>{usersDetails.location?.country}</CardText>
                                </>
                            )
                    }
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default User