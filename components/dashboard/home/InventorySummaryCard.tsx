import React from 'react';

const InventorySummaryCard = ({ title, total }:{title: string, total: number}) => {
  return (
    <div
      className={`rounded-lg shadow bg-white border border-slate-400 transition-all duration-300 hover:border-blue-600 px-4 py-2 cursor-pointer flex items-center justify-between gap-x-1`}
      key={title}
    >
      <p className='text-sm font-medium uppercase text-slate-400'>{title}</p>
      <p className='text-black font-medium text-2xl'>{total}</p>
    </div>
  );
};

export default InventorySummaryCard;
