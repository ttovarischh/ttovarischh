import React, { forwardRef } from "react";

// Tooltip component using forwardRef
const A_Tooltip = forwardRef<HTMLDivElement>((props, ref) => {
  console.log("A_Tooltip rendered"); // Log when the component renders
  return (
    <div ref={ref} className="tooltip">
      🛠️Under development🛠️
    </div>
  );
});

// Exporting the component wrapped in React.memo
export default React.memo(A_Tooltip);
