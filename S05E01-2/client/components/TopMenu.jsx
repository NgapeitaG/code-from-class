import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'

export default class TopMenu extends React.Component {
  render () {
    return (
      <Menu borderless color='blue' fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Header as='h1' inverted>Charlotte&rsquo;s Web Log</Header>
          </Menu.Item>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/new'>Add Post</Menu.Item>
          <Menu.Item position='right'>&copy; 1980 E. B. White</Menu.Item>
        </Container>
      </Menu>
    )
  }
}
