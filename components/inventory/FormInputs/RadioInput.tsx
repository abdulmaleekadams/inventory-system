import React from 'react';

const RadioInput = ({
  name,
  options = [],
  register,
  isRequired = true,
  errors,
  errorMessage,
  containerClassName,
  title,
}) => {
  return (
    <div
      className={`flex flex-col ${
        errors[name] ? 'justify-between' : 'gap-y-2'
      } ${containerClassName}`}
    >
      <p className='block mb-2 text-sm font-medium text-gray-900'>{title}</p>
      <div className='flex items-center gap-x-5'>
        {options.map(({ label, value }, idx) => (
          <div key={value}>
            <input
              id={`${name}${idx}`}
              type='radio'
              value={value}
              name={name}
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer '
              {...register(name, { required: isRequired })}
            />
            <label
              htmlFor={`${name}${idx}`}
              className='ms-2 text-sm font-medium text-gray-900 cursor-pointer'
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      {errors[name] && (
        <span className='text-sm text-red-600'>{errorMessage}</span>
      )}
    </div>
  );
};

export default RadioInput;
