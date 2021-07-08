import React, { useContext } from 'react'
import { SearchSection, Section, Title, SearchBar } from "./styles"
import { UserContext } from '../../contexts/UserContext'

const Search = () => {

    const {searchUser} = useContext(UserContext)

    return (
        <React.Fragment>
            <SearchSection>
                <Section>
                    <Title>UserList</Title>
                    <SearchBar type="search" onChange={searchUser} placeholder="Search by name"/>
                </Section>
            </SearchSection>
        </React.Fragment>
    )
}

export default Search