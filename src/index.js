import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import authContext from 'context/authContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <authContext.Provider value={{a: 5, b: 10 }}>
 <App />
    </authContext.Provider>
   </React.StrictMode>
);
