import {CreditCard} from 'lucide-react'
const Banner = () => {
  return (
      <div className='flex justify-between items-center px-8 py-6'>
          {/* Icon */}
          <CreditCard className='w-16 h-16 text-slate-500 gap-8' />

          {/* Text */}
          <div className="">
              <h3>
                  Start accepting online payments
              </h3>
              <p>Businesses are moving towrads online payments as they're easy, secure and fast. Try them for your business today</p>
          </div>

          {/* Close Button */}
          <button className='uppercase bg-blue-500 text-white px-8 py-2.5 rounded-lg'>
              Enable
          </button>
    </div>
  )
}

export default Banner