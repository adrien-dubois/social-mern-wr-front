import ReactDOM from 'react-dom/client';
import App from './App';
import { NotificationsProvider } from '@mantine/notifications';

/*------ STORE REDUX PART ------*/
import { Provider, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { getAllUsers } from './actions/Follow';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { useSelector } from 'react-redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const middleware = [thunk];

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: middleware,
    preloadedState
  })
}

const store = setupStore();


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