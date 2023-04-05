import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './--components/App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import './tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
