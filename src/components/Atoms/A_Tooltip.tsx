import React, { forwardRef } from "react";

const A_Tooltip = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="tooltip">
      🛠️Under development🛠️
    </div>
  );
});

export default React.memo(A_Tooltip);
