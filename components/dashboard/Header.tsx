import {
  History,
  Plus,
  Users,
  Bell,
  Settings,
  ChevronDown,
  LayoutGrid,
} from 'lucide-react';
import SearchInput from './SearchInput';
import Image from 'next/image';
const Header = () => {
  return (
    <nav className='bg-slate-100 h-14 flex items-center justify-between px-5 border-b border-slate-300 shadow-sm fixed top-0 ps-64 z-40 w-full'>
      <div className='flex gap-5'>
        {/* Recent activities */}
        <button>
          <History className='w-6 h-6 ' />
        </button>
        {/* Search */}
        <SearchInput />
      </div>

      <div className='flex gap-2 items-center'>
        {/* Create Icon */}
        <div className='pr-5 border-r border-gray-200'>
          <button className='p-1 bg-blue-600 rounded-lg'>
            <Plus className='w-4 h-4 text-slate-50' />
          </button>
        </div>

        {/*  */}
        <div className='pr-2 border-r border-gray-200 flex gap-2'>
          <button className='p-1 text-slate-900 hover:text-slate-500 transition-colors'>
            <Users className='w-4 h-4 ' />
          </button>
          <button className='p-1  rounded-lg text-slate-900 hover:text-slate-500 transition-colors'>
            <Bell className='w-4 h-4 ' />
          </button>
          <button className='p-1  rounded-lg text-slate-900 hover:text-slate-500 transition-colors'>
            <Settings className='w-4 h-4 ' />
          </button>
        </div>

        {/*  */}
        <div className='flex gap-3'>
          <button className='flex items-center gap-1'>
            <span>Adams</span>
            <ChevronDown className='w-4 h-4' />
          </button>

          <button>
            <Image
              src=''
              width={32}
              height={32}
              alt='Profile image'
              className='w-8 h-8 border border-slate-900 rounded-full bg-slate-400'
            />
          </button>

          <button className='text-slate-900 hover:text-slate-500 transition-colors'>
            <LayoutGrid className='w-6 h-6' />
          </button>
        </div>
        {/*  */}
        {/*  */}
      </div>
    </nav>
  );
};

export default Header;
