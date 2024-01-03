import React,{useContext} from 'react'
import { ProductContext } from '../../context/ProductContextComponent'
function AddProduct() {
    let {state,dispatch,Actions} = useContext(ProductContext)
    console.log(state,dispatch,Actions)
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct