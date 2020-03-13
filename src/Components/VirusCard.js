import React from 'react'
import { Card, Checkbox, Icon } from 'semantic-ui-react'

class VirusCard extends React.Component {
  
  render(){
  
    
    return (
    <Card.Group>
      {this.props.cards.map(card => (
        <Card key={`card-${card.id}`}>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Checkbox toggle label='Flip'onChange={() => this.props.flipCard(card.id)} />
            </div>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <div className="cardText">
                {/* Ternary here to toggle front / back */}

                {card.flipped ? card.back : card.front}
              </div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              {/* <Checkbox label='I know this one!'/> */}

            </div>
            <div className='iconPadding'>
              <Icon bordered name='trash alternate' onClick={() => this.props.deleteCard(card.id)} />
              <Icon bordered name='pencil' onClick={() => this.props.toggleEdit(card.id)} />
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )}
}

export default VirusCard

