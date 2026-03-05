import React from 'react'

const Footer = ({ x, y }) => {
  return (
    <div>
      <p>This is my footer component</p>
      <h1>{y}</h1>
      <h4>{x.name}</h4>
      <h4>{x.email}</h4>
    </div>
  )
}
export default Footer