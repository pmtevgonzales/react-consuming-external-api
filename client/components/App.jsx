import React from 'react'
import SortingHat from './SortingHat'
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
        <SortingHat hogwartsHouse={this.state.hogwartsHouse} update={this.update} />
      </div>
    )
  }
}

export default App
