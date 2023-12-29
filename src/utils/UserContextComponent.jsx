import React,{useState} from 'react'
export const UserContext = React.createContext()

function UserContextComponent({children}) {
    // console.log(children)
    let [user,setUser] = useState([
        {
          id:1,
          name:"Naga",
          email:"naga@gmail.com",
          mobile:"987654321",
          batch:"B53"
        },
        {
          id:2,
          name:"Abimani",
          email:"abimani@gmail.com",
          mobile:"78987654567",
          batch:"B53"
        },
        {
          id:3,
          name:"Amsa",
          email:"amsa@gmail.com",
          mobile:"89876543456",
          batch:"B53"
        }
      ])
  return <UserContext.Provider value ={{user,setUser}}>
    {children}
  </UserContext.Provider>
}

export default UserContextComponent