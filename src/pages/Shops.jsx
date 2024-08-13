import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offers from '../component/offers/Offers'
import Newcollection from '../component/newcollection/Newcollection'
import Newslatter from '../component/Newslatter/Newslatter'
function Shops() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newslatter/>
    </div>
  )
}

export default Shops
