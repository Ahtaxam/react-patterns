import React, { useEffect, useState } from "react";

function Posts({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setData(data);
    })();
  }, []);
  return (
    <div>
      {data
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { data });
            } else {
              return child;
            }
          })
        : "Loading..."}
    </div>
  );
}

export default Posts;
