import React from "react";
import "./ProductCard.css";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({id,image,price,title,rating,ratingCounts, stock}) => {
  return (
    <article className="product-card">
      <div className="product-image">
        <NavLink to={`/products/${id}`}>
          <img src={`http://localhost:5000/products/${image}`} alt="product image" />
        </NavLink>
      </div>
      <div className="product-details">
        <h3 className="product-price">${price}</h3>
        <p className="product-title">{title}</p>
        <footer className="align_center product-info-footer">
          <div className="align_center">
            <p className="align_center product-rating">
              <img src={star} alt="star" />
              {rating}
            </p>
            <p className="product-review-count">{ratingCounts}</p>
          </div>
          {stock > 0 && <button className="add-to-cart">
            <img src={basket} alt="basket button" />
          </button>}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
