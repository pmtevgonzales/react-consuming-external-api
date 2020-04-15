import React from 'react'
import SortingHat from './SortingHat'
import Houses from './Houses'  //by houses.map
import { getSortingHat } from '../apis/hpotter'

class App extends React.Component {
  state = {
    hogwartsHouse: ''
  }
  componentDidMount() {
    this.update()
  }

  update = () => {
    getSortingHat()
      .then((hogwartsHouse) => {
        this.setState({
          hogwartsHouse: hogwartsHouse
        })
      })
  }

  render () {
    return (
      <div>
        <h1>Wizarding World ϟ</h1>
        <div>
          <SortingHat hogwartsHouse={this.state.hogwartsHouse} update={this.update} />
        </div>
        <div>
        <h2>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h2>
          <Houses />
        </div>
        <div>

        </div>
        
      </div>
    )
  }
}

export default App
