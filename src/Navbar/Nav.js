import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='p-3 w-full hidden max-sm:flex'>
      <FaBars size={45}  onClick={() => setShow(true)}/>
    {show ? (<div className='homepage-nav 
    bg-amber-600 py-2 w-full px-3 gap-9 flex
    bg-white absolute
    flex-col justify-center'>
            <a href='/' className='w-1/5 font-bold
            text-xl'>Home</a>
            <a href='/login' className='w-1/5 font-bold
            text-xl' >Login</a>
            <a href='/register' className='w-1/5 font-bold
            text-xl' >Register</a>
    </div>
    ) : null }
    </div>
  )
}

export default Nav