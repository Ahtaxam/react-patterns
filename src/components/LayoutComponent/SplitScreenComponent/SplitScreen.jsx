import React from "react";

function SplitScreen({ children, leftWeight = 1, rightWeight = 1 }) {
  const [left, right] = children;
  return (
    <div className="flex">
      <div className={`flex-${leftWeight}`}>{left}</div>
      <div className={`flex-${rightWeight}`}>{right}</div>
    </div>
  );
}

export default SplitScreen;
