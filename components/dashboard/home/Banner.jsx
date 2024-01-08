/* eslint-disable react/no-unescaped-entities */
'use client';
import { CreditCard, X } from 'lucide-react';
import { useState } from 'react';
const Banner = () => {
  const [hidden, setHidden] = useState(false);

  const handleHideBanner = () => setHidden(true);
  return (
    <div
      className={`${
        hidden ? 'hidden' : 'grid'
      } grid-cols-12 items-center py-6 px-8 gap-x-12 relative`}
    >
      {/* Icon */}
      <div className='col-span-2'>
        <CreditCard className='w-16 h-16 text-slate-500' />
      </div>

      {/* Text */}
      <div className='col-span-6 '>
        <h3 className='font-bold text-2xl mb-1'>
          Start accepting online payments
        </h3>
        <p>
          Businesses are moving towrads online payments as they're easy, secure
          and fast. Try them for your business today
        </p>
      </div>

      {/* Enable Button */}
      <div className='col-span-2'>
        <button className='uppercase bg-blue-500 text-white px-8 py-2.5 rounded-lg ml-auto'>
          Enable
        </button>
      </div>

      {/* Close Button */}
      <button className='absolute top-6 right-4' onClick={handleHideBanner}>
        <X className='text-slate-400 hover:text-slate-900' />
      </button>
    </div>
  );
};

export default Banner;
