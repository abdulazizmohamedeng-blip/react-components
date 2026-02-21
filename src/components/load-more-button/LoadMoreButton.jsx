import { useEffect, useState } from "react";
import "./style.css";
export default function LoadMoreButton() {
  let [loading, setLoading] = useState(true);
  let [products, setProducts] = useState([]);
  let [skip, setSkip] = useState(0);
  useEffect(
    function () {
      async function getProductData() {
        let res = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${skip}`,
        );
        let data = await res.json();
        setProducts((prev) => [...prev, ...data.products]);
        setLoading(false);
        return data;
      }
      getProductData();
    },
    [skip],
  );
  function handleMore() {
    setSkip((prev) => prev + 10);
  }
  if (loading) {
    return <p className="loading">Data is Loading....</p>;
  }
  return (
    <div className="products-wrapper">
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="photos">
              <img src={product.images[0]} alt="" />
            </div>
            <div className="details">
              <h3 className="title"> {product.title}</h3>
              <p className="description">{product.description}</p>
              <div className="price-buy">
                <h4>{product.price}$</h4>
                <button className="buy-btn">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="load-more" onClick={() => handleMore()}>
        Load More
      </button>
    </div>
  );
}
