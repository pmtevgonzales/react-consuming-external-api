import React from 'react'
import { getCharacterById } from '../apis/hpotter'

class House extends React.Component {  
  constructor(props) {
    super(props)

    const house = props.house

    this.state = {
      id: house._id,
      name: house.name,
      mascot: house.mascot,
      headOfHouse: house.headOfHouse,
      houseGhost: house.houseGhost,
      founder: house.founder,
      school: house.school,
      membersId: house.members,
      membersName:[],
      values: house.values,
      colors: house.colors
    }

    this.getHouseMembers = this.getHouseMembers.bind(this)
  }

  getHouseMembers () {
    Promise.all(this.state.membersId.map((id) => {
      return getCharacterById(id)
        .then((character) => {
          return character.name
        })
        .catch (()=>{
          console.log(id)
          return 'Lord Voldermort struck! No members for you!'
        })
    }))
    .then((member)=>{
      this.setState({membersName : member.filter(m => m != 'Lord Voldermort struck! No members for you!')})
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <h3>{this.state.name}</h3>
        </div>
        <div>
          <p>Founder: {this.state.founder}</p>
          <p>Mascot: {this.state.mascot}</p>
          <p>Head of House: {this.state.headOfHouse}</p>
          <p>House Ghost: {this.state.houseGhost}</p>
          <p>This house values:</p>
          <ul>
            {this.state.values.map ((value) => {
              return <li>{value}</li>
            })}
          </ul>
        </div>
        <button onClick={this.getHouseMembers.bind(this)}>Members</button>
          <ul>
          {this.state.membersName.map ((name) => {
            return <li>{name}</li>
          })}
          </ul>
      </div>
    )
  }
}

export default House