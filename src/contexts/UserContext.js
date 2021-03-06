import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [limit, setLimit] = useState(10)
    
    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user?limit=" + limit, { headers: { 'app-id': "613d0eb3a108d30fc10bd6b1"}})
            .then((response) => {
                setUsers(response.data.data)
            })
    }, [limit])

    const searchUser = (e) => {
        setSearch(e.target.value)
    }

    const loadMore = () => {
        setLimit(limit + 10)
    }

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().concat(user.lastName.toLowerCase()).includes(search.toLowerCase())
    )
    
    return (
        <UserContext.Provider value={{filteredUsers, searchUser, loadMore}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider