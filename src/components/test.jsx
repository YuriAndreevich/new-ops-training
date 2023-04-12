import React, { useState } from "react";
import Draggable from "react-draggable";

function test() {
  const [deltaPosition, setdeltaPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    
      setdeltaPosition( {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      
    });
  };
  // const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
  return (
    <div className="w-10 h-10">
      <Draggable
        grid={[10, 10]}
        //   {...dragHandlers}
        onDrag={handleDrag}
        // defaultPosition={{x: 25, y: 25}}
      >
        <div className="box text-3xl font-bold underline">1
        {/* <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div> */}
        </div>
      </Draggable>
    </div>
  );
}

export default test;
