'use client';
import TextInput from '@/components/inventory/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SubmitButton from '@/components/inventory/FormInputs/SubmitButton';
import TextareaInput from '@/components/inventory/FormInputs/TextareaInput';
import { addNewData } from '@/app/lib/addNewData';
import SelectInput from '@/components/inventory/FormInputs/SelectInput';

const AddInventoryForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    await addNewData('adjustment/add', setIsSubmitting, reset, data);
  };

  return (
    <form
      className='w-full max-w-4xl mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-16 py-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput
          register={register}
          label={'Quantity of Stock to Add'}
          name={'addStockQty'}
          errors={errors}
          containerClassName='w-full'
          errorMessage={'Item Stock to be added is required'}
          placeholder={'Type the Quantity of Stock to Add'}
          type='number'
        />
        <SelectInput
          containerClassName={'w-full'}
          name={'itemId'}
          label={'Item to Add'}
          errors={errors}
          register={register}
          errorMessage={'Item to be transferred should be selected'}
          options={[
            {
              value: 'electronics',
              title: 'Electronics',
            },
            {
              value: 'groceries',
              title: 'Groceries',
            },
            {
              value: 'furniture',
              title: 'Furniture',
            },
          ]}
          defaultText={'Select Item to add'}
        />

        <SelectInput
          containerClassName={'w-full'}
          name={'receivingWarehouseId'}
          label={'Receiving Warehouse'}
          errors={errors}
          register={register}
          errorMessage={'Item Category should be selected'}
          options={[
            {
              value: 'warehouse_a',
              title: 'Warehouse A',
            },
            {
              value: 'warehouse_b',
              title: 'Warehouse B',
            },
            {
              value: 'warehouse_c',
              title: 'Warehouse C',
            },
          ]}
          defaultText={'Select Warehouse to receive the stock'}
        />

        <TextareaInput
          containerClassName={'sm:col-span-2'}
          isRequired={false}
          label={'Adjustments Notes'}
          name={'notes'}
          register={register}
          errors={errors}
          errorMessage={'Adjustments Notes is required'}
        />

        <div className='md:col-span-2'>
          <SubmitButton isSubmitting={isSubmitting} label={'Adjustment'} />
        </div>
      </div>
    </form>
  );
};

export default AddInventoryForm;
