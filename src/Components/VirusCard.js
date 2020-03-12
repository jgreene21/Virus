import React from 'react'
import { Button, Card, Checkbox, Icon } from 'semantic-ui-react'

const VirusCard = (props) => (
  <Card.Group>
    {props.cards.map(card => (
      <Card key={`card-${card.id}`}>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Checkbox toggle label='Flip'onChange={() => props.flipCard(card.id)} />
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
            <Icon bordered name='trash alternate' onClick={() => props.deleteCard(card.id)} />
          </div>
        </Card.Content>

      </Card>
    ))}
  </Card.Group>

)

export default VirusCard

