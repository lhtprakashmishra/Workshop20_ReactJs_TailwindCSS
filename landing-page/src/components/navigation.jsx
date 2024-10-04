import React from 'react'

const Navigation = () => {
  return (
    <>
      <div className='flex justify-between align-center md:justify-around mx-2 my-4'>
        <div className='flex md:mt-2'>
        <img src="/img/menu.png" className='md:hidden w-5 h-5 mt-2 mr-1' alt="" />
          <img src="/img/price-tag.png" className='w-5 h-5 mt-2' alt="" />
          <h2 className='font-bold text-2xl ml-2'>Showroom</h2>
          <span className='hidden md:inline ml-5 text-xxs mt-3.5'>COMMING SOON</span>
        </div>
        <div className='text-xs'>
          <span className='hidden md:inline mr-8'>Pricing</span>
          <button className='bg-blue-400 p-1 my-2 rounded-full px-2 md:py-2 md:px-4 text-white'>Get Early Access</button>
        </div>
        
      </div>
    </>
  )
}

export default Navigation
