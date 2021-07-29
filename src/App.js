import React, { useEffect, useState } from 'react'

import { Cart, Navbar, Products } from './components'

import { commerce } from './lib/commerce'


const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddtoCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)

        setCart(item.cart)
    }

    useEffect(() => {
        fetchCart()
        fetchProducts()
    }, [])

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            {/* <Products products={products} onAddToCart={handleAddtoCart} /> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App
