import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import registerMocks from './mocks/registerMocks';
 
registerMocks().then(()=>{
  ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  ).render(<App/>);
})