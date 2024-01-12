'use client';
import FormHeader from '@/components/inventory/FormHeader';
import TextInput from '@/components/inventory/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SubmitButton from '@/components/inventory/FormInputs/SubmitButton';
import TextareaInput from '@/components/inventory/FormInputs/TextareaInput';
import { addNewData } from '@/app/lib/addNewData';
import RadioInput from '@/components/inventory/FormInputs/RadioInput';
import SelectInput from '@/components/inventory/FormInputs/SelectInput';

const NewItemPage = () => {
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
      <FormHeader title={'New Item'} url={'/app/inventory/items'} />

      {/* Form */}
      <form
        action='#'
        className='w-full max-w-4xl mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-16 py-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput
            register={register}
            label={'Item Title'}
            name={'title'}
            errors={errors}
            containerClassName='w-full'
            errorMessage={'Item Title is required'}
            placeholder={'Type the Item title'}
          />
          <SelectInput
            containerClassName={'w-full'}
            name={'categoryId'}
            label={'Item Category'}
            errors={errors}
            register={register}
            errorMessage={'Item Category should be selected'}
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
            defaultText={'Select Item category'}
          />
          <TextInput
            register={register}
            label={'Item SKU'}
            name={'sku'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item SKU is required'}
            placeholder={'Type the Item SKU'}
          />
          <TextInput
            register={register}
            label={'Item Barcode'}
            name={'barcode'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Barcode is required'}
            placeholder={'Type the Item Barcode'}
            isRequired={false}
          />
          <TextInput
            register={register}
            label={'Item Quantity'}
            name={'quantity'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Quantity is required'}
            placeholder={'Type the Item Quantity'}
            isRequired={true}
            type={'number'}
          />
          <TextInput
            register={register}
            label={'Item Barcode'}
            name={'barcode'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Barcode is required'}
            placeholder={'Type the Item Barcode'}
            isRequired={false}
          />
          <SelectInput
            containerClassName={'w-full'}
            name={'unitId'}
            label={'Item Unit'}
            errors={errors}
            register={register}
            errorMessage={'Item Unit should be selected'}
            options={[
              {
                value: 'electronics',
                title: 'pcs',
              },
              {
                value: 'groceries',
                title: 'kg',
              },
            ]}
            defaultText={'Select Item Unit'}
          />

          <SelectInput
            containerClassName={'w-full'}
            name={'brandId'}
            label={'Item Brand'}
            errors={errors}
            register={register}
            errorMessage={'Item Brand should be selected'}
            options={[
              {
                value: 'hp',
                title: 'HP',
              },
              {
                value: 'mac',
                title: 'iOS',
              },
            ]}
            defaultText={'Select Item Brand'}
          />

          <TextInput
            register={register}
            label={'Item Cost Price'}
            name={'costPrice'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Cost Price is required'}
            placeholder={'Type the Item Cost Price'}
            type={'number'}
          />

          <TextInput
            register={register}
            label={'Item Selling Price'}
            name={'sellingPrice'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Selling Price is required'}
            placeholder={'Type the Item Selling Price'}
            type={'number'}
          />

          <TextInput
            register={register}
            label={'Item Re-Order Point'}
            name={'reorderPoint'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Re-Order Point is required'}
            placeholder={'Type the Item Re-Order Point'}
            type={'number'}
          />

          <SelectInput
            containerClassName={'w-full'}
            name={'warehouseId'}
            label={'Item Warehouse'}
            errors={errors}
            register={register}
            errorMessage={'Item Warehouse should be selected'}
            options={[
              {
                value: 'electronics',
                title: 'Kultura',
              },
              {
                value: 'groceries',
                title: 'Tajmal',
              },
            ]}
            defaultText={'Select Item Warehouse'}
          />

          <TextInput
            register={register}
            label={'Item Weight in kg'}
            name={'weight'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Weight is required'}
            placeholder={'Type the Item Weight in kg'}
            type={'number'}
          />

          <TextInput
            register={register}
            label={'Item Dimensions in cm'}
            name={'dimensions'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Dimensions is required'}
            placeholder={'L x W x H'}
          />

          <TextInput
            register={register}
            label={'Item Tax Rate in %'}
            name={'taxRate'}
            errors={errors}
            containerClassName='sm:col-span-1'
            errorMessage={'Item Tax Rate is required'}
            placeholder={'Item Tax Rate in %'}
            type={'number'}
          />

          <TextareaInput
            containerClassName={'sm:col-span-2'}
            isRequired={false}
            label={'Item Notes'}
            name={'notes'}
            register={register}
            errors={errors}
            errorMessage={'Item Notes is required'}
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

          <div className='md:col-span-2'>
            <SubmitButton
              isSubmitting={isSubmitting}
              label={'Item'}
            />
          </div>
        </div>
      </form>

      {/*  */}
    </div>
  );
};

export default NewItemPage;
