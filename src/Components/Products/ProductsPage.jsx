import React from 'react'
import "./ProductsPage.css"
import ProductsSidebar from './ProductsSidebar'
import ProductsList from './ProductsList'
const ProductsPage = () => {
  return (
    <section className="products-page">
        <ProductsSidebar/>
        <ProductsList/>
    </section>
  )
}

export default ProductsPage