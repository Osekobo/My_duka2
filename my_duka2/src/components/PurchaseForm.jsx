import React from 'react'

const PurchaseForm = ({ purchase, handleChange, handleSubmit }) => {
  return (
<div className="container mt-4">
  <form onSubmit={handleSubmit}>

    <div className="row g-3">

      <div className="col-md-6">
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={purchase.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
      </div>

      <div className="col-md-6">
        <input
          type="number"
          name="product_id"
          className="form-control"
          value={purchase.product_id}
          onChange={handleChange}
          placeholder="Product ID"
        />
      </div>

    </div>

    <button className="btn btn-success mt-3" type="submit">
      Add Purchase
    </button>

  </form>
</div>

  )
}
export default PurchaseForm