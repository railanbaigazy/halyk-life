'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
    // const { pathName } = useRouter()
    // console.log(pathName)
    return (
        <nav className="w-1/12 p-10 pt-5 flex flex-col gap-5 items-center bg-white drop-shadow">
            <Image
                src="/assets/icons/logo.png"
                alt="logo-icon"
                width={80}
                height={80}
                style={{ maxWidth: "none" }}
            />
            <Link href="/" className="">
                <Image
                    src="/assets/icons/home_icon.svg"
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