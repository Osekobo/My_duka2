import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsTable = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Products</h2>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
            <th>Model</th>
            <th>Year</th>
            <th>Condition</th>
            <th>Fuel</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.buying_price}</td>
              <td>{product.selling_price}</td>
              <td>{product.model}</td>
              <td>{product.year}</td>
              <td>{product.condition}</td>
              <td>{product.fuel}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ProductsTable;