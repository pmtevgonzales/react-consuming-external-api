import React from 'react'
import House from './House'

import { getHouses } from '../apis/hpotter'

class Houses extends React.Component {
    state = {
        houses: []
    }

    componentDidMount() {
        getHouses()
            .then((houses) => {
                this.setState ({
                  houses: houses
                })
        })
    }

    render () {
        const houses = this.state.houses

        return (
            <div>
                {houses.map((house) => { 
                    return <House house={house} />
                })}
            </div>
        )
    }
}
  

export default Houses