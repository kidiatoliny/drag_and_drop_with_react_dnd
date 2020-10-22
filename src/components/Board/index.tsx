import React, { useState } from 'react';
import List from './../List';
import { Container } from './styles';
import {loadLists} from '../../services/api'
import BoardContext from './context'
import produce from 'immer'
const data = loadLists()

const Board: React.FC = () => {

  const [lists, setLists] = useState(data)

  function moveCard (
    fromList:number,
    toList:number,
    from:number,
    to:number
    ){
    setLists(produce(lists, draft=>{
      const dragged = draft[fromList].cards[from]
      draft[fromList].cards.splice(from,1)
      draft[toList].cards.splice(to,0,dragged)

    }))
  }
  return (
 <BoardContext.Provider value={{ lists, moveCard }}>
      <Container>
      {
        lists.map((list, index)=>(
        <List
          key={list.title}
          data={list}
          index={index}
          />
        ))
      }
    </Container>
 </BoardContext.Provider>
  );
}

export default Board;
