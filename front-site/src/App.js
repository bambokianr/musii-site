import React from 'react';
import GlobalStyle from'./styles/global';
import Header from './components/Header';
import Home from './sections/Home';
import Section2 from './sections/Section2';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Section2 />
      <GlobalStyle />
    </>
  );
}
export default App;