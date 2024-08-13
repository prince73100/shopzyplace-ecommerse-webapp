import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../contextApi/ShopContext'
import dropdown_icon from '../component/assets/dropdown_icon.png'
import Item from '../component/items/Item'

function ShopCategory({ banner, category }) {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-banner' src={banner} alt="" />
      <div className="shopcategory-indexshort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategory-short">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-product">
        {all_product.map((item)=> category === item.category ?  < Item  key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> :<></> )}
      </div>
      <div className="shopcategory-loadmore">
        Explor More
      </div>
    </div>
  )
}

export default ShopCategory
