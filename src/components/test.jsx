import React from "react";
import Draggable from "react-draggable";

function test() {
  return (
    <div>
      <Draggable
        grid={[10, 10]}
        //   {...dragHandlers}
      >
        <div className="box text-3xl font-bold underline">
          I snap to a 50 x 50 grid
        </div>
      </Draggable>
    </div>
  );
}

export default test;
