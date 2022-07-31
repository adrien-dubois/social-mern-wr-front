import ReactDOM from 'react-dom/client';
import App from './App';
import { NotificationsProvider } from '@mantine/notifications';

/*------ STORE REDUX PART ------*/
import { Provider, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { getAllUsers } from './actions/Follow';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const actionSanitizer = (action: any) => (
  action.type === 'FILE_DOWNLOAD_SUCCESS' && action.data ?
  { ...action, data: '<<LONG_BLOB>>' } : action
);

const composedEnhancer = composeWithDevTools( 
  actionSanitizer, 
  applyMiddleware(thunk)
  )


const store = createStore(
  rootReducer,
  composedEnhancer
);


store.dispatch(getAllUsers());

root.render(
  <Router>
    <Provider store={store}>
      <NotificationsProvider
        position='bottom-right'
        zIndex={2077}
        containerWidth={300}
      >
        <App />
      </NotificationsProvider>
    </Provider>
  </Router>
);

export default store;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector