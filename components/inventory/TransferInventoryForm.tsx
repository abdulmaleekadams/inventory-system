'use client';
import TextInput from '@/components/inventory/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SubmitButton from '@/components/inventory/FormInputs/SubmitButton';
import TextareaInput from '@/components/inventory/FormInputs/TextareaInput';
import { addNewData } from '@/app/lib/addNewData';
import SelectInput from '@/components/inventory/FormInputs/SelectInput';

const TransferInventoryForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    await addNewData('adjustment/transfer', setIsSubmitting, reset, data);
  };

  return (
    <form
      className='w-full max-w-4xl mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-16 py-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput
          register={register}
          label={'Quantity of Stock to Transfer'}
          name={'transferStockQty'}
          errors={errors}
          containerClassName='w-full'
          errorMessage={'Item Stock to be transferred is required'}
          placeholder={'Type the Amount of Stock to Transfer'}
        />
        <SelectInput
          containerClassName={'w-full'}
          name={'itemId'}
          label={'Item to Transfer'}
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
          defaultText={'Select Item to transfer'}
        />
        <SelectInput
          containerClassName={'w-full'}
          name={'dispatchWarehouseId'}
          label={'Dispatch Warehouse'}
          errors={errors}
          register={register}
          errorMessage={'Item Category should be selected'}
          options={[
            {
              value: 'electronics',
              title: 'Warehouse A',
            },
            {
              value: 'groceries',
              title: 'Warehouse B',
            },
            {
              value: 'furniture',
              title: 'Warehouse C',
            },
          ]}
          defaultText={'Select Warhouse to transfer from'}
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
              value: 'electronics',
              title: 'Warehouse A',
            },
            {
              value: 'groceries',
              title: 'Warehouse B',
            },
            {
              value: 'furniture',
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

export default TransferInventoryForm;
