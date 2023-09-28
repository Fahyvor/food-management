
import React from 'react'

const Welcome = () => {
  return (
    <div className='h-screen flex flex-col justify-around'>
        <div className='welcome-header'>
            <h1 className='text-3xl mt-9 font-bold pb-6 max-sm:pb-1 
            text-center'>Welcome to the Food Management Portal</h1>
        </div>

        <div className='flex gap-9 pb-9 px-3 justify-center flex-col items-center mt-6'>
            <div className='inspection w-1/4 py-2 max-sm:w-2/3
            text-white text-center rounded-xl bg-amber-600'>
                <a href='/register'>Health Check</a>
            </div>

            <div className='inspection w-1/4 py-2 max-sm:w-2/3
            text-white text-center rounded-xl bg-amber-600'>
                <a href='/register'>Taste Check</a>
            </div>

            <div className='inspection w-1/4 py-2 max-sm:w-2/3
            text-white text-center rounded-xl bg-amber-600'>
                <a href='/register'>Environment Check</a>
            </div>
        </div>

        <div className='welcome-footer text-center mt-4'>
            <small>&copy; Food Management</small>
        </div>
    </div>
  )
}

export default Welcome