import { Plus } from 'lucide-react';

const InventoryNav = ({ tabs =[] }) => {
  return (
    <div className='w-full max-w-4xl mx-auto my-3 shadow rounded bg-white border-b border-gray-200 px-4 py-2'>
      <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        {tabs.map((tab, idx) => (
          <li className='me-2' key={`tab${idx}`}>
            <button className='inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group'>
              <tab.icon className='w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500' />
              {tab.title}
            </button>
          </li>
        ))}
        <li className='me-2'>
          <button
            className='inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
            aria-current='page'
          >
            <svg
              className='w-4 h-4 me-2 text-blue-600 dark:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 18'
            >
              <path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />
            </svg>
            Dashboard
          </button>
        </li>
      </ul>
    </div>
  );
};

export default InventoryNav;
