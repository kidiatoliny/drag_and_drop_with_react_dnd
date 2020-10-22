import React from 'react';

 import { Container } from './styles';
 import { MdAdd } from 'react-icons/md'
const List: React.FC = () => {
  return(
    <Container>
      <header>
        <h2>Tarefa</h2>
      </header>
      <button type="button">
        <MdAdd size={24} color="#fff"/>
      </button>
    </Container>
  );
}

export default List;
