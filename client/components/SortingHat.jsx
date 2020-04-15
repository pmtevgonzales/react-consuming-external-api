import React from 'react'


class SortingHat extends React.Component {
  render () {
    return (
      <div>
        <h2>SORTING HAT</h2>
        {this.props.hogwartsHouse && <p>Hmm. Difficult. Very difficult.<br/>
        I know just what to do with you... <br/>
         <strong>{this.props.hogwartsHouse}</strong></p>}
        <button onClick={this.props.update}>Update ☍</button>
      </div>
    )
  }
}

export default SortingHat