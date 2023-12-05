import React, { useState } from "react";

import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import Loader from "./../Comman/Loader";

const SingleProductPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const { data: product, error, isLoading } = useData(`/products/${id}`);
    return (
        <section className='align_center single-product'>
            {error && <em className='form-error'>{error}</em>}
            {isLoading && <Loader />}
            {product && (
                <>
                    <div className='align_center'>
                        <div className='single-product-thumbnails'>
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={`http://localhost:5000/products/${image}`}
                                    alt={product.title}
                                    className={
                                        selectedImage === index
                                            ? "selected-image"
                                            : ""
                                    }
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>

                        <img
                            src={`http://localhost:5000/products/${product.images[selectedImage]}`}
                            alt={product.title}
                            className='single-product-display'
                        />
                    </div>

                    <div className='single-product-details'>
                        <h1 className='single-product-title'>
                            {product.title}
                        </h1>
                        <p className='single-product-description'>
                            {product.description}
                        </p>
                        <p className='single-product-price'>
                            ${product.price.toFixed(2)}
                        </p>

                        <h2 className='quantity-title'>Quantity:</h2>
                        <div className='align_center quantity-input'>
                            <QuantityInput
                                quantity={quantity}
                                setQuantity={setQuantity}
                                stock={product.stock}
                            />
                        </div>

                        <button className='search-button add-cart'>
                            Add to Cart
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default SingleProductPage;
