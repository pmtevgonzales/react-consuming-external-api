import React from 'react'


class SortingHat extends React.Component {
  render () {
    return (
      <div>
        <h2>SORTING HAT</h2>
        {this.props.hogwartsHouse && <p>I've sorted high, I've sorted low,<br/>
        So put me on and you will know <br/>
        Are you afraid of what you'll hear?<br/>
        Afraid I'll speak the name you fear?<br/>
        Not Slytherin!<br/> 
        Not Gryffindor!<br/>
        Not Hufflepuff!<br/>
        Not Ravenclaw!<br/>
        Don't worry, child, I know my job,<br/>
        I know just what to do with you...<br/>
        SsSsLlyYgGgRrRryfFfRrRraAavVVhHHufFf...<br/>
        <br/>
        <strong>{this.props.hogwartsHouse}</strong></p>}

        {/* <button onClick={this.props.hogwartsHouse}>Join your House now!</button> */}
        <br/>
        <button onClick={this.props.update}>Update ☍</button>
      </div>
    )
  }
}

export default SortingHat