import React from "react";

function InputField({ type, name, placeholder, formik }) {
  return (
    <div className={name === "firstName" || name === "lastName" ? "w-1/2" : ""}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
          formik.touched[name] && formik.errors[name]
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:ring-green-300"
        }`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm">{formik.errors[name]}</p>
      )}
    </div>
  );
}

export default InputField;
