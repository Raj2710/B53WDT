import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContextComponent'
import Actions from '../../context/Actions'
function CartCard(props) {
    let navigate = useNavigate()
    let {state,dispatch} = useContext(ProductContext)
    const {title,description,price,quantity,image,id,stock} = props.product
    let [count,setCount] = useState(quantity)

    
  const handleCount = ({type})=>{

    if(count<stock && type==='INCREMENT')
    {
        dispatch({type:Actions.UPDATE_QUANTITY,payload:{id,count:1}})
        setCount(count+1)
    }

    if(count>1 && type==='DECREMENT')
    {
        dispatch({type:Actions.UPDATE_QUANTITY,payload:{id,count:-1}})
        setCount(count-1)
    }
    
  }

  return <>
    <div className='cardWrapper' >
        <div className='imageContainer'>
            <img src={image} alt={title} className='listImage'></img>
        </div>
        <div className='titleContainer'>
            <h2>{title}</h2>
            <div> 
                Qty: <button className='counter' onClick={()=>{handleCount({type:'DECREMENT'})}}>-</button>
                &nbsp;
                {count}
                &nbsp;
                <button className='counter' onClick={()=>{handleCount({type:'INCREMENT'})}}>+</button>
            </div>
            <p>{description}</p>
            <p><strong>Rs. {price}</strong></p>
            <div>
            <button className='counter'
            onClick={()=>{dispatch({type:Actions.REMOVE_FROM_CART,payload:{id}})}}>Remove</button>
          </div>
        </div>
    </div>
  </>
}

export default CartCard