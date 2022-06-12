import React, { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import Routing from './utils/Routing';
import ScrollToTop from './utils/ScrollToTop';
import { getUser } from './actions/Auth';
import { AppDispatch, useAppDispatch } from './index';


function App() {
  
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')!));
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    if(user){
      const id = user.data.id;
      dispatch(getUser(id))
    }
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
