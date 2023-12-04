import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
// import Pagination from "../Comman/Pagination";

const ProductsList = () => {
  const [page,setPage] = useState(1);
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const { data, error, isLoading } = useData(
    "/products",
    {
      params: {
        category,
        perPage: 10,
        page,
      },
    },
    [category, page]
  );
  useEffect(() => {
    setPage(1)
  },[category])
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // const handlePageChange = (page) => {
  //   const currentParams = Object.fromEntries([...search]);
  //   setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
  // };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 1 && !isLoading && data && page<data.totalPages) {
        setPage(prev => prev+1);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll" ,handleScroll)
  }, [data, isLoading]);

  return (
    <section className="products-list-section">
      <header className="align_center products-list-header">
        <h2>Products</h2>
        <select name="sort" className="products-sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price High TO Low</option>
          <option value="price assc">Price Low To High</option>
          <option value="rate desc">Rate High TO Low</option>
          <option value="rate assc">Rate Low To High</option>
        </select>
      </header>

      <div className="products-list">
        {error && <em className="form-error">{error}</em>}

        {data?.products &&
          data.products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              rating={product.reviews.rate}
              ratingCounts={product.reviews.counts}
              stock={product.stock}
            />
          ))}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
      </div>
      {/* {data && (
        <Pagination
          totalPosts={data.totalProducts}
          postsPerPage={8}
          onClick={handlePageChange}
          currentPage={page}
        />
      )} */}
    </section>
  );
};

export default ProductsList;
