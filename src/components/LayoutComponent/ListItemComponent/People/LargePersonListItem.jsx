import React from "react";

function LargePersonListItem({ person }) {
  const { name, age, hairColor, hobbies } = person;
  return (
    <div className="mb-4">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>hairColor: {hairColor}</p>
      <h2>Hobbies</h2>
      {hobbies.map((hobby) => (
        <span className="m-1">{hobby}</span>
      ))}
    </div>
  );
}

export default LargePersonListItem;
