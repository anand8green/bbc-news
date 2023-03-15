import React, { useState } from 'react'

function Header() {

    const [country, setCountry] = useState("in")

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

    return (
        <header className="container">
            <div className="wrapper">
                <div className="content">
                    <div className="logo">
                        BBC
                    </div>
                    <div className="list">
                        <label> Choose a country </label>
                        <select name="countries" onChange={handleCountryChange}>
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
