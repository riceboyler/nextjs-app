import React from 'react';
import { css } from '../../styled-system/css';
import { Center, Container } from '../../styled-system/jsx';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container minH="75vh">
        <Center className={css({ fontFamily: 'zen', fontSize: "2xl", fontWeight: 'bold' })}>
          Hello 🐼!
        </Center>
      </Container>
      <Footer />
    </>
  );
}