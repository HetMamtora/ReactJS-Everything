import React from 'react';
import ReactDOM from 'react-dom/client';
import FormValidations from './FormValidations';
import FormValidationsEx from './FormValidationsEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormValidations />
    <FormValidationsEx />
  </React.StrictMode>
);
