import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';


function BoxList() {
  const [boxes, setBoxes] = useState([]);
  // [{bgColor: red, width: 100, height: 100 id:uuid},...]

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function deleteBox(evt) {
    const id = evt.target.parentElement.getAttribute('id');
    setBoxes(boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">

      < NewBoxForm addBox={addBox} />
      {boxes.map(box => <Box
        bgColor={box.bgColor}
        width={box.width}
        height={box.height}
        id={box.id}
        deleteBox={deleteBox} />)}

    </div>
  );
}

export default BoxList;