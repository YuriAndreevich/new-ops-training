import React, { useState } from "react";
import Draggable from "react-draggable";

function test() {
  return (
    <div className="w-[calc(100vw-200px)] p-10 mx-auto   bg-[#f2f2f2] rounded-xl  flex justify-between">
      <Draggable
        grid={[10, 10]}
      // defaultPosition={{x: 25, y: 25}}
      >
        <div className="box text-3xl font-bold underline">1</div>
      </Draggable>
      <Draggable
        grid={[10, 10]}
      // defaultPosition={{x: 25, y: 25}}
      >
        <div className="box text-3xl font-bold underline">2</div>
      </Draggable>
      <Draggable
        grid={[10, 10]}
      // defaultPosition={{x: 25, y: 25}}
      >
        <div className="box text-3xl font-bold underline">3</div>
      </Draggable>
      <div className="box text-3xl font-bold underline">X</div>

    </div>
  );
}

export default test;
