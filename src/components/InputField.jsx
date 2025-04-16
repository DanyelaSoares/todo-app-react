import React from 'react';

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="w-full">
      <label className="block text-gray-700 text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
