'use client'

import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Forminput from "../components/Forminput";
import Formpassword from "../components/Formpassword";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const MySwal = withReactContent(Swal);

    const handleSubmit = async (e) => {
        e.preventDefault(); // กันหน้าเว็บ refresh
        if(!username || !password) {
            MySwal.fire({
                title: "Something went wrong!",
                text: "กรุณากรอกข้อมูลให้ครบถ้วน",
                icon: 'error'
            });
            return;
        }
    
        try {
            MySwal.fire({
                title: "Coming soon...",
                text: "ยังไม่ได้ทำ",
                icon: 'error'
            });
        } catch(error) {
            console.log("Error: ", error);
        }
    }

    return(
        <div className="container mx-auto h-[79.7vh] flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl font-bold mb-4">เข้าสู่ระบบ</h1>
            <form onSubmit={handleSubmit} className="border p-6 w-80 md:w-96 rounded-lg bg-white">
                <div className="mt-3">
                    <Forminput label="ชื่อผู้ใช้ / Username" onchange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mt-3">
                    <Formpassword label="รหัสผ่าน / Password" onchange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-1">
                    <Link href="/forgotpassword" className="text-sm underline text-purple-500">ลืมรหัสผ่าน ?</Link>
                </div>
                <div className="mt-4">
                    <input type="submit" value="เข้าสู่ระบบ" className="w-full h-10 rounded-md border bg-purple-400
                    text-white hover:bg-purple-500 duration-300 focus:outline-none cursor-pointer" />
                </div>
                <div className="flex justify-center items-center mt-2 text-sm gap-1">
                    ยังไม่มีบัญชีผู้ใช้ <Link href="/register" className="text-purple-500 font-bold underline"> สมัครสมาชิก</Link>
                </div>
            </form>
        </div>
    )
}