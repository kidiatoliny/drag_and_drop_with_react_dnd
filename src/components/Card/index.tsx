import React from 'react';

import { Container, Label } from './styles';

import avatar  from '../../assets/avatar.png'

interface Card {
  id: number,
  content: string,
  labels:Array<string>,
  user?:string
}

interface CardProps {
  data:Card
}

const Card: React.FC <CardProps> = ({ data }) => {
  return (
    <Container>
      <header>
        {
          data.labels.map(label=><Label key={label} color={label}/>)
        }

      </header>
      <p>{data.content}</p>
      {
        data.user &&  <img src={data.user} alt='avatar' />
      }
    </Container>
  );
}

export default Card;
