import AddInventoryForm from '@/components/inventory/AddInventoryForm copy';
import FormHeader from '@/components/inventory/FormHeader';
import InventoryNav from '@/components/inventory/FormInputs/InventoryNav';
import TransferInventoryForm from '@/components/inventory/TransferInventoryForm';
import { Plus, Minus } from 'lucide-react';

const tabs = [
  {
    title: 'Add Stock',
    icon: Plus,
  },
  {
    title: 'Transfer Stock',
    icon: Minus,
  },
];

const NewIAdjustments = () => {
  return (
    <div>
      {/* Header */}
      <FormHeader title={'New Adjustment'} url={'/app/inventory/items'} />

      
      <InventoryNav tabs={tabs} />

      {/* Form */}
      <TransferInventoryForm />
      <AddInventoryForm />

      {/*  */}
    </div>
  );
};

export default NewIAdjustments;
