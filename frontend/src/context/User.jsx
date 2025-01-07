import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()
export const useUser = () => useContext(UserContext)
const UserContextProvider = ({ children }) => {
    const getTokenFromLocalStorage = () => {
        try {
            const token = localStorage.getItem("token")
            return token ? JSON.parse(token) : ""

        } catch (error) {
            console.log(error)
            return ""

        }
    }
    const setTokenFromLocalStorage = (token) => {
        console.log(token, "the token")
        try {
            return localStorage.setItem("token", JSON.stringify(token))

        } catch (error) {
            console.log(error)

        }
    }
    const removeTokenFromLocalStorage = () => {
        try {
            return localStorage.removeItem("token")

        } catch (error) {
            console.log(error)

        }

    }

    const [userToken, setUserToken] = useState(getTokenFromLocalStorage)
    const setToken = (token) => {
        setUserToken(token)
        setTokenFromLocalStorage(token)
    }
    const clearToken = () => {
        removeTokenFromLocalStorage()
        setUserToken("")
    }

    const value = {
        userToken, setUserToken, setToken, clearToken

    }

    return (

        <div>
            <UserContext.Provider value={value}>
                {children}

            </UserContext.Provider>

        </div>
    )
}

export default UserContextProvider