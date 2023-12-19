import React from 'react'//rfce

function App() {
  let data = [{
    title:"Project One",
    description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
  },
  {
    title:"Project Two",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title:"Project Three",
    description:"Lorem ipsum dolor sit amet,repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
  },
  {
    title:"Project Four",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt!"
  },
  {
    title:"Project Five",
    description:"Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
  },
  {
    title:"Project Six",
    description:"Lorem ipsum dolor sit amet,illum tempora ex quae? Nihil, dolorem!"
  },
]
  return<>
    <div className="container">
      <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>
      <div className="row">
        {
          data.map((e,i)=>{
            return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{e.title}</a>
                </h4>
                <p className="card-text">{e.description}</p>
              </div>
            </div>
          </div>
          })
        }
      </div>
  </div>
  </>
}

export default App