import React, { createContext, useContext, useReducer } from 'react'

const GlobalContext = createContext()

const initialState = {
    countryCode: "in",
    countryName: "India",
    isLoading: false,
    newsArticle: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "updateCountry": {
            let name = ""

            if (action.value === "us") {
                name = "United States"
            }
            if (action.value === "in") {
                name = "India"
            }
            if (action.value === "gb") {
                name = "Great Britain"
            }
            if (action.value === "au") {
                name = "Australia"
            }
            if (action.value === "fr") {
                name = "France"
            }

            return { ...state, countryCode: action.value, countryName: name }
        }
    }

}

function GlobalState({ children }) {
    return (
        <GlobalContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </GlobalContext.Provider>

    )
}

export const GlobalData = () => useContext(GlobalContext)

export default GlobalState
