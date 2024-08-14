'use client'

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav className="sticky top-0 w-full p-2 bg-white border-b z-[1000] bg-opacity-90 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
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
                    <Link href="/login" className="bg-gray-200 hover:bg-purple-500 hover:text-white duration-150 p-2 rounded-lg">เข้าสู่ระบบ</Link>
                    <Link href="/register" className="bg-gray-200 hover:bg-purple-500 hover:text-white duration-150 p-2 rounded-lg">สมัครสมาชิก</Link>
                </div>
            </div>
        </nav>
    )
}