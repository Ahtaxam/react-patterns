import React, { useEffect, useState } from "react";

function ResourceLoader({ resourceUrl, resourceName, children }) {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com"+resourceUrl);
      data = await data.json();
      setState(data);
    })();
  }, [resourceUrl]);
  return (
    <div>
      {state
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { [resourceName]: state });
            } else {
              return child;
            }
          })
        : "Loading..."}
    </div>
  );
}

export default ResourceLoader;
