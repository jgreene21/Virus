import React from 'react'
import NewVirus from './NewVirus'
import VirusCard from './Card'


class Virus extends React.Component {

  state = {
    cards: [
      { id: 1, front: "Card Front", back: "Card Back",  flipped: false },
      { id: 2, front: "Card Front 2", back: "Card Back 2",  flipped: false },
      { id: 3, front: "Card Front 3", back: "Card Back 3",  flipped: false }
    ],
    showForm: false
  }
  

render() {
  return (
    
    <div>
      <NewVirus/>
      <VirusCard/>
    </div>
  )
}

}

export default Virus