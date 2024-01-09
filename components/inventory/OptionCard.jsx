import Link from 'next/link';
import { Shirt } from 'lucide-react';

const OptionCard = ({ optionData }) => {
  const { title, description, link, linkText, enabled, Icon } = optionData;
  return (
    <div className='shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6'>
      {/* Title */}
      <h3 className='font-bold text-font-semibold'>{title}</h3>
      {/* Image */}
      <div className='flex flex-col items-center justify-center'>
        <Icon strokeWidth={'.5px'} className='w-36 h-36' />
      </div>

      {/* Description */}
      <p className='line-clamp-1 text-center'>{description}</p>
      {enabled ? (
        <Link
          href={link}
          className='px-3 py-2 mr-4 bg-blue-500 rounded-lg inline-flex items-center text-white gap-x-2'
        >
          {linkText}
        </Link>
      ) : (
        <button className='py-2 rounded-lg bg-blue-500 px-3 inline-flex items-center gap-y-2 text-white'>
          Enable Now
        </button>
      )}
    </div>
  );
};

export default OptionCard;
