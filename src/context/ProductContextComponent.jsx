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
        case Actions.ADD_TO_CART:break;
    }
}

function ProductContextComponent({children}) {
  let [state,dispatch] = useReducer(reducer,initialValue)
return <ProductContext.Provider value={{state,dispatch,Actions}}>
    {children}
  </ProductContext.Provider>
}

export default ProductContextComponent