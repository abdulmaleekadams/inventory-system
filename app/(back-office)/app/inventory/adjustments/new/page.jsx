'use client';
import AddInventoryForm from '@/components/inventory/AddInventoryForm';
import FormHeader from '@/components/inventory/FormHeader';
import InventoryNav from '@/components/inventory/FormInputs/InventoryNav';
import TransferInventoryForm from '@/components/inventory/TransferInventoryForm';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  {
    title: 'Add Stock',
    icon: Plus,
    formToDisplay: 'add',
  },
  {
    title: 'Transfer Stock',
    icon: Minus,
    formToDisplay: 'transfer',
  },
];

const NewIAdjustments = () => {
  const [activeForm, setActiveForm] = useState('add');
  return (
    <div>
      {/* Header */}
      <FormHeader title={'New Adjustment'} url={'/app/inventory/items'} />

      <InventoryNav
        tabs={tabs}
        activeForm={activeForm}
        setActiveForm={setActiveForm}
      />

      {/* Form */}
      {activeForm === 'add' ? <AddInventoryForm /> : <TransferInventoryForm />}
    </div>
  );
};

export default NewIAdjustments;
