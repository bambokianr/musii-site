import React from 'react';
import GlobalStyle from'./styles/global';
import Header from './components/Header';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;