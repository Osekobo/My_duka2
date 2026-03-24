import React from 'react'

const ProductForm = ({ product, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" className="border p-2 rounded" value={product.name} onChange={handleChange} placeholder='name' />
        <input type="number" name="buying_price" className="border p-2 rounded" value={product.buying_price} onChange={handleChange} placeholder='buying price' />
        <input type="number" name="selling_price" className="border p-2 rounded" value={product.selling_price} onChange={handleChange} placeholder='selling price' />
        <input type="text" name="model" className="border p-2 rounded" value={product.model} onChange={handleChange} placeholder='model' />
        <input type="number" name="year" className="border p-2 rounded" value={product.year} onChange={handleChange} placeholder='Year' />
        <input type="text" name="condition" className="border p-2 rounded" value={product.condition} onChange={handleChange} placeholder='Condition' />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}
export default ProductForm