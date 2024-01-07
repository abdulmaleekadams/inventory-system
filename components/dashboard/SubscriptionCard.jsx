/* eslint-disable react/no-unescaped-entities */
const SubscriptionCard = () => {
  return (
    <div className='py-6 bg-slate-950 mx-2 rounded-lg'>
      <div className='flex border-b border-gray-500 gap-2 pb-2 px-2'>
        <p className='text-sm border-l-2 border-yellow-500 pl-2'>
          Your <span className='font-semibold'>Premium</span> plans's trial
          expires in{' '}
          <span className='font-semibold text-yellow-500'>13 days</span>
        </p>
      </div>
      <div className='flex'>
        <p className='pt-2 px-2  cursor-pointer border-r border-gray-400 pr-4'>Change Plan</p>
        <p className='pt-2 px-2 pl-4  cursor-pointer'>Upgrade</p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
