import InventoryHeader from '@/components/inventory/InventoryHeader';
import OptionCard from '@/components/inventory/optionCard';
import { Shirt, Boxes, ScrollText, Component } from 'lucide-react';

const optionsData = [
  {
    title: 'Item groups',
    description: 'Create multiple variants of the same item using Item Groups',
    link: 'new',
    linkText: 'New Item Group',
    enabled: true,
    Icon: Boxes,
  },
  {
    title: 'Items',
    description: 'Create standalone item and services that you buy and sell',
    link: 'items/new',
    linkText: 'New Item',
    enabled: true,
    Icon: Shirt,
  },
  {
    title: 'Composite Items',
    description: 'Bundle different items together and sell them as kits',
    link: 'new',
    linkText: 'New Composite Item',
    enabled: true,
    Icon: Component,
  },
  {
    title: 'Price Lists',
    description: 'Tweak your item prices for specific contacts or transaction',
    link: 'new',
    linkText: 'New Item Group',
    enabled: false,
    Icon: ScrollText,
  },
];
const ItemsPage = () => {
  return (
    <div className>
      <InventoryHeader />
      <div className='grid grid-cols-1 lg:grid-cols-2 m-4 py-8 px-16 gap-6'>
        {optionsData.map((optionData, idx) => (
          <OptionCard optionData={optionData} key={`option-${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
