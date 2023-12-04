import React from 'react'
import "./FeaturedProducts.css"
import ProductCard from '../Products/ProductCard'
const FeaturedProducts = () => {
  return (
    <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="align_center featured-products-list">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </section>
  )
}

export default FeaturedProducts