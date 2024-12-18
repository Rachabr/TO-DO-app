import React from 'react';
import ReactDOM from 'react-dom/client';
import {AuthContextProvider, authContext} from "./context/authContext.jsx"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider  >
        <App /> 
    </AuthContextProvider>
  </React.StrictMode>
);