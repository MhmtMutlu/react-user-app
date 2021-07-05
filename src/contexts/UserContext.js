import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([])
    // const usersDetails = []

    useEffect(() => {
        axios.get("https://dummyapi.io/data/api/user", { headers: { 'app-id': "60e384660ed5b3b527f81f37"}})
            .then((response) => {
                setUsers(response.data.data)
            })
    }, [])

    // useEffect(() => {
    //     users?.forEach(user => {
    //         axios.get(`https://dummyapi.io/data/api/user/${user.id}`, { headers: { 'app-id': "60df6baccbce3d7329302078"}})
    //         .then((response) => {
    //             usersDetails.push(response.data)
    //         })
    //     })
    // })

    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider