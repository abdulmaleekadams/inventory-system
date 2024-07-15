import Link from 'next/link'
export default function Home() {
  return (
    <div className='flex items-center flex-col justify-center min-h-screen'>
      <h2 className='text-3xl mb-4'>Inventory Management Software</h2>
      <Link href='/app/home/inventory-dashboard'>View dashboard</Link>
    </div>
  );
}
