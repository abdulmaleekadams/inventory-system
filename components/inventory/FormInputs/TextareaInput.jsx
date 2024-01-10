const TextareaInput = ({ name,label, register, isRequired, containerClassName, errors, errorMessage }) => {
  return (
    <div className={containerClassName}>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <textarea
          name={name}
          id={name}
          rows={3}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  shadow-sm'
          {...register(name, { required: isRequired })}
        ></textarea>
      </div>
      {errors[name] && (
        <span className='text-sm text-red-600'>
          { errorMessage }
        </span>
      )}
    </div>
  );
};

export default TextareaInput;
