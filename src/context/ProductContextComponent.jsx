import React,{useReducer} from 'react'
import Products from './Products.json'
import Actions from './Actions'
export const ProductContext = React.createContext(null) 
const initialValue = {
  products:Products,
  cart:[]
}
function reducer(state,action){
    switch(action.type)
    {
        case Actions.ADD_TO_CART:return addToCart(state,action.payload)
        case Actions.REMOVE_FROM_CART: return removeFromCart(state,action.payload)
        case Actions.UPDATE_QUANTITY: return updateQuantity(state,action.payload)
        case Actions.RESET_CART: return resetCart()
    }
}

function ProductContextComponent({children}) {
  let [state,dispatch] = useReducer(reducer,initialValue)
return <ProductContext.Provider value={{state,dispatch,Actions}}>
    {children}
  </ProductContext.Provider>
}

const findArrayIndex = (array,id)=>{

  let index
  for(let i = 0;i<array.length;i++)
  {
      if(array[i].id==id)
      {
        index=i
        break;
      }
  }
  return index
}

const addToCart = (state,payload)=>{

    //find index
    let productIndex = findArrayIndex(state.products,payload.id)
    let cartIndex = findArrayIndex(state.cart,payload.id)
    
    //update stock value
    let products = structuredClone(state.products)
    let cart = structuredClone(state.cart)

    products[productIndex].stock -= payload.count

    //Add item to cart
    if(cartIndex || cartIndex===0)
    {
        cart[cartIndex].quantity += payload.count
    }
    else
    {
      let selectedProduct = state.products[productIndex]
      cart.push({
        id:selectedProduct.id,
        title:selectedProduct.title,
        price:selectedProduct.price,
        stock:selectedProduct.stock,
        quantity:payload.count,
        description:selectedProduct.description,
        image:selectedProduct.thumbnail
      })
    }
    return {
      ...state,
      products:products,
      cart:cart
    }
}

const removeFromCart = (state,payload)=>{
  //find index value of products in product and cart array
    let productIndex = findArrayIndex(state.products,payload.id)
    let cartIndex = findArrayIndex(state.cart,payload.id)

  //update the stock value
  let products = structuredClone(state.products)
  let cart = structuredClone(state.cart)
  products[productIndex].stock += cart[cartIndex].quantity

  //remove item from cart
  cart.splice(cartIndex,1)

  return {
    ...state,
    products:products,
    cart:cart
  }
}

const updateQuantity = (state,payload)=>{
  let cartIndex = findArrayIndex(state.cart,payload.id)
  let cart = structuredClone(state.cart)
  //update the quantity in cart
  cart[cartIndex].quantity += payload.count

  return {
    ...state,
    cart:cart
  }
}

const resetCart = ()=>{
  return initialValue
}

export default ProductContextComponent