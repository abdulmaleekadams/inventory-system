'use client';
import FormHeader from '@/components/inventory/FormHeader';
import TextInput from '@/components/inventory/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SubmitButton from '@/components/inventory/FormInputs/SubmitButton';
import TextareaInput from '@/components/inventory/FormInputs/TextareaInput';
import { addNewData } from '@/app/lib/addNewData';
import RadioInput from '@/components/inventory/FormInputs/RadioInput';

const NewWarehousePage = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    await addNewData('warehouse', setIsSubmitting, reset, data);
  };

  return (
    <div>
      {/* Header */}
      <FormHeader title={'New Warehouse'} url={'/app/inventory/items'} />

      {/* Form */}
      <form
        action='#'
        className='w-full max-w-4xl mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-16 py-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput
            register={register}
            label={'Warehouse Title'}
            name={'title'}
            errors={errors}
            containerClassName='sm:col-span-2'
            errorMessage={'Warehouse Title is required'}
            placeholder={'Type the Warehouse title'}
          />
          <TextInput
            register={register}
            label={'Warehouse Location'}
            name={'location'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Warehouse Location is required'}
            placeholder={'Type the Warehouse location'}
            type='address'
          />
          <RadioInput
            name={'type'}
            options={[
              { label: 'Main', value: 'main' },
              { label: 'Branch', value: 'branch' },
            ]}
            register={register}
            errors={errors}
            errorMessage={'Warehouse Type should be selected'}
            title={'Warehouse Tmype'}
            containerClassName={'sm:col-span-1'}
          />
          <TextareaInput
            containerClassName={'sm:col-span-2'}
            isRequired={true}
            label={'Warehouse Description'}
            name={'description'}
            register={register}
            errors={errors}
            errorMessage={'Warehouse Description is required'}
          />

          <div className='md:col-span-2'>
            <SubmitButton
              isSubmitting={isSubmitting}
              label={'Save Warehouse'}
            />
          </div>
        </div>
      </form>

      {/*  */}
    </div>
  );
};

export default NewWarehousePage;
