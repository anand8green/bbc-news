import React, { useEffect, useState } from 'react'
import { GlobalData } from '../GlobalState'
import logo from '../assets/bbc-logo.png'
function Header() {
    const [, dispatch] = GlobalData()

    // Updating the country information in global state

    const handleCountryChange = (e) => {
        dispatch({ type: "setLoading", value: true })
        const countryCode = e.target.value
        dispatch({ type: "updateCountry", value: countryCode })
        fetchingNews(countryCode)
    }

    // Fetching News Article

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
        <header className="headerContainer">
            <div className="wrapper">
                <div className="headerContent">
                    <div className="logo">
                        <img src={logo} alt="BBC" width={118} height={36} />
                    </div>
                    <div className="list">
                        <label className='countryLabel'> Choose a country
                            <select name="countries"
                                onChange={handleCountryChange}>
                                <option value="in">India</option>
                                <option value="us">US</option>
                                <option value="gb">UK</option>
                                <option value="fr">France</option>
                                <option value="au">Australia</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
