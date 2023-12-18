function App() {
  const users = [{
    name:"Nagarajan",
    email:"nag@gmail.com",
    batch:"B20"
  },
  {
    name:"Alex",
    email:"alex@yahoo.com",
    batch:"B53"
  },
  {
    name:"Archana",
    email:"archana@sify.com",
    batch:"B25"
  },
  {
    name:"Praveen",
    email:"praveen@gmail.com",
    batch:"B50"
  },
  {
    name:"Raj",
    email:"raj@gmail.com",
    batch:"B47"
  }
  ]
  //JSX- Javascript XML
  return <>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {
          users.map((e,i)=>{
            return <tr>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.batch}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  </>
}
export default App
