import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing inverted>
          <Link to='/'>
            <Menu.Item
              as='div'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/About'>
            <Menu.Item
              as='div'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/Virus'>
            <Menu.Item
              as='div'
              name='virus'
              active={activeItem === 'virus'}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    )
  }
}


