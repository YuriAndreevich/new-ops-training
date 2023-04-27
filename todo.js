//https://stackoverflow.com/questions/68421040/local-storage-using-redux-toolkit


//get position
const [deltaPosition, setdeltaPosition] = useState({ x: 0, y: 0 });
const handleDrag = (e, ui) => {
  const { x, y } = deltaPosition;
  
    setdeltaPosition( {
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    
  });
};

onDrag={handleDrag}
{/* {deltaPosition.x} */}

        {/* <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div> */}
