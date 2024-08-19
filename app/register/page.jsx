'use client'

import { useState } from "react"
import Link from "next/link"
import axios from "axios";

import Forminput from "../components/Forminput";
import Formpassword from "../components/Formpassword";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // กันหน้าเว็บ refresh

        if(!username || !email || !password || !confirmPassword) {
            setError("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }

        if(password != confirmPassword) {
            setError("รหัสผ่านไม่ตรงกัน");
            return;
        }

        try {
            const res = await axios.post('http://localhost:3000/api/register', {
                username, email, password
            })
            if (res.status == 201) {
                const form = e.target;
                setError("");
                form.reset();
                setSuccess("สมัครสมาชิกสำเร็จ");
            } else {
                console.log("ไม่สามารถสมัครสมาชิกได้: ", error);
            }
        } catch(error) {
            console.log("ไม่สามารถสมัครสมาชิกได้: ", error);
        }
    }

    return(
        <div className="container mx-auto h-[79.7vh] flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl font-bold mb-4">สมัครสมาชิก</h1>
            <form onSubmit={handleSubmit} className="border p-6 w-96 rounded-lg bg-white">
                {error && (
                    <div className="mb-2 bg-red-500 text-sm text-white rounded-md p-3 flex items-center gap-2"><FiAlertTriangle className="text-lg"/> {error}</div>
                )}
                {success && (
                    <div className="mb-2 bg-green-500 text-sm text-white rounded-md p-3 flex items-center gap-2"><FiCheck className="text-lg"/> {success}</div>
                )}
                <div className="mt-3">
                    <Forminput label="ชื่อผู้ใช้ / Username" onchange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mt-3">
                    <Forminput label="อีเมล / Email" onchange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-3">
                    <Formpassword label="รหัสผ่าน / Password" onchange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-3">
                    <Formpassword label="ยืนยันรหัสผ่าน/ Confirm Password" onchange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="mt-8">
                    <input type="submit" value="สมัครสมาชิก" className="w-full h-10 rounded-md border bg-purple-400
                    text-white hover:bg-purple-500 duration-300 focus:outline-none cursor-pointer"/>
                </div>
                <div className="flex justify-center items-center mt-2 text-sm gap-1">
                    หากคุณเคยสมัครสมาชิกแล้วคลิก <Link href="/login" className="text-purple-500 font-bold underline"> เข้าสู่ระบบ</Link>
                </div>
            </form>
        </div>
    )
}