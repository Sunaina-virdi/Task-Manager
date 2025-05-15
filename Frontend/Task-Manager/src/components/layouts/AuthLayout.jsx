import React from 'react';
import UI_IMG from "../../assets/images/auth-img.png"

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
            <h2 className='text-xl text-black font-sans font-extrabold'>Task Manager</h2>
            {children}
        </div>
        <div className="hidden md:flex w-[40vw] h-screen items-center justify-center
            bg-cover bg-no-repeat bg-center overflow-hidden">
            <img src={UI_IMG} className='w-64 lg:w-[100%]'/>
        </div>
    </div>
  )
}

export default AuthLayout
