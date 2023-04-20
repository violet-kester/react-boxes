function Box({ bgColor, width, height, id }) {

  const boxStyles = {
    "backgroundColor": bgColor,
    "width": width,
    "height": height
  };

  return (
    <div className="Box" style={boxStyles} id={id}></div>
  );
}

export default Box;