'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ title, url }: {title: string, url: string}) => {
  const path = usePathname();
  return (
    <Link
      href={url}
      className={`border-b-4 border-transparent  py-2 text-slate-400 hover:border-blue-500 p-2 transition duration-500  ${
        path === url ? '!border-blue-500' : ''
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
