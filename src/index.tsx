import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*------ STORE REDUX PART ------*/
import { Provider, TypedUseSelectorHook } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import rootReducer from './reducers/rootReducer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const composedEnhancer = compose(applyMiddleware(thunk))

const store = createStore(
  rootReducer,
  composedEnhancer
)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();