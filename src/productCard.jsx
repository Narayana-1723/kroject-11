function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        width="180"
        height="120"
      />
      <h4>{product.title}</h4>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductCard;