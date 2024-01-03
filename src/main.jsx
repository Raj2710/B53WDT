import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContextComponent from './utils/UserContextComponent.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextComponent>
      <App />
    </UserContextComponent>
  </React.StrictMode>
)