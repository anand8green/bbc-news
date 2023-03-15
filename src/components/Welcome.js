import React from 'react'
import { GlobalData } from '../GlobalState'

function Welcome() {

    const [{ countryName }, dispatch] = GlobalData()

    return (
        <div>
            Welcome to BBC, {countryName}
        </div>
    )
}

export default Welcome
