import React from 'react'

const Nav = () => {
  return (
    <div className='homepage-nav 
    bg-white py-2 w-full flex gap-9 justify-center'>
            <a href='/' className='w-1/5 font-bold
            text-xl'>Home</a>
            <a href='/login' className='w-1/5 font-bold
            text-xl' >Login</a>
            <a href='/register' className='w-1/5 font-bold
            text-xl' >Register</a>
    </div>
  )
}

export default Nav