import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
// export const API_URL = 'http://localhost:8000'
export const API_URL = 'https://express-mongoose-g7zt.onrender.com'
function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App