import React, { useState } from 'react';
import GlobalStyle from'./styles/global';
import Header from './components/Header';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Footer from './sections/Footer';

function App() {
  const [isMobileScreen, setIsMobileScreen] = useState(window.screen.width <= 768 ? true: false);
  window.addEventListener("resize", () => setIsMobileScreen(window.screen.width <= 768 ? true: false));
  return (
    <>
      <Header />
      <Section1 isMobileScreen={isMobileScreen} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;