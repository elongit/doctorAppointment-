import PropTypes from "prop-types";
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
        
        className={`rounded p-3 bg-slate-100 border-white hover:border-primary-color focus:outline-none focus:ring-4 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-primary-color focus:ring-priborder-primary-color"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm font-semibold mt-1">{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
  value : PropTypes.string,
  placeholder : PropTypes.string,
  onChange : PropTypes.func,
  error : PropTypes.string
}

export default Input;
