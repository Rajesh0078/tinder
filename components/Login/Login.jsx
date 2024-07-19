import React from 'react'

const Login = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='text-center'>
                <p className='text-[20px] font-medium'>Welcome Back !</p>
                <p className='text-[14px]'>Sign in to continue to love capsule.</p>
            </div>
            <div className='w-full mt-10'>
                <div className='w-full'>
                    <p className='text-[15px]'>Email</p>
                    <div>
                        <input type="email" placeholder='Enter your email' className='outline-none border focus:border-primary/80 w-full h-12 px-3 mt-1' />
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <div className='text-[15px] flex justify-between items-start'>
                        <p>Password</p>
                        <p className='text-black/70 text-xs'>Forgot password?</p>
                    </div>
                    <div>
                        <input type="password" placeholder='Enter your password' className='outline-none border focus:border-primary/80 w-full h-12 px-3 mt-1' />
                    </div>
                </div>
                <div className='mt-2 '>
                    <span className='text-[13px] pb-1'>Forgot your password</span>
                </div>
            </div>
        </div>
    )
}

export default Login