import React,{useEffect,useContext, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContextComponent'
import Actions from '../../context/Actions'
function Product() {
  
  let {id} = useParams()
  let navigate = useNavigate()
  let {state,dispatch} = useContext(ProductContext)
  let [product,setProduct] = useState({})
  let [count,setCount] = useState(1)
  let [toggleCart,setToggleCart] = useState(true)

  const handleCount = ({type})=>{
    if(count<product.stock && type==='INCREMENT')
      setCount(count+1)

    if(count>1 && type==='DECREMENT')
      setCount(count-1)
  }

  const handleToggle = ()=>{
    if(toggleCart)
    {
      dispatch({type:Actions.ADD_TO_CART,payload:{id,count}})
      setToggleCart(false)
    }
    else{
      dispatch({type:Actions.REMOVE_FROM_CART,payload:{id}})
      setToggleCart(true)
    }
  }
  useEffect(()=>{
    let index
    for(let i = 0;i<state.products.length;i++)
    {
        if(id==state.products[i].id)
        {
          index=i
          break;
        }
    }
  if(index) 
    setProduct(state.products[index])
  else
    navigate('/')
    
  },[])
  return <div className='container homeWrapper'>
    <div className='sectionWrapper'>
        <div className='imageSection'> 
           {product.images?<ImageSection images = {product.images}/>:<></>}
        </div>
        <div className='contentSection'>
          <h2>{product.title}</h2>
          <div>Brand : {product.brand}</div>
          <div>Category : {product.category} </div>
          <div>Description of Product : {product.description}</div>
          <div>Price : {product.price}</div>
          <div> 
            Qty: <button className='counter' onClick={()=>{handleCount({type:'DECREMENT'})}}>-</button>
            &nbsp;
            {count}
            &nbsp;
            <button className='counter' onClick={()=>{handleCount({type:'INCREMENT'})}}>+</button>
          </div>
          <div>
            <button className='counter'
            disabled={count>0?false:true}
            onClick={()=>{handleToggle()}}
            >{toggleCart?<>Add to cart</>:<>Remove</>}</button>
          </div>
        </div>

    </div>
  </div>
}


function ImageSection({images}){
  let [currentImage,setCurrentImage] = useState(0)
  return <>
    <div className='listImages'>
      {
        images.map((e,i)=>{
          return <img src={e} key={i} className='minImages' onClick={()=>setCurrentImage(i)}/>
        })
      }
    </div>
    <div>
      <img src={images[currentImage]} className='prouctImage'/>
   </div>
  </>
}

export default Product