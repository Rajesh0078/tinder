import Link from "next/link";

export const metadata = {
    title: "Create Next App",
    description: "The Dating preferance",
};

export default function AuthLayout({ children }) {
    return <section className="h-dvh bg-blue-primary p-4 px-5 sm:p-6 flex justify-between flex-col lg:flex-row">
        <div className="text-center lg:text-start lg:ps-4 lg:pt-4 pb-4 flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <Link href={'/'} className='uppercase text-[20px] sm:text-[24px] font-bold'>
                <span >Love </span>
                <span className='text-primary'>Capsule</span>
            </Link>
            <p className="text-xs lg:text-sm mt-1 lg:mt-2 w-[80%]">Discover love, connect deeply, and build meaningful relationships.</p>
        </div>
        <div className="h-full w-full lg:w-[75%] bg-white rounded-[20px] p-4 shadow-md">
            {children}
        </div>
    </section>
}