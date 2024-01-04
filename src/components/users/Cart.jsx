import React,{useContext,useState,useEffect} from 'react'
import { ProductContext } from '../../context/ProductContextComponent'
import CartCard from '../common/CartCard'
import Actions from '../../context/Actions'
import { useNavigate } from 'react-router-dom'
function Cart() {
  let {state,dispatch} = useContext(ProductContext)
  let navigate = useNavigate()
  const handleCheckout = ()=>{
    dispatch({type:Actions.RESET_CART})
    navigate('/')
  }
  let [total,setTotal] = useState(0)

  useEffect(()=>{
    let sum = 0
    for(let i = 0;i<state.cart.length;i++)
    {
        sum += state.cart[i].quantity * state.cart[i].price
    }
    setTotal(sum)
  },[state])

  return <>
    <div className='homeWrapper'>
      <div className='productsCardWrapper'>
        {
          state.cart.map((e)=>{
            return <CartCard product={e} key={e.id}/>
          })
        }
      </div>
      <div>
      {
        state.cart.length!=0?<>
          <h3 style={{textAlign:"center"}}>Total : {total}</h3>
        </>:<></>
      }
      {
        state.cart.length!=0?
        <div style={{textAlign:"center"}}><button className='counter' onClick={()=>{handleCheckout()}}>Check Out</button></div>:
        <>
        <div style={{textAlign:"center"}}>The Cart is Empty! Please add some products from Home Page</div>
        </>
      }
    </div>
    </div>
  </>
}

export default Cart