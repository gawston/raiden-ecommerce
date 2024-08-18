'use client'

import Link from "next/link"

export default function Register() {
    return(
        <div className="container mx-auto h-[79.7vh] flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl font-bold mb-4">สมัครสมาชิก</h1>
            <form action="/register" method="post" className="border p-6 w-96 rounded-lg bg-white">
                <div className="mt-3">
                    <label htmlFor="fullname" className="text-sm font-medium leading-none">ชื่อผู้ใช้ / Username</label>
                    <input type="text" name="username" id="username" className="flex h-10 w-full rounded-md
                    border bg-gray-50 px-3 py-2 text-sm focus:outline-none" required />
                </div>
                <div className="mt-3">
                    <label htmlFor="username" className="text-sm font-medium leading-none">อีเมล / Email</label>
                    <input type="email" name="email" id="email" className="flex h-10 w-full rounded-md
                    border bg-gray-50 px-3 py-2 text-sm focus:outline-none" />
                </div>
                <div className="mt-3">
                    <label htmlFor="username" className="text-sm font-medium leading-none">รหัสผ่าน / Password</label>
                    <input type="password" name="password" id="password" className="flex h-10 w-full rounded-md
                    border bg-gray-50 px-3 py-2 text-sm focus:outline-none" required />
                </div>
                <div className="mt-3">
                    <label htmlFor="username" className="text-sm font-medium leading-none">ยืนยันรหัสผ่าน / Confirm Password</label>
                    <input type="password" name="password" id="password" className="flex h-10 w-full rounded-md
                    border bg-gray-50 px-3 py-2 text-sm focus:outline-none" required />
                </div>
                <div className="mt-8">
                    <input type="submit" value="สมัครสมาชิก" className="w-full h-10 rounded-md border bg-purple-400
                    text-white hover:bg-purple-500 duration-300 focus:outline-none cursor-pointer" />
                </div>
                <div className="flex justify-center items-center mt-2 text-sm gap-1">
                    หากคุณเคยสมัครสมาชิกแล้วคลิก <Link href="/login" className="text-purple-500 font-bold underline"> เข้าสู่ระบบ</Link>
                </div>
            </form>
        </div>
    )
}