'use client';
import FormHeader from '@/components/inventory/FormHeader';
import TextInput from '@/components/inventory/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SubmitButton from '@/components/inventory/FormInputs/SubmitButton';

const NewCategoryPage = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      console.log(data);
      reset();
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      {/* Header */}
      <FormHeader title={'New Category'} url={'#'} />

      {/* Form */}
      <form
        action='#'
        className='w-full max-w-4xl mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-16 py-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput
            register={register}
            label={'Category Title'}
            name={'category'}
            errors={errors}
          />
          <div className='w-full'>
            <label
              htmlFor='brand'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Brand
            </label>
            <input
              type='text'
              name='brand'
              id='brand'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
              placeholder='Product brand'
            />
          </div>

          <div className='md:col-span-2'>
            <SubmitButton isSubmitting={isSubmitting} label={'Save Category'} />
          </div>
        </div>
      </form>

      {/*  */}
    </div>
  );
};

export default NewCategoryPage;
