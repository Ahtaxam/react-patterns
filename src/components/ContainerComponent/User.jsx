import React from "react";

function User({ data }) {
  const { title, body } = data;
  return (
    <div>
      <p>Title: {title} </p>
      <p>Body: {body} </p>
    </div>
  );
}

export default User;
