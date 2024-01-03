import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Class from './components/Class'
import User from './components/User'
import Querry from './components/Querry'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Batch from './components/Batch'
import UserContextComponent from './utils/UserContextComponent'
import DashboardContextComponent from './utils/DashboardContextComponent'
import UseRef from './components/hooks/UseRef'
import UseReducer from './components/hooks/UseReducer'
function App() {

  return <div id="wrapper">
    
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={
        <DashboardContextComponent>
          <Dashboard/>
        </DashboardContextComponent>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
        <Route path='/batch' element={<Batch/>}>
            <Route path='user' element={<User/>}/>
            <Route path='class' element={<Class/>}/>
            <Route path='query' element={<Querry/>}/>
        </Route>
        <Route path='/useref' element={<UseRef/>}/>
        <Route path='/usereducer' element={<UseReducer/>}/>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App