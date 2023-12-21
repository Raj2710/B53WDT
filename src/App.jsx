import React,{useState} from 'react'
import Card from './components/Card'
import TopBar from './components/TopBar'
// import Header from './components/Header'

function App() {
  let [cart,setCart] = useState(0)
  return <>
    <TopBar cart={cart} setCart={setCart}/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
          </div>
      </div>
    </section>
  </>
}

export default App