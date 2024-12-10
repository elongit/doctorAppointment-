const Input = ({
  label,
  type = "text",
  name,
  id,
  value,
  placeholder,
  onChange,
  error,
  
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-lg  font-medium text-gray-700">
          {label}
          {error && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        
        className={`rounded p-2 bg-slate-100 border-white hover:border-blue-500 focus:outline-none focus:ring-4 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-blue-500 focus:ring-blue-500"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm font-semibold mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
