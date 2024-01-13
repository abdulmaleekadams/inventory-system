'use client';

import { UploadDropzone } from '@/app/utils/uploadthing';

const ImageUploader = ({ setImageUploadedUrl }) => {
  return (
    <UploadDropzone
      endpoint='imageUploader'
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
  );
};

export default ImageUploader;
