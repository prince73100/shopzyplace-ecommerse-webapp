import React, { useEffect, useState } from 'react'
import './newcollection.css'
import axios from 'axios'
import Item from '../items/Item'
function Newcollection() {

    const [new_collections, setNew_collection] = useState([])

    const getNewcollection = async () => {
        const result = await axios.get('http://localhost:8080/newcollections')
       setNew_collection(result.data.proNewCollection)
    }
    useEffect(() => {
        getNewcollection()
    }, [])
    return (
        <div className='newcollection'>
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collection">
                {new_collections.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Newcollection
