import FormHeader from '@/components/inventory/FormHeader';
import TransferInventoryForm from '@/components/inventory/TransferInventoryForm';

const NewIAdjustments = () => {
  return (
    <div>
      {/* Header */}
      <FormHeader title={'New Adjustment'} url={'/app/inventory/items'} />

      {/* Form */}
      <TransferInventoryForm />

      {/*  */}
    </div>
  );
};

export default NewIAdjustments;
