import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../contextApi/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrums from '../component/Breadcrums/Breadcrums';
import Producdisplay from '../component/Productdisplay/Producdisplay';
import Descriptionbox from '../component/Descriptionbox/Descriptionbox';
import RelativeProduct from '../component/RelativeProduct/RelativeProduct';
function Product() {
   const {all_product} = useContext(ShopContext)
   const {productId} = useParams()
   const  product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div >
      <Breadcrums product={product} />
      <Producdisplay product={product} />
      <Descriptionbox/>
      <RelativeProduct />
    </div>
  )
}

export default Product
