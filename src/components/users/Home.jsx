import React,{useContext} from 'react'
import {ProductContext} from '../../context/ProductContextComponent'
import ProductsCard from '../common/ProductsCard'
function Home() {
  let {state} = useContext(ProductContext)

  return <>
    <div className='homeWrapper'>
      <div className='productsCardWrapper'>
        {
          state.products.map((e)=>{
            return <ProductsCard product={e} key={e.id}/>
          })
        }
      </div>
      
    </div>
  </>
}

export default Home