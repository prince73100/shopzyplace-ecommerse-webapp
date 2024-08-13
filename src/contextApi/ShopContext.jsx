import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext(null)

const getDefaultcart = () => {
    let cart = {}
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const SopContextProvider = ({ children }) => {
    const [getItem, setgetItem] = useState(getDefaultcart())
    const [all_product, setAll_product] = useState([])

    const getallproduct = async () => {
        const result = await axios.get('http://localhost:8080/gatAllProduct')
        setAll_product(result.data.allProduct)

        if(localStorage.getItem('token')){
            let data = JSON.stringify({})
           const result =  await  axios.post('http://localhost:8080/getcartitem',data,{
            headers:{
                Accept:'application/form-data',
                'token':`${localStorage.getItem('token')}`,
                'Content-Type':'application/json'
            }
           })
           setgetItem(result.data)
        }
    }

    useEffect(() => {
        getallproduct()
    }, [])

    const addtocart = async (itemId) => {
        setgetItem((prv) => ({ ...prv, [itemId]: prv[itemId] + 1 }))
        if(localStorage.getItem('token')){
            const data = JSON.stringify({"itemid":itemId})
            const resp = await axios.post("http://localhost:8080/addtocart",data,{
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type':'application/json'
                }
            })
            console.log("gfjxtfgjxtgj  "+resp);
        }
    }
    const removetoCart = async(itemId) => {
        setgetItem((prv) => ({ ...prv, [itemId]: prv[itemId] - 1 }))
        if(localStorage.getItem('token')){
            const data = JSON.stringify({"itemid":itemId})
            const resp = await axios.post("http://localhost:8080/removetocart",data,{
                headers:{
                    Accept:'application/form-data',
                    'token':`${localStorage.getItem('token')}`,
                    'Content-Type':'application/json'
                }
            })
            console.log(resp);
        }
    }

    const counttotalItem = () => {
        let countcart = 0;
        for (const item in getItem) {
            if (getItem[item] > 0) {
                countcart += getItem[item]
            }
        }
        return countcart
    }

    const countTotalAmount = () => {
        let totalAmount = 0;
        for (const item in getItem) {
            if (getItem[item] > 0) {
                let iteminfo = all_product.find((e) => e.id === Number(item))
                totalAmount += iteminfo.new_price * getItem[item]
            }
        }
        return totalAmount;
    }

    const contextvalue = { all_product, getItem, addtocart, removetoCart, countTotalAmount, counttotalItem }

    return <ShopContext.Provider value={contextvalue} >
        {children}
    </ShopContext.Provider>

}


export default SopContextProvider;