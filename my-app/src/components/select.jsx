import PropTypes from 'prop-types';

const Select = ({ name, id, options, selectedOption = '', label ,  onChange }) => {
  return (
  <div className=''>
    <label htmlFor={id} className='text-lg  font-medium text-gray-700 '>{label}</label>
      <select
      name={name}
      id={id}
      className="bg-slate-100 border-2 border-white hover:border-blue-600 flex-shrink-0 basis-60 md:basis-0 p-3 outline-none rounded md:w-full w-fit"
      onChange={onChange}
     
    >
      <option value="" disabled>
        {selectedOption || '-- Select an option --'} 
      </option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label : PropTypes.string,
  selectedOption: PropTypes.string,  
  onChange: PropTypes.func.isRequired, 
};

export default Select;

