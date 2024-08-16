'use client'

import Link from "next/link";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    return(
        <nav className="sticky top-0 w-full p-2 bg-white border-b z-[1000] bg-opacity-90 backdrop-blur-sm">
            {/* tablet, pc */}
            <div className="container mx-auto hidden md:flex justify-between items-center px-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="hover:scale-90 duration-300">
                        <Image src="/images/logo.jpg" width={500} height={300} className="w-10 rounded-lg" />
                    </Link>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/" className="text-gray-600 hover:text-purple-500 duration-300">หน้าแรก</Link></li>
                        <li><Link href="/products" className="text-gray-600 hover:text-purple-500 duration-300">สินค้าทั้งหมด</Link></li>
                        <li><Link href="/topup" className="text-gray-600 hover:text-purple-500 duration-300">เติมเงิน</Link></li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="/login" className="bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">เข้าสู่ระบบ</Link>
                    <Link href="/register" className="bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">สมัครสมาชิก</Link>
                </div>
            </div>
            {/* mobile */}
            <div className="container mx-auto flex md:hidden justify-between items-center px-4">
                <Link href="/" className="hover:scale-90 duration-300">
                    <Image src="/images/logo.jpg" width={500} height={300} className="w-10 rounded-lg" />
                </Link>
                <FiMenu className="text-2xl text-gray-500"/>
            </div>
        </nav>
    )
}