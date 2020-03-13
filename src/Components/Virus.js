import React from 'react'
import NewVirus from './NewVirus'
import VirusCard from './VirusCard'
import { Icon } from 'semantic-ui-react'

class Virus extends React.Component {

  state = {
    cards: [
      { id: 1, front: "Virus 1", back: "Virus 1 Back",  flipped: false, editing: false},
      { id: 2, front: "Virus 2", back: "Virus Back 2",  flipped: false, editing: false},
      { id: 3, front: "Virus 3", back: "Virus Back 3",  flipped: false, editing: false}
    ],
    showForm: false
  }
 
  
  toggleEdit = (id) => {
    let { cards } = this.state


    //locate object:
    let arrEdit = cards.map(card => {
      if (card.id === id) {
        return { id: card.id, front: card.front, back: card.back, flipped: card.flipped, editing: !card.editing}
      }
      return card
    });
    console.log(arrEdit)
    this.setState({
      cards: arrEdit
    });
  }

  editCard = (revision) => {
    console.log(revision)
  }

  toggleForm = () => {
    // nice easy way to toggle element
    this.setState({
      showForm: !this.state.showForm
    })

  }
  newCard = (card) => {
    //called by handleSubmit function in form
    console.log(card)
    let newArr = [card, ...this.state.cards]

    this.setState({
      cards: newArr
    });
  }

  deleteCard = (id) => {
    let { cards } = this.state
    let filteredArr = cards.filter(card => card.id !== id);

    this.setState({
      cards: filteredArr
    });
  }

  flipCard = (id) => {
    let { cards } = this.state


    //locate object:
    let arrFlip = cards.map(card => {
      if (card.id === id) {
        return { id: card.id, front: card.front, back: card.back, flipped: card.flipped = !card.flipped }
      }
      return card
    });
    this.setState({
      cards: arrFlip
    });
  } 

render() {
  const { showForm } = this.state
  return (
    <div>
      <Icon
        bordered inverted
        color='blue'
        name='angle double down'
        onClick={this.toggleForm}
        />New Entry
      {showForm ? <NewVirus addCard={this.newCard}/> : null}
      <VirusCard cards={this.state.cards} 
                 deleteCard={this.deleteCard} 
                 flipCard={this.flipCard} 
                 toggleEdit={this.toggleEdit}
                 />
    </div>
  )
}

}

export default Virus