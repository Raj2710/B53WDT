import React from 'react'
export const DashboardContext = React.createContext()
function DashboardContextComponent({children}) {
    console.log(children)
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
  return <DashboardContext.Provider value={{data}}>
        {children}
  </DashboardContext.Provider>
}

export default DashboardContextComponent