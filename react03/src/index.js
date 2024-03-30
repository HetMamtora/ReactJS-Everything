import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Data from './Data';
import Form from './Form'
import UseEffect from './UseEffect';
import Fetch from './Fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Data />
    <Form />
    <UseEffect />
    <Fetch />
  </React.StrictMode>
);

