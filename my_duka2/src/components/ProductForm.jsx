import React from 'react'

const ProductForm = ({ product, handleChange, handleSubmit }) => {
  return (
 <div className="container mt-4">
  <form onSubmit={handleSubmit}>

    <div className="row g-3">

      <div className="col-md-4">
        <input
          type="text"
          name="name"
          className="form-control"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>

      <div className="col-md-4">
        <input
          type="number"
          name="buying_price"
          className="form-control"
          value={product.buying_price}
          onChange={handleChange}
          placeholder="Buying Price"
        />
      </div>

      <div className="col-md-4">
        <input
          type="number"
          name="selling_price"
          className="form-control"
          value={product.selling_price}
          onChange={handleChange}
          placeholder="Selling Price"
        />
      </div>

      <div className="col-md-4">
        <input
          type="text"
          name="model"
          className="form-control"
          value={product.model}
          onChange={handleChange}
          placeholder="Model"
        />
      </div>

      <div className="col-md-4">
        <input
          type="number"
          name="year"
          className="form-control"
          value={product.year}
          onChange={handleChange}
          placeholder="Year"
        />
      </div>

      <div className="col-md-4">
        <input
          type="text"
          name="condition"
          className="form-control"
          value={product.condition}
          onChange={handleChange}
          placeholder="Condition"
        />
      </div>

      <div className="col-md-4">
        <input
          type="text"
          name="fuel"
          className="form-control"
          value={product.fuel}
          onChange={handleChange}
          placeholder="Fuel Type"
        />
      </div>

    </div>

    <button className="btn btn-primary mt-3" type="submit">
      Add Product
    </button>

  </form>
</div>

  )
}
export default ProductForm