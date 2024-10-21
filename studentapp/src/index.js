import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
 
import reportWebVitals from './reportWebVitals';
import ContextApiExample from './ContextApiExample';
import UseRefExample from './UseRefExample';
import UseReducerExample from './UseReducerExample';
import RegistrationForm from './FormExample/RegistrationForm';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <RegistrationForm/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
