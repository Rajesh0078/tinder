import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa6'

const Register = () => {
    return (
        <div className='w-full max-w-[330px] h-full flex flex-col justify-center items-center'>
            <div className='text-center'>
                <p className='text-[22px] font-medium text-primary'>Register Account</p>
                <p className='text-[14px] mt-2'>Get your free love capsule account now.</p>
            </div>
            <form className='w-full mt-8 text-[13px]'>
                <div className='w-full'>
                    <p className='text-[14px]'>Username</p>
                    <div className='mt-2 relative'>
                        <FaUser className='absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-slate-400' />
                        <input type="text" placeholder='Enter your username' className='outline-none border rounded shadow-sm focus:border-primary/80 w-full h-9 px-10' />
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <p className='text-[14px]'>Email</p>
                    <div className='mt-2 relative'>
                        <FaEnvelope className='absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-slate-400' />
                        <input type="email" placeholder='Enter your email' className='outline-none border rounded shadow-sm focus:border-primary/80 w-full h-9 px-10' />
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <div className='text-[15px]'>
                        <p className='text-[14px]'>Password</p>
                    </div>
                    <div className='mt-2 relative'>
                        <FaLock className='absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-slate-400' />
                        <input type="password" placeholder='Enter your password' className='outline-none rounded border shadow-sm focus:border-primary/80 w-full h-9 px-10' />
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <div className='text-[15px]'>
                        <p className='text-[14px]'>Confirm Password</p>
                    </div>
                    <div className='mt-2 relative'>
                        <FaLock className='absolute top-1/2 left-3 -translate-y-1/2 text-[18px] text-slate-400' />
                        <input type="password" placeholder='Confirm your password' className='outline-none rounded border shadow-sm focus:border-primary/80 w-full h-9 px-10' />
                    </div>
                </div>
                <button type='submit' className='w-full mt-8 rounded bg-primary text-white h-9 text-[14px] font-semibold'>Register</button>
            </form>
            <div className='my-3 text-sm'>
                or
            </div>
            <p className='text-[14px]'>Already have an account? <Link href={{ pathname: "/auth" }} className='text-primary font-medium'>Login</Link></p>
        </div>
    )
}

export default Register