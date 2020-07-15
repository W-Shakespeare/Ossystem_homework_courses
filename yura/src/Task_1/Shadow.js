import React from "react";
function Shadow({ color, width, height, radius, children }) {
  let styleShadow = { boxShadow: `${width} ${height} ${radius} 2px ${color}` };

  return <div style={styleShadow}>{children}</div>;
}

export default Shadow;
