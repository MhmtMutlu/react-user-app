import React from 'react'
import { Card, CardHeader, CardImage, CardBody, CardTitle, CartText } from "./styles"

const User = () => {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <CardImage src="https://randomuser.me/api/portraits/men/43.jpg" alt="randomuser"/>
                </CardHeader>
                <CardBody>
                    <CardTitle>Mehmet Mutlu 24</CardTitle>
                    <CartText>mhmetmtlu@outlook.com</CartText>
                    <CartText>Turkey</CartText>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default User