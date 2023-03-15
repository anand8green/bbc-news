import React from 'react'
import { GlobalData } from '../GlobalState'

function Welcome() {

    const [state, dispatch] = GlobalData()
    const { countryName } = state

    console.log(state);

    return (
        <div>
            Welcome to BBC, {countryName}
        </div>
    )
}

export default Welcome
