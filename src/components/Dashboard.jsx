import React from 'react'
import Card from './Card'

function Dashboard() {
    let data = [
        {
            title:"EARNINGS (MONTHLY)",
            value:"$45,000",
            color:'primary',
            icon:'fa-calendar',
            isProgress:false
        },
        {
            title:"EARNINGS (ANNUAL)",
            value:"$215,000",
            color:'success',
            icon:'fa-dollar-sign',
            isProgress:false
        },
        {
            title:"TASKS",
            value:"20",
            color:'info',
            icon:'fa-clipboard-list',
            isProgress:true
        },
        {
            title:"PENDING REQUEST",
            value:"18",
            color:'warning',
            icon:'fa-comments',
            isProgress:false
        }
    ]
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                    {
                        data.map((e,i)=>{
                            return <Card cardData={e} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Dashboard