import Link from 'next/link';
import {
  ShoppingCart,
  ChevronLeft,
  Home,
  BaggageClaim,
  ShoppingBag,
  ShoppingBasket,
  Cable,
  BarChart4,
  FileText,
} from 'lucide-react';
import NavLink from './NavLink';
import SubscriptionCard from './SubscriptionCard';

const navLinks = [
  {
    icon: <Home className='w-5 h-5' />,
    title: 'Home',
    url: 'home/overview',
  },
  {
    icon: <BaggageClaim className='w-5 h-5' />,
    title: 'Inventory',
    url: 'inventory',
    isDropdown: true,
  },
  {
    icon: <ShoppingBag className='w-5 h-5' />,
    title: 'Sales',
    url: 'sales',
    isDropdown: true,
  },
  {
    icon: <ShoppingBasket className='w-5 h-5' />,
    title: 'Purchases',
    url: 'purchases',
    isDropdown: true,
  },
  {
    icon: <Cable className='w-5 h-5' />,
    title: 'Integrations',
    url: 'integrations',
  },
  {
    icon: <BarChart4 className='w-5 h-5' />,
    title: 'Reports',
    url: 'reports',
  },
  {
    icon: <FileText className='w-5 h-5' />,
    title: 'Documents',
    url: 'documents',
  },
];
const Sidebar = () => {
  return (
    <aside className='w-60 min-h-screen bg-slate-900 text-slate-50 z-50 flex flex-col justify-between fixed left-0 top-0'>
      {/* Top Part */}

      <div className='flex flex-col gap-8'>
        {/* Logo */}
        <div className='flex gap-2 items-center py-4 px-2 space-x-2 bg-slate-950'>
          <ShoppingCart />
          <span className='text-xl font-semibold'>Inventory</span>
        </div>

        {/* Links */}
        <nav className='flex flex-col gap-4 px-2'>
          {navLinks.map((navItem, idx) =>
            navItem.isDropdown ? (
              <div className=' relative  ' key={`navItem${idx} `}>
                <button className='flex gap-2 items-center w-full hover:bg-slate-950 p-2 rounded-lg '>
                  {navItem.icon}
                  <p>{navItem.title}</p>
                </button>
              </div>
            ) : (
              <NavLink
                icon={navItem.icon}
                url={navItem.url}
                key={`navItem${idx}`}
                title={navItem.title}
              />
            )
          )}
        </nav>
      </div>

      {/* Subcription */}
      <SubscriptionCard />

      {/* Bottom */}
      <button className='flex gap-2 items-center justify-center py-4 px-2 space-x-2 bg-slate-950'>
        <ChevronLeft />
      </button>

      {/* Footer Icon */}
    </aside>
  );
};

export default Sidebar;
