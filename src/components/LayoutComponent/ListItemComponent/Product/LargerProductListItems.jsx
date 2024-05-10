import React from 'react'

function LargerProductListItems({product}) {
  const {name, price, description, rating} = product;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Avg Rating: {rating}</p>
    </div>
  )
}

export default LargerProductListItems