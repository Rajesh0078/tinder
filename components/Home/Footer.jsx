import React from 'react'
import { Collapse, ConfigProvider } from 'antd';
import { FaAnglesRight, FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6"

const Footer = () => {

    return (
        <div className='bg-[url("/assets/footer_bg.png")] bg-cover'>
            <div className='py-9 w-full flex flex-col gap-5 lg:flex-row lg:justify-between border-b border-[rgba(33,51,102,0.1)] px-[5%] md:px-[15%]'>
                <div className='flex gap-2 lg:gap-4 flex-col lg:flex-row lg:items-center'>
                    <p className='text-[18px] md:text-[22px] font-semibold'>Newsletter</p>
                    <form className='bg-white rounded p-1 shadow-md h-12 flex'>
                        <input className='w-full h-full outline-none px-2' type='email' placeholder='Your email address'></input>
                        <button className='h-full bg-primary text-white px-3 rounded hover:rounded-full'>Subscribe</button>
                    </form>
                </div>
                <div className='flex gap-2 lg:gap-4 flex-col lg:flex-row lg:items-center'>
                    <p className='text-[18px] md:text-[22px] font-semibold'>Join Community</p>
                    <div className='flex gap-3'>
                        <div className='h-12 aspect-square bg-white shadow-md rounded hover:rounded-full hover:bg-primary hover:text-white flex'>
                            <FaXTwitter className='m-auto text-xl ' />
                        </div>
                        <div className='h-12 aspect-square bg-white shadow-md rounded hover:rounded-full hover:bg-primary hover:text-white flex'>
                            <FaInstagram className='m-auto text-xl' />
                        </div>
                        <div className='h-12 aspect-square bg-white shadow-md rounded hover:rounded-full hover:bg-primary hover:text-white flex'>
                            <FaWhatsapp className='m-auto text-xl' />
                        </div>
                        <div className='h-12 aspect-square bg-white shadow-md rounded hover:rounded-full hover:bg-primary hover:text-white flex'>
                            <FaLinkedin className='m-auto text-xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[5%] md:px-[15%] py-9 hidden lg:flex justify-between gap-5 text-[14px] sm:text-[16px] '>
                <div className='flex flex-col items-center'>
                    <div>
                        <p className='uppercase text-[18px] font-semibold'>Our Info</p>
                        <div className='mt-2 flex flex-col gap-1'>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <p className='uppercase text-[18px] font-semibold'>My Account</p>
                        <div className='mt-2 flex flex-col gap-1'>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <p className='uppercase text-[18px] font-semibold'>Help center</p>
                        <div className='mt-2 flex flex-col gap-1'>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <p className='uppercase text-[18px] font-semibold'>legal</p>
                        <div className='mt-2 flex flex-col gap-1'>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
                            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[5%] md:px-[15%] py-5 sm:py-9 text-[14px] sm:text-[16px] lg:hidden'>
                <ConfigProvider theme={{
                    components: {
                        Collapse: {
                            headerBg: "tranparent",
                            contentPadding: 0,
                            headerPadding: "8px 0px",
                            contentBg: "tranparent"
                        }
                    },
                    token: {
                        borderRadiusLG: 0,
                        colorBorder: "tranparent"
                    }
                }}>
                    <Collapse accordion items={items} expandIconPosition="end" />
                </ConfigProvider>
            </div>
            <div className='px-[5%] md:px-[15%]'>
                <div className='border-t border-[rgba(33,51,102,0.1)] w-full p-4 text-center text-xs sm:text-sm font-medium'>
                    <p className='leading-[26px]'> All Rights Reserved by LOVE CAPSULE @ 2024</p>
                    <p className=''>Design By: Rajesh</p>
                </div>
            </div>
        </div>
    )
}

const items = [
    {
        key: '1',
        label: <p className='uppercase text-[14px] sm:text-[18px] font-semibold'>Our Info</p>,
        children: <div className='flex flex-col gap-1'>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
        </div>,
    },
    {
        key: '2',
        label: <p className='uppercase text-[14px] sm:text-[18px] font-semibold'>My Account</p>,
        children: <div className='flex flex-col gap-1'>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
        </div>,
    },
    {
        key: '3',
        label: <p className='uppercase text-[14px] sm:text-[18px] font-semibold'>Help center</p>,
        children: <div className='flex flex-col gap-1'>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
        </div>,
    },
    {
        key: '4',
        label: <p className='uppercase text-[14px] sm:text-[18px] font-semibold'>legal</p>,
        children: <div className='flex flex-col gap-1'>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> About Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Contact Us</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Success Stories</p>
            <p className='flex items-center gap-1'><FaAnglesRight className='text-sm' /> Blogs</p>
        </div>,
    },
];

export default Footer