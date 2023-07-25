import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Root() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApplication();