import React from 'react'
import { GlobalData } from '../GlobalState'

function Welcome() {

    const [{ countryName }, dispatch] = GlobalData()

    return (
        <div className="container">
            <div className="wrapper">
                Welcome to BBC, {countryName}
            </div>
        </div>
    )
}

export default Welcome
