import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Field} from './Field/Field';

ReactDOM.render(
  <React.StrictMode>
    <Field rows={10} cols={12}/>
  </React.StrictMode>,
  document.getElementById('root')
);

