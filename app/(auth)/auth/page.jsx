import Login from '@/components/Login/Login'
import Register from '@/components/register/Register'
import React from 'react'

const page = ({ searchParams }) => {
    if (searchParams?.type === "register") return <Register />
    return <Login />
}

export default page