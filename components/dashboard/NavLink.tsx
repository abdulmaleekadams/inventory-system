'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ icon, title, url }: {
  icon: JSX.Element
  title: string
  url: string
}) => {
  const path = usePathname();
  return (
    <Link
      href={`/app/${url}`}
      className={`flex gap-2 items-center hover:bg-blue-500 p-2 rounded-lg ${
        path === url ? 'bg-blue-500' : ''
      }`}
    >
      {icon}
      <span className='text-[1rem]'>{title}</span>
    </Link>
  );
};

export default NavLink;
