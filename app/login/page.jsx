'use client'

import Link from "next/link"

export default function Login() {
    return(
        <div className="container mx-auto h-[79.7vh] flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl font-bold mb-4">เข้าสู่ระบบ</h1>
            <form action="/register" method="post" className="border p-6 w-96 rounded-lg bg-white">
                <div className="mt-3">
                    <label for="fullname" className="text-sm font-medium leading-none">ชื่อผู้ใช้ / Username</label>
                    <input type="text" name="username" id="username" className="flex h-10 w-full rounded-md
                    border bg-gray-50 px-3 py-2 text-sm focus:outline-none" required />
                </div>
                <div className="mt-3">
                    <label for="username" className="text-sm font-medium leading-none">รหัสผ่าน / Password</label>
                    <input type="password" name="password" id="password" className="flex h-10 w-full rounded-md
                    border bg-gray-50 px-3 py-2 text-sm focus:outline-none" required />
                </div>
                <div className="mt-1">
                    <Link href="/forgotpassword" className="text-sm underline text-purple-500">ลืมรหัสผ่าน ?</Link>
                </div>
                <div className="mt-4">
                    <input type="submit" value="เข้าสู่ระบบ" className="w-full h-10 rounded-md border bg-purple-400
                    text-white hover:bg-purple-500 duration-300 focus:outline-none cursor-pointer" />
                </div>
                <div className="flex justify-center items-center mt-2 text-sm gap-1">
                    คุณยังไม่เคยสมัครสมาชิกใช่ไหมคลิก <Link href="/register" className="text-purple-500 font-bold underline"> สมัครสมาชิก</Link>
                </div>
            </form>
        </div>
    )
}