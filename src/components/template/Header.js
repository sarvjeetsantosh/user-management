import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 bg-gray-700 flex items-center px-10'>
       <div className='w-40 flex'>
        <input placeholder='Search....' className='py-2 px-2 rounded '/>
        <button className='px-5 bg-gray-500 text-white rounded ml-2 hover:bg-gray-900'>Submit</button>
       </div>
    </div>
  )
}

export default Header