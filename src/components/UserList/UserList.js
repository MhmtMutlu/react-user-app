import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import User from '../User/User'
import { WrapperSection, Wrapper, CardList, LoadButton } from "./styles"

const UserList = () => {

    const {filteredUsers, loadMore} = useContext(UserContext) 

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
                    <LoadButton onClick={loadMore}>Load More</LoadButton>
                </Wrapper>
            </WrapperSection>
        </React.Fragment>
    )
}

export default UserList