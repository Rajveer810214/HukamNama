// Canvas.tsx

import React from "react";

interface CanvasProps {
  canvasId: string;
  children?: React.ReactNode;
}

const Canvas: React.FC<CanvasProps> = ({ canvasId, children }) => {
  return (
    <div id={canvasId}>
      {children}
    </div>
  );
};

export default Canvas;
