import React from 'react'
import OneProduct from './OneProduct'

const Products = () => {

    const name = "Product Name";
    const description = "New product description that we got from Product component using props."


  return (
    <div className='all-products'>
        <OneProduct prodName={name} prodDesc={description}></OneProduct>
        <OneProduct prodName={name} prodDesc={description}></OneProduct>
        <OneProduct prodName={name} prodDesc={description}></OneProduct>

    </div>
  )
}

export default Products