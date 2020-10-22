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
  data: ListData,
  index:number,
}
const List: React.FC <ListProps> = ({data, index:listIndex}) => {
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
          data.cards.map((card,index) =>(
             <Card
             index={index}
             key={card.id}
             data={card}
             listIndex={listIndex}
             />
          ))
        }
      </ul>
    </Container>
  );
}

export default List;
