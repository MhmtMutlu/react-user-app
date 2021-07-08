import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get("https://dummyapi.io/data/api/user?limit=10", { headers: { 'app-id': "60e6ff797b73cc658fe0a67e"}})
            .then((response) => {
                setUsers(response.data.data)
            })
    }, [])

    
    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider