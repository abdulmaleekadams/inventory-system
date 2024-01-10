import { X } from 'lucide-react';
import Link from 'next/link';

const FormHeader = ({ title, url }) => {
  return (
    <div className='flex items-center justify-between bg-white py-3 px-16'>
      <h2 className='text-xl font-semibold'>{title}</h2>

      <Link href={url}>
        <X />
      </Link>
    </div>
  );
};

export default FormHeader;
