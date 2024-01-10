'use client';
import FormHeader from '@/components/inventory/FormHeader';
import TextInput from '@/components/inventory/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SubmitButton from '@/components/inventory/FormInputs/SubmitButton';
import TextareaInput from '@/components/inventory/FormInputs/TextareaInput';

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
      <FormHeader title={'New Category'} url={'/app/inventory/items'} />

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
            containerClassName='sm:col-span-2'
            errorMessage={'Category Title is required'}
          />
          <TextareaInput
            containerClassName={'sm:col-span-2'}
            isRequired={true}
            label={'Category Description'}
            name={'description'}
            register={register}
            errors={errors}
            errorMessage={'Category Description is required'}
          />

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
