import React, { useEffect, useState } from "react";

function DataSourceLoader({ getDataFunc, resourceName, children }) {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      let data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);
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

export default DataSourceLoader;
