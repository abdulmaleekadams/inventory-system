import Spinner from '../Spinner';
import { Plus } from 'lucide-react';

const SubmitButton = ({label, isSubmitting}) => {
  return (
    <button
      type='submit'
      className='inline-flex items-center text-white disabled:bg-slate-400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <Spinner />
      ) : (
        <>
          <Plus className='w-5 h-5 mr-2' />
          <span className='capitalize'>{label}</span>
        </>
      )}
    </button>
  );
}

export default SubmitButton