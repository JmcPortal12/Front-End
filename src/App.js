import React from 'react';
import Image from './images/jmc_logos.jpg';

function App() {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-[url('E:\jmc\src\images\jmc_main.jpg')]">
      <div className='bg-white w-96 p-8 rounded-lg'>
      <div className='mb-4'>
          <img src={Image} className="jmc_logos" alt="Vector" />
        </div>
        <h1 className='text-center mb-6 text-2xl font-semibold text-blue-900'>Login Page</h1>
        <div className='mb-4'>
          <label className='block text-black text-sm font-medium mb-2 '>Username</label>
          <input className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none '
            type='text'
            placeholder='Enter Your Username'>
          </input>
          <div className='mt-4'>
            <label className='block text-black text-sm font-medium mb-2'>Password</label>
            <input className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none'
              type='password'
               placeholder='Enter Your Password'>
            </input>
          </div>
          <div className='flex justify-center'>
          <button className='w-full text-white py-2 mt-6 bg-blue-900 rounded-lg'>Login</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App