import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: "https://media.gucci.com/style/DarkGray_Center_0_0_600x314/1538553607/552089_A9L00_9522_001_100_0000_Light.jpg" },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: "https://cdn.tgdd.vn/Products/Images/44/231246/apple-macbook-air-2020-mgnd3saa-600x600.jpg" }
]

const Products = props => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main >
    )
}


export default Products
