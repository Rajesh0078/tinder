import Forgot_Password from '@/components/forgot/Forgot_Password'
import Login from '@/components/Login/Login'
import Register from '@/components/register/Register'
import React from 'react'

const page = ({ searchParams }) => {
    if (searchParams?.type === "register") return <Register />
    if (searchParams?.type === "forgot-password") return <Forgot_Password />
    return <Login />
}

export default page