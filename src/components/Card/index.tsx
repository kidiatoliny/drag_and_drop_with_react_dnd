import React from 'react';
import { useDrag } from 'react-dnd'
import { Container, Label } from './styles';


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

  const [{isDragging}, dragRef] = useDrag({
    item:{ type:'CARD'},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <Container ref={dragRef} isDragging={isDragging}>
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
