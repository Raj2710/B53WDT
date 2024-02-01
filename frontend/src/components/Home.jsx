import React from 'react'
import TopBar from './TopBar'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
  return <div>
    <TopBar/>
    <div>
    <header className="masthead">
        <div className="container h-100">
        <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
            <h1 className="fw-light">Your Comfort Is Our Priority</h1>
            <p className="lead">Get your Service/Complaint/Query Resolved Here!</p>
            <button className='btn btn-info' onClick={()=>navigate('/request')}>Create</button>
            </div>
        </div>
        </div>
    </header>
    </div>
  </div>
}

export default Home