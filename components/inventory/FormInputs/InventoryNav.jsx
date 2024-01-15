import { Plus } from 'lucide-react';

const InventoryNav = ({ tabs = [], activeForm,setActiveForm }) => {
  return (
    <div className='w-full max-w-4xl mx-auto my-3 shadow rounded bg-white border-b border-gray-200 px-4 py-2'>
      <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        {tabs.map((tab, idx) => (
          <li className='me-2' key={`tab${idx}`}>
            <button className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group ${tab.formToDisplay === activeForm ? 'text-blue-600 border-blue-600 active': 'hover:text-gray-600 hover:border-gray-300'}`} onClick={()=>setActiveForm(tab.formToDisplay)}>
              <tab.icon className={`w-4 h-4 me-2 ${tab.formToDisplay === activeForm ? 'text-blue-600' : 'text-gray-400  group-hover:text-gray-500'}`} />
              {tab.title}
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryNav;
