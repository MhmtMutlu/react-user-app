import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import User from '../User/User'
import { WrapperSection, Wrapper, CardList } from "./styles"

const UserList = () => {

    const {filteredUsers} = useContext(UserContext) 

    return (
        <React.Fragment>
            <WrapperSection>
                <Wrapper>
                    <CardList>
                        {
                            filteredUsers.map((user, index) => {
                                return <User user={user} key={index}/>
                            })
                        }
                    </CardList>
                </Wrapper>
            </WrapperSection>
        </React.Fragment>
    )
}

export default UserList