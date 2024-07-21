import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa6'

const Login = () => {
    return (
        <div className='w-full max-w-[330px] h-full flex flex-col justify-center items-center'>
            <div className='text-center'>
                <p className='text-[22px] font-medium'>Welcome Back !</p>
                <p className='text-[14px] mt-2'>Sign in to continue to love capsule.</p>
            </div>
            <form className='w-full mt-11 text-[13px]'>
                <div className='w-full'>
                    <p className='text-[14px]'>Email</p>
                    <div className='mt-2 relative'>
                        <FaEnvelope className='absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-slate-400' />
                        <input type="email" placeholder='Enter your email' className='outline-none border rounded shadow-sm focus:border-primary/80 w-full h-9 px-10' />
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <div className='text-[15px] flex justify-between items-start'>
                        <p className='text-[14px]'>Password</p>
                        <Link href={{ pathname: "/auth", query: { type: "forgot-password" } }} className='text-black/70 text-[12px]'>Forgot password?</Link>
                    </div>
                    <div className='mt-2 relative'>
                        <FaLock className='absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-slate-400' />
                        <input type="password" placeholder='Enter your password' className='outline-none rounded border shadow-sm focus:border-primary/80 w-full h-9 px-10' />
                    </div>
                </div>
                <div className='mt-5 flex gap-2'>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type='submit' className='w-full mt-5 rounded bg-primary text-white h-9 text-[14px] font-semibold'>Log In</button>
            </form>
            <div className='mt-5 mb-5 text-sm'>
                or
            </div>
            <p className='text-[14px]'>Don't have an account? <Link href={{ pathname: "/auth", query: { type: "register" } }} className='text-primary font-medium'>Register</Link></p>
        </div>
    )
}

export default Login