import React from 'react'
import { GlobalData } from '../GlobalState'

function Welcome() {

    const [{ countryName }] = GlobalData()

    return (
        <div className="container">
            <div className="wrapper">
                <h4> Welcome to BBC, {countryName}</h4>
            </div>
        </div>
    )
}

export default Welcome
