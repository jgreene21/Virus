import React from 'react';
import Background from './virus.jpg';
import { Image, Container } from 'semantic-ui-react';


class About extends React.Component {


  render() {
    return (
      <Container>
        <Image src={Background} fluid />
        <h1>With These Most Common Viruses</h1>
      </Container>
    )
  };
}

export default About;