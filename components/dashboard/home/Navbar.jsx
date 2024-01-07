import Link from 'next/link';
import NavLink from './NavLink';

const navItems = [
  {
    title: 'Dashboard',
    url: 'inventory-dashboard',
  },
  {
    title: 'Getting Started',
    url: 'getting-started',
  },
  {
    title: 'Recent Updates',
    url: 'updates',
  },
  {
    title: 'Announcements',
    url: 'announcement',
  },
];

const Navbar = () => {
  return (
    <div className='sticky top-16 flex gap-5'>
          {
              navItems.map(({ title, url }) => (
                  <NavLink title={title} url={url} key={url} />
              ))
      }
    </div>
  );
};

export default Navbar;
