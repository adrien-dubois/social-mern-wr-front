import React, { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import Routing from './utils/Routing';
import ScrollToTop from './utils/ScrollToTop';
import { getUser } from './actions/Auth';
import { AppDispatch, useAppDispatch } from './index';


function App() {
  
  const dispatch: AppDispatch = useAppDispatch();
  const [ user, setUser ] = useState<any>(JSON.parse(localStorage.getItem('profile')!));
  
  useEffect(() => {
    const id = user?.data.id;
    if(user) dispatch(getUser(id))
    
  },[user])

  return (
    <>
      <Routing />
      <GlobalStyles/>
      <ScrollToTop/>
    </>
  );
}

export default App;
