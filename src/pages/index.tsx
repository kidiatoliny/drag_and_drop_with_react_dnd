import React from 'react'
import Head from 'next/head'


import { Container } from '../styles/pages/Home'
import Header from './components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Pipefy Clone</title>
      </Head>
      <Header/>

  </Container>
  )
}

export default Home
