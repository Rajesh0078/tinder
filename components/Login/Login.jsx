import React from 'react'

const Login = () => {
    return (
        <div className='w-full max-w-[330px] h-full flex flex-col justify-center items-center'>
            <div className='text-center'>
                <p className='text-[20px] font-medium'>Welcome Back !</p>
                <p className='text-[14px] mt-2'>Sign in to continue to love capsule.</p>
            </div>
            <form className='w-full mt-14 text-[13px]'>
                <div className='w-full'>
                    <p className='text-[14px]'>Email</p>
                    <div className='mt-2'>
                        <input type="email" placeholder='Enter your email' className='outline-none border focus:border-primary/80 w-full h-9 px-3' />
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <div className='text-[15px] flex justify-between items-start'>
                        <p className='text-[14px]'>Password</p>
                        <p className='text-black/70 text-[12px]'>Forgot password?</p>
                    </div>
                    <div className='mt-2'>
                        <input type="password" placeholder='Enter your password' className='outline-none rounded border focus:border-primary/80 w-full h-9 px-3' />
                    </div>
                </div>
                <div className='mt-5 flex gap-2'>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type='submit' className='w-full mt-5 rounded bg-primary text-white h-9'>Login</button>
            </form>
            <div className='my-5 text-sm'>
                or
            </div>
        </div>
    )
}

export default Login