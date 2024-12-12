import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products, deleteProduct }) => {
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = () => {
    if (!deleteId) {
      alert("Please enter a valid product ID to delete.");
      return;
    }
    const productExists = products.some((product) => product.id === parseInt(deleteId));
    if (!productExists) {
      alert("Product ID not found.");
      return;
    }
    deleteProduct(parseInt(deleteId));
    setDeleteId("");
  };

  return (
    <div>
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Product Section */}
      <div className="delete-product-container">
        <h3>Delete Product</h3>
        <input
          type="number"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          placeholder="Enter Product ID"
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductList;
