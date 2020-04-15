import React from 'react'
import { getSortingHat } from '../apis/hpotter'

class App extends React.Component {
  componentDidMount() {
    getSortingHat()
      .then((hogwartsHouse) => {
        console.log(hogwartsHouse)
      })
  }
  render () {
    return (
      <div>
        <h1>Wizarding World ϟ</h1>
      </div>
    )
  }
}

export default App
