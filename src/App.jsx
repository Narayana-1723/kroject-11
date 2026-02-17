import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Button click handler
  const handleAction = (type) => {
    if (type === "cart") {
      setMessage("⚠️ Please login to add items to cart.");
    } else {
      setMessage("⚠️ Please login to continue buying.");
    }

    // Hide message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="app">
      <h1 className="heading">Our Products - 2500031018</h1>

      {/* Error Message */}
      {message && <div className="error-box">{message}</div>}

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">₹ {product.price}</p>

            <button onClick={() => handleAction("cart")}>
              Add to Cart
            </button>

            <button
              className="buy-btn"
              onClick={() => handleAction("buy")}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
