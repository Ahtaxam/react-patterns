import React from "react";

// it receive three props items(data) we want to render , resourcename (it mean props name to that component),
// itemComponent (Actual Component you want to render)
function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
}

export default RegularList;
