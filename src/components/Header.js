import React, { useEffect, useState } from 'react'
import { GlobalData } from '../GlobalState'

function Header() {
    const [state, dispatch] = GlobalData()

    const handleCountryChange = (e) => {
        const countryCode = e.target.value
        dispatch({ type: "updateCountry", value: countryCode })
        fetchingNews(countryCode)
    }

    // Getting News Article

    const fetchingNews = async (countryCode) => {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=2f4a65c8a8f9459b91b9f85669d3d4c8`)
        const data = await res.json()
        console.log(data);
        dispatch({ type: "updateNews", value: data.articles.slice(0, 5) })

    }

    useEffect(() => {
        fetchingNews("in")
    }, [])

    return (
        <header className="container">
            <div className="wrapper">
                <div className="content">
                    <div className="logo">
                        BBC
                    </div>
                    <div className="list">
                        <label> Choose a country </label>
                        <select name="countries"
                            onChange={handleCountryChange}

                        >
                            <option value="in">India</option>
                            <option value="us">US</option>
                            <option value="gb">UK</option>
                            <option value="fr">France</option>
                            <option value="au">Australia</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
