import React from "react";

function SmallProductListItems({ product }) {
  const { name, price } = product;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default SmallProductListItems;
