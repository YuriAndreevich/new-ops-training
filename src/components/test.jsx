import React from "react";
import Draggable from "react-draggable";

function test() {
  return (
    <div className='w-10 h-10'>
      <Draggable
        grid={[10, 10]}
        //   {...dragHandlers}
      >
        <div className="box text-3xl font-bold underline">
          1
        </div>
      </Draggable>
    </div>
  );
}

export default test;
