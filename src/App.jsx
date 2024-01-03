import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserRoutes from './utils/UserRoutes'
import AdminRoutes from './utils/AdminRoutes'
function App() {
  return <>
    <div>
        <BrowserRouter>
          <Routes>
              <Route path = '/admin/*' element={<AdminRoutes/>}/>
              <Route path = '/*' element={<UserRoutes/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  </>
}

export default App