'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { FiMenu, FiHome, FiShoppingBag, FiCreditCard } from "react-icons/fi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <nav className="sticky top-0 w-full p-2 bg-white border-b z-[1000] bg-opacity-90 backdrop-blur-sm">
            {/* tablet, pc */}
            <div className="container mx-auto hidden md:flex justify-between items-center px-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="hover:scale-90 duration-300">
                        <Image src="/images/logo.jpg" width={500} height={300} className="w-10 rounded-lg" />
                    </Link>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiHome />หน้าแรก</Link>
                        </li>
                        <li><Link href="/products" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiShoppingBag />สินค้าทั้งหมด</Link>
                        </li>
                        <li><Link href="/topup" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiCreditCard />เติมเงิน</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="/login" className="bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">เข้าสู่ระบบ</Link>
                    <Link href="/register" className="bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">สมัครสมาชิก</Link>
                </div>
            </div>
            {/* mobile */}
            <div className="container mx-auto block md:hidden px-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="hover:scale-90 duration-300">
                        <Image src="/images/logo.jpg" width={500} height={300} className="w-10 rounded-lg" />
                    </Link>
                    {/* menu button */}
                    <div id="menuBtn" onClick={handleMenuOpen}>
                        <FiMenu className="text-2xl text-gray-500"/>
                    </div>
                </div>
                {/* toggle nav */}
                {isMenuOpen ? (
                <div className="h-44 flex flex-col mt-4 gap-2 duration-300 overflow-hidden">
                    <ul className="flex flex-col justify-center gap-4">
                        <li><Link href="/" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiHome />หน้าแรก</Link>
                        </li>
                        <li><Link href="/products" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiShoppingBag />สินค้าทั้งหมด</Link>
                        </li>
                        <li><Link href="/topup" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiCreditCard />เติมเงิน</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="flex justify-between gap-2">
                        <Link href="/login" className="w-full text-center border bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">เข้าสู่ระบบ</Link>
                        <Link href="/register" className="w-full text-center border bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">สมัครสมาชิก</Link>
                    </div>
                </div>
                ) : (
                <div className="h-0 flex flex-col gap-2 duration-300 overflow-hidden">
                    <ul className="flex flex-col justify-center gap-4">
                        <li><Link href="/" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiHome />หน้าแรก</Link>
                        </li>
                        <li><Link href="/products" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiShoppingBag />สินค้าทั้งหมด</Link>
                        </li>
                        <li><Link href="/topup" className="flex items-center gap-1 text-gray-600 hover:text-purple-500 duration-300">
                            <FiCreditCard />เติมเงิน</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="flex justify-between gap-2">
                        <Link href="/login" className="w-full text-center border bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">เข้าสู่ระบบ</Link>
                        <Link href="/register" className="w-full text-center border bg-gray-100 hover:bg-purple-400 hover:text-white duration-150 p-2 rounded-lg">สมัครสมาชิก</Link>
                    </div>
                </div>
                )}
            </div>
        </nav>
    )
}