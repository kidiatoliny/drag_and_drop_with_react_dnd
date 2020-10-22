import React from 'react';

import { Container, Label } from './styles';

import avatar  from '../../../assets/avatar.png'
const Card: React.FC = () => {
  return (
    <Container>
      <header>
        <Label color='#7159c1'/>
      </header>
      <p>Lorem ipsum dolor sit amet</p>
      <img src={avatar} alt='avatar' />
    </Container>
  );
}

export default Card;
