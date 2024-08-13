import React, { useEffect, useState } from 'react'
import './popular.css'
import axios from 'axios'
import Item from '../items/Item'

function Popular() {
  const [popularitem, setPopularItem] = useState([])

  const handlepopularWomenItem = async () => {
    const result = await axios.get('http://localhost:8080/popularwomenitem')
    setPopularItem(result.data.popularItem)
  }

  useEffect(() => {
    handlepopularWomenItem()
  }, [])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-itrm">
        {popularitem.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
