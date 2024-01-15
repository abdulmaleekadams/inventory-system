'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

const SidebarDropdown = ({ icon, title, dropdownList, menuTitle }) => {
  const path = usePathname();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleShowDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className=' relative  '>
      <button
        className={`flex gap-2 items-center w-full hover:bg-slate-950 p-2 rounded-lg ${
          path.split('/')[2].includes(menuTitle)
            ? 'bg-slate-950 text-blue-500'
            : ''
        }`}
        onClick={toggleShowDropdown}
      >
        {icon}
        <p>{title}</p>
        <ChevronDown
          className={`ml-auto transition-all duration-500 ${
            showDropdown ? 'rotate-0' : '-rotate-90'
          }`}
        />
      </button>
      <div
        className={` relative mt-3 transition-[transform,height] duration-500 flex flex-col gap-y-2 ${
          showDropdown
            ? 'translate-y-0 h-max opacity-100'
            : '-translate-y-14 h-0 opacity-0 invisible'
        }`}
      >
        {dropdownList?.map((item, idx) => (
          <Link
            href={`/app/${menuTitle}/${item.url}`}
            className={`flex gap-2 items-center p-2 pl-8 py-3 rounded-lg text-sm group ${
              path.includes(item.url) ? 'bg-blue-500 *:!opacity-100' : ''
            }`}
            key={`dropdown-${idx + '-' + item.url}`}
          >
            <Plus className='order-2 ml-auto w-4 h-4 bg-white p-1 rounded-full text-blue-500 opacity-0 group-hover:opacity-100 hover:text-slate-900' />

            <span className='text-[1rem] order-1'>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarDropdown;
