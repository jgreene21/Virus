import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class NewVirus extends React.Component {
  state = {
    id: '',
    front: '',
    back: ''
   
  }
  generateId = () => {
    return Math.floor(Math.random()*100)
  }

  handleSubmit = (e) => {
    //send up to App.js state via function passed down by props:
    this.props.addCard(this.state)

    //clear form once submitted
    this.setState({
      id: '', 
      front:'',
      back:''
    })
  }

  handleChange = (event) => {   
    //call random ID generator
    let x = this.generateId()
    this.setState({
  // The following format automatically sets what is in the [] as the key for the key : value pair. 
      id: x,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
     
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.TextArea
              width={10}
              name='front'
            placeholder='Enter text for front of card.'
            value={this.state.front}
            onChange={this.handleChange}
            />
            <Form.TextArea
              width={10}
              placeholder='Enter text for back of card.'
              name='back'
            // placeholder='Phone'
            value={this.state.back}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button compact color='violet'>SUBMIT</Form.Button>
          <hr />
        </Form>
     
    )
  }

}

export default NewVirus