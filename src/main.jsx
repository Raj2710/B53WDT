import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextComponent from './context/ProductContextComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ProductContextComponent>
    <App />
  </ProductContextComponent>
  </React.StrictMode>,
)
