/**
 *
 *
 */

function Box({ bgColor, width, height, id, deleteBox }) {

  const boxStyles = {
    "backgroundColor": bgColor,
    "width": `${width}px`,
    "height": `${height}px`
  };

  return (
    <div className="Box" id={id}>
      <div className="Box-styled" style={boxStyles} ></div>
      <button className="Box-delete-btn" onClick={deleteBox}>X</button>
    </div>
  );
}

export default Box;