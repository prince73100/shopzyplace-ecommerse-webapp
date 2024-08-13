import React from 'react'
import './Newslatter.css'
function Newslatter() {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive offer on your Email </h1>
      <p>Subscribe to our newletter  and stay update</p>
      <div>
        <input type="email" placeholder='Your email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newslatter
