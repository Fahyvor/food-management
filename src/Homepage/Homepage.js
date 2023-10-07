import React, { useState } from 'react'
import './homepage.css'
import HomeImage from '../assets/bodyImage.jpeg'

const Homepage = () => {
  return (
    <div className='homepage w-full
    bg-black flex flex-col pb-5 border-solid
    border-slate-50 pb-8'>
        <div className='home-nav text-white max-sm:flex-col
        max-sm:items-center flex justify-between px-5 py-3'>
            <div className='days'>
                <small>Mon-Fri:8am-11pm || Sat-Sun:8am-12pm</small>
            </div>

            <div className='about'>
                <small>About | Contact Us | Login/Register</small>
            </div>
        </div>
        <div className='home-container flex pb-5 max-sm:flex-col items-center'>
            <div className='home-left w-1/2 max-sm:w-5/6 text-slate-50
            px-5 py-5 text-center flex flex-col items-center gap-5 justify-center'>
                <h1 className='font-bold
                text-4xl'>Welcome to Our</h1>
                <h1 className='text-2xl font-bold'>Our Tasty Foods</h1>
                <p className='w-2/3'>Without food, we cannot survive, and that is why
                    issues that effect the food industry are so important.
                </p>

                <div className='right-button flex gap-3'>
                    <div className='button-right bg-amber-600
                    font-bold py-2 rounded-xl px-9'>
                        <a href='/pre-home'>Login</a>
                    </div>

                    <div className='button-right
                    font-bold py-2 rounded-xl px-9'>
                        <a href='/pre-home'>Register</a>
                    </div>
                </div>
            </div>

            <div className='home-right w-1/2 max-sm:w-full
            flex justify-center items-center p-5'>
                <img src={HomeImage} alt='image' className='rounded-3xl w-3/4 m-5' />
            </div>
        </div>

        <div className='home-footer text-center
        bg-slate-50 mt-8 py-4 text-amber-600 mt-12 font-bold'>
            <p>&copy; 2023 Tasty Foods</p>
        </div>
    </div>
  )
}

export default Homepage