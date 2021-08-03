import React from "react";

function FormField({ name, value, placeholder, formChangeHandler }) {
  const lableTitle = name[0].toUpperCase().concat(name.slice(1)); //Capitalizes the first letter
  return (
    <div className="form-group">
      <label htmlFor={name}>{lableTitle}</label>
      <textarea
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={formChangeHandler}
        required
      />
    </div>
  );
}

export default FormField;
