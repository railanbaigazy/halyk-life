'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname()
    const homePath = pathname.includes('/med') ? '/med' : '/admin'
    const paths = [
        {
            alt: 'home-icon',
            src: '/assets/icons/home_icon.svg',


        }
    ]

    return (
        <nav className="w-1/12 p-10 pt-5 flex flex-col gap-5 items-center bg-white drop-shadow">
            <Image
                src="/assets/icons/logo.png"
                alt="logo-icon"
                width={80}
                height={80}
                style={{ maxWidth: "none" }}
            />
            <Link href={homePath} className="mt-16 mb-8">
                <svg
                    className={(pathname === '/med' || pathname === '/admin') && "fill-[#01B071]"}
                    xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/></svg>
            </Link>
            <Link href={homePath} className="mb-8">
                <Image
                    src="/assets/icons/docs.png"
                    alt="home-icon"
                    width={30}
                    height={30}
                    className="text"
                    style={{ maxWidth: "none" }}
                />
            </Link>
            <Link href={homePath} className="mb-8">
                <Image
                    src="/assets/icons/payment.png"
                    alt="home-icon"
                    width={30}
                    height={30}
                    className="text"
                    style={{ maxWidth: "none" }}
                />
            </Link>

        </nav>
    );
};

export default Sidebar;