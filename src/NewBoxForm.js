import React, { useState } from "react";

const initialState = {
  bgColor: "",
  width: "",
  height: ""
};

/** Form for adding boxes.
 *
 * State:
 * - formData: { bgColor, width, height }
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState(initialState);

  console.log("NewBoxForm", formData);

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bgColor">Background Color:</label>
      <input
        id="bgColor"
        name="bgColor"
        value={formData.bgColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  );
}


export default NewBoxForm;
