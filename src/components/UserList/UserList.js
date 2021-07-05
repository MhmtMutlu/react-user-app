import React from 'react'
import User from '../User/User'
import { WrapperSection, Wrapper, CardList } from "./styles"

const UserList = () => {

    let arr = [1,2,3,4,5,6,7,8,9,10]

    return (
        <React.Fragment>
            <WrapperSection>
                <Wrapper>
                    <CardList>
                        {
                            arr.map((user, index) => {
                                return <User key={index}/>
                            })
                        }
                    </CardList>
                </Wrapper>
            </WrapperSection>
        </React.Fragment>
    )
}

export default UserList