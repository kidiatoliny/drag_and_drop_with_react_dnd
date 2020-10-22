import React from 'react';
import { Container } from './styles';
import { MdAdd } from 'react-icons/md'
import Card from '../Card';

interface iCard {
  id: number,
  content: string,
  labels:Array<string>,
  user?:string,

}
interface ListData{
  title: string,
  creatable:boolean,
  cards:Array<iCard>,
  done?: boolean,
}
interface ListProps{
  data: ListData
}
const List: React.FC <ListProps> = ({data}) => {
  return(
    <Container done={data.done}>
      <header>
        <h2>{ data.title }</h2>
        {
          data.creatable &&
          ( <button type="button">
               <MdAdd size={24} color="#fff"/>
            </button>
          )
        }
      </header>

      <ul>
        {
          data.cards.map(card => <Card key={card.id} data={card}/>)
        }
      </ul>
    </Container>
  );
}

export default List;