import React from 'react'

function SmallPersonListItems({person}) {
    const {name, age} = person;
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
  )
}

export default SmallPersonListItems