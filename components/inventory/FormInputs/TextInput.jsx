const TextInput = ({
  name,
  label,
  type = 'text',
  isRequired = true,
  title,
  containerClassName = 'w-full',
  register,
  errors,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className={containerClassName}>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
        autoComplete='given-name'
        placeholder={placeholder}
        {...register(name, { required: isRequired })}
      />
      {errors[name] && (
        <span className='text-sm text-red-600'>{errorMessage}</span>
      )}
    </div>
  );
};

export default TextInput;
