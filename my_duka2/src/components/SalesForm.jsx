import React from 'react'

const SalesForm = ({ sales, handleChange, handleSubmit }) => {
  return (
 <div className="container mt-4">
  <form onSubmit={handleSubmit}>

    <div className="row g-3">

      <div className="col-md-6">
        <input
          type="number"
          name="id"
          className="form-control"
          value={sales.id}
          onChange={handleChange}
          placeholder="Sale ID"
        />
      </div>

      <div className="col-md-6">
        <input
          type="datetime-local"
          name="created_at"
          className="form-control"
          value={sales.created_at}
          onChange={handleChange}
        />
      </div>

    </div>

    <button className="btn btn-primary mt-3" type="submit">
      Add Sale
    </button>

  </form>
</div>

  )
}
export default SalesForm