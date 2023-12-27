import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Batch() {
  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Nested Route Example</h1>
        </div>
        <ul>
            <li style={{cursor:"pointer"}}><Link to="class" style={{textDecoration:'none'}}>Class</Link></li>
            <li style={{cursor:"pointer"}}><Link to="user" style={{textDecoration:'none'}}>User</Link></li>
            <li style={{cursor:"pointer"}}><Link to="query" style={{textDecoration:'none'}}>Query</Link></li>
        </ul>
        <div className='row'>
            <Outlet/>   
        </div>
      </div>
    </div>
    </div>
}

export default Batch