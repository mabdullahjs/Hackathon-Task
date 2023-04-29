import React from 'react'
import Router from './config/routerConfig/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './config/redux/store/Store';

function App() {
  return (
    <>
    <Provider store={Store}>
    <Router/>
    </Provider>
    </>
  )
}

export default App
