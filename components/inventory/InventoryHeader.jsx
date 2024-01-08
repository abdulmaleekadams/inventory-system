import Link from 'next/link'
import {Plus } from 'lucide-react'

const InventoryHeader = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <button className='text-2xl'>All Items</button>
      </div>

      <div className='flex'>
        {/* New */}
        <Link href={'/#'} className='p-2 bg-blue-500 rounded-lg flex items-center text-white gap-x-2'>
          <Plus className='w-4 h-4' />
          New
        </Link>

        {/* Layout */}
        <button></button>

        {/* More */}

        {/* Help */}
      </div>
    </div>
  );
}

export default InventoryHeader