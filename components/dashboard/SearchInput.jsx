import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <form>
      <label htmlFor='simple-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <Search className='w-5 h-5' />
        </div>
        <input
          type='text'
          id='simple-search'
          className='bg-gray-100 border border-gray-300 text-slate-900 text-sm rounded-lg hover:ring-blue-500 hover:border-slate-900 focus:ring-blue-500 focus:border-slate-900 transition duration-500 block w-full pl-12 px-2 py-1.5 '
          placeholder='Search in customer (/)'
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
