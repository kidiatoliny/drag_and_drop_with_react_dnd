
import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd'

import BoardContext from '../Board/context'

import { Container, Label } from './styles';



interface Card {
  id: number,
  content: string,
  labels:Array<string>,
  user?:string
}

interface CardProps {
  data:Card,
  index:number,
  listIndex:number,
}
interface DraggedItem{
  type:string,
  index:number,
  listIndex:number,
}
const Card: React.FC <CardProps> = ({ data, index, listIndex }) => {

  const ref = useRef<HTMLDivElement>(null)

  const { moveCard } = useContext(BoardContext)

  const [{isDragging}, dragRef] = useDrag({
    item:{ type:'CARD', index, listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item:DraggedItem, monitor) {
      const draggedListIndex = item.listIndex
      // const targetListIndex = listIndex
      const draggedIndex = item.index
      const targetIndex = index

      if(draggedIndex === targetIndex){
        return
      }

      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top)/2
      const draggedOffset = monitor.getClientOffset()
      const draggedTop = draggedOffset.y - targetSize.top

      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return
      }

      moveCard(draggedListIndex, draggedIndex, targetIndex)

      item.index=targetIndex
    }
  })

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging}>
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
