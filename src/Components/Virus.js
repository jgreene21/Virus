import React from 'react'
import NewVirus from './NewVirus'
import VirusCard from './VirusCard'
import { Icon } from 'semantic-ui-react'

class Virus extends React.Component {

  state = {
    cards: [
      { id: 1, front: "the common cold", back: "a viral infection of the upper respiratory tract.",  flipped: false, editing: false },
      { id: 2, front: "HIV", back: "The human immunodeficiency viruses are two species of Lentivirus that over time they cause AIDS",  flipped: false, editing: false },
      { id: 3, front: "Influenza", back: "There are two main types of influenza (flu) virus: Types A and B. The influenza A and B viruses that routinely spread in people are responsible for seasonal flu epidemics each year.",  flipped: false, editing: false },
      { id: 4, front: "hepatitis", back: "Viruses cause most cases of hepatitis. The type of hepatitis is named for the virus that causes it.",  flipped: false, editing: false },
      { id: 5, front: "herpes and cold sores", back: "HSV-1 usually causes cold sores. HSV-2 is usually responsible for genital herpes.",  flipped: false, editing: false },
      { id: 6, front: "rabies", back: "Rabies is a viral disease that causes inflammation of the brain in humans and other mammals.",  flipped: false, editing: false },
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