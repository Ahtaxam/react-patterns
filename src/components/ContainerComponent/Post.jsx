import React, { useEffect, useState } from "react";

function Post({ id, children }) {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      let data = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + id
      );
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

export default Post;
