import React from 'react';

const SelectInput = ({
  label,
  name,
  register,
  errors,
  errorMessage,
  containerClassName,
    options,
  defaultText
}) => {
  return (
    <div className={containerClassName}>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label}
      </label>

      <select
        className='bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg focus:ring-primary-600
            focus:border-primary-600 block w-full p-2.5 '
        {...register(name, { required: true })}
      >
              <option value=''>{ defaultText }</option>
        {options.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span className='text-sm text-red-600'>{errorMessage}</span>
      )}
    </div>
  );
};

export default SelectInput;
