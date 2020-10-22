import React from 'react';

import { Container } from './styles';
import { MdAdd } from 'react-icons/md'
import Card from '../Card';
const List: React.FC = () => {
  return(
    <Container>
      <header>
        <h2>Tarefa</h2>
        <button type="button">
          <MdAdd size={24} color="#fff"/>
        </button>
      </header>

      <ul>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ul>
    </Container>
  );
}

export default List;
