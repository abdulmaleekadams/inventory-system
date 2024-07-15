import { Check, Sailboat, Truck, BookText } from 'lucide-react';
import SalesActivityCard from './SalesActivityCard';
import InventorySummaryCard from './InventorySummaryCard';

const inventorySummary = [
  {
    title: 'quantity in hand',
    total: 0,
  },
  {
    title: 'quantity to be received',
    total: 0,
  },
];

const salesActivity = [
  {
    title: 'to be packed',
    total: 0,
    textColor: 'text-blue-500',
    unit: 'Qty',
    icon: (
      <Check className='w-4 h-4 rounded-full border  p-0.5 border-black text-black' />
    ),
  },
  {
    title: 'to be shipped',
    total: 0,
    textColor: 'text-red-500',
    unit: 'Qty',
    icon: (
      <Sailboat className='w-4 h-4 rounded-full border  p-0.5 border-black text-black' />
    ),
  },
  {
    title: 'to be delivered',
    textColor: 'text-green-500',
    total: 0,
    unit: 'Pkgs',
    icon: (
      <Truck className='w-4 h-4 rounded-full border  p-0.5 border-black text-black' />
    ),
  },
  {
    title: 'to be invoiced',
    textColor: 'text-yellow-500',
    total: 0,
    unit: 'Qty',
    icon: (
      <BookText className='w-4 h-4 rounded-full border  p-0.5 border-black text-black' />
    ),
  },
];

const SalesOverview = () => {
  return (
    <div className='bg-blue-100 border-b border-slate-300 p-8 grid grid-cols-12 gap-x-10'>
      {/* Sales Activity */}
      <div className='col-span-8 border-r border-slate-400'>
        <h2 className='mb-6 text-xl font-medium'>Sales Activity</h2>

        <div className='grid grid-cols-4 gap-4 pr-8 xl:pr-10 2xl:pr-36'>
          {/* Cards */}
          {salesActivity.map(({ title, total, unit, icon, textColor }) => (
            <SalesActivityCard
              key={title}
              {...{ title, total, unit, icon, textColor }}
            />
          ))}
        </div>
      </div>
      {/* Inventory Summary */}
      <div className='col-span-4'>
        <h2 className='mb-6 text-xl font-medium'>Inventory Summary</h2>
        <div className='flex flex-col gap-y-5'>
          {inventorySummary.map(({ title, total }) => (
            <InventorySummaryCard key={title} {...{title, total}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
