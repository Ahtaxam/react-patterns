import React from "react";

function Users({ data }) {
  //   const { title, body } = data;
  return (
    <>
      {data.map((post) => (
        <div key={post.id} className="mb-4">
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      ))}
    </>
  );
}

export default Users;
