import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        axios.get("https://dummyapi.io/data/api/user?limit=10", { headers: { 'app-id': "60e6ff797b73cc658fe0a67e"}})
            .then((response) => {
                setUsers(response.data.data)
            })
    }, [])

    const searchUser = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().concat(user.lastName.toLowerCase()).includes(search.toLowerCase())
    )
    
    return (
        <UserContext.Provider value={{filteredUsers, searchUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider