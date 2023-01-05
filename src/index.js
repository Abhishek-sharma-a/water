import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import ScrollToTop from './components/ScrolltoTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Auth0Provider
    domain="dev-ont5zg8btmkwukz3.us.auth0.com"
    clientId="mr5MUTgsdWC9Z0ioFaGwt3GQ6UxV3gFa"
    redirectUri={window.location.origin}
  >

     <BrowserRouter> 
     <ScrollToTop/>
         <App />
      </BrowserRouter>
  
      </Auth0Provider>
);

reportWebVitals();
