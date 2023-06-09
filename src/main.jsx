
import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NewsletterContextProvider } from './Context/NewsletterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsletterContextProvider>
      <App/>
    </NewsletterContextProvider>
  </React.StrictMode>

)