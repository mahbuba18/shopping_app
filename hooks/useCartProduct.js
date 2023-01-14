import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "../componants/utils/constants"


function useCartproduct(products, carts) {
    const [cartProducts, setCartProducts]= useState([])
    const getCartProducts =(products, carts) => {
      carts.forEach(element => {
        products = products.filter(item=> item._id == element.productId);
     });
     return products;
    }
    const result = getCartProducts(products, carts)
    setCartProducts(result)


    return [cartProducts, setCartProducts]
}

export default useCartproduct