'use client';

import Image from 'next/image';
import { UploadDropzone } from '@/app/utils/uploadthing';
import { Pencil } from 'lucide-react';

const ImageUploader = ({
  imageUploadedUrl = '',
  setImageUploadedUrl,
  label,
  endpoint = "'imageUploader'",
  containerClassName = 'col-span-full',
}) => {
  return (
    <div className={containerClassName}>
      <div className='flex justify-between items-center mb-4'>
        <label htmlFor='imageUrl' className='block text-sm'>
          {label}
        </label>
        {imageUploadedUrl && (
          <button
            onClick={() => setImageUploadedUrl('')}
            className='flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4'
          >
            <Pencil className='w-5 h-5' />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUploadedUrl ? (
        <Image
          alt='Item image'
          src={imageUploadedUrl}
          width={300}
          height={300}
          className='object-cover'
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            // Do something with the response
            setImageUploadedUrl(res[0].url);
            console.log('Files: ', res);
            console.log('Upload Completed');
          }}
          onUploadError={(error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
