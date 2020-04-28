import React from 'react';
import GlobalStyle from'./styles/global';
import Header from './components/Header';
import Home from './sections/Home';
import Section2 from './sections/Section2';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Section2 />
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;