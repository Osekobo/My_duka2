import React from 'react'
import useGetSale from '../hooks/useGetSale'


const SalesHero = () => {
  const { saleData } = useGetSale()
  return (
    <div>
      <h3 className='text-xl font-bold bg-red-500 m-4 p-4'>
        Welcome to the sales page
      </h3>

      <div className="table-responsive m-4">
        <table className="table table-sm table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>View Sales</th>
            </tr>
          </thead>

          <tbody>
            {saleData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.created_at}</td>
                <td>{sale.updated_at}</td>
                <td>
                  <button className="btn btn-primary" type="submit">
                    View Sales
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}
export default SalesHero