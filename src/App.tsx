import React from 'react';
import GlobalStyles from './GlobalStyles';
import Routing from './utils/Routing';
import GoToTop from './utils/GoToTop';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <>
      <Routing />
      <GlobalStyles/>
      <GoToTop/>
      <ScrollToTop/>
    </>
  );
}

export default App;
