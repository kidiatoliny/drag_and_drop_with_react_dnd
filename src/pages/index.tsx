import React from 'react'
import Head from 'next/head'
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import Board from '../components/Board'


const Home: React.FC = () => {
  return (
   <DndProvider backend={HTML5Backend}>
      <Container>
      <Head>
        <title>Pipefy Clone</title>
      </Head>
      <Header/>
      <Board/>
    </Container>
   </DndProvider>
  )
}

export default Home
