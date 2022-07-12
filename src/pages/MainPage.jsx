import React from 'react';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Portfolio from '../components/portfolio/Portfolio';

export default function MainPage() {
  return (
      <>
        <Header />
        <About />
        <Portfolio />
      </>
  )
}