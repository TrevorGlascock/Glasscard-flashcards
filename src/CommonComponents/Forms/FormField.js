import React from "react";

function FormField({ inputType, name, value, placeholder, formChangeHandler }) {
  const lableTitle = name[0].toUpperCase().concat(name.slice(1)); //Capitalizes the first letter

  return (
    //There has to be a DRYer way to do this
    <div className="form-group">
      <label htmlFor={name}>{lableTitle}</label>
      {inputType === "textarea" ? (
        <textarea
          className="form-control"
          id={name}
          name={name}
          rows="4"
          placeholder={placeholder}
          value={value}
          onChange={formChangeHandler}
          required
        />
      ) : (
        <input
          className="form-control"
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={formChangeHandler}
          required
        />
      )}
    </div>
  );
}

export default FormField;
