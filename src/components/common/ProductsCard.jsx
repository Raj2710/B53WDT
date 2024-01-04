import React from 'react'
import { useNavigate } from 'react-router-dom'
function ProductsCard(props) {
    let navigate = useNavigate()
    const {title,description,price,stock,thumbnail,id} = props.product
  return <>
    <div className='cardWrapper' onClick={()=>{
        stock>0?navigate(`/product/${id}`):<></>
    }}>
        <div className='imageContainer'>
            <img src={thumbnail} alt={title} className='listImage'></img>
        </div>
        <div className='titleContainer'>
            <h2>{title}</h2>
            <div>{stock>0?<></>:<p style={{color:"red"}}>Out of Stock</p>}</div>
            <p>{description}</p>
            <p><strong>Rs. {price}</strong></p>
        </div>
    </div>
  </>
}

export default ProductsCard