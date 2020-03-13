import React from 'react';
import Background from './common-cold-viruses.jpg';
import { Image } from 'semantic-ui-react';


class Home extends React.Component {


render() {
  return (
    <container>
    <Image src={Background} fluid />
    <h1>The Coronavirus is in Good Company</h1>
  </container>
  )
}

}

export default Home