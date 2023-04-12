
import Draggable from "react-draggable";
import React, { useState } from "react";


function dashboard() {

  const [izv, setIzv] = useState([

  ])
 const [activeDrags, setactiveDrags] = useState(0)
  const startMove = () =>{}
  const endMove = () =>{}
     const onStart = () => {
      setactiveDrags(activeDrags + 1)
    };
  
  const  onStop = () => {
      setactiveDrags(activeDrags - 1)
      
    };
    const dragHandlers = {onStart: onStart, onStop: onStop};

  //  const onDrop = (e) => {
  //     setactiveDrags(activeDrags - 1)
  //     if (e.target.classList.contains("drop-target")) {
  //       alert("Dropped!");
  //       e.target.classList.remove('hovered');
  //     }
  //   };
  return (
    <div className='flex'>
      <div ><Draggable onStart={() => false} 
      {...dragHandlers}
      >1</Draggable></div>
      <div>2</div>
      <div>3</div>
    </div>
  );
}

export default dashboard;
