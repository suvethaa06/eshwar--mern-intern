// File: src/components/Form.js
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
      <input name="age" placeholder="Age" onChange={handleChange} value={formData.age} />
      <h1>{formData.name}</h1>
      <h1>{formData.age}</h1>
    </div>
  );
}

export default Form;