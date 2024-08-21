'use client'

export default function Announcement({msg}) {
    return(
        <div className="w-full p-2 bg-purple-50 mt-4 rounded-lg border border-purple-200 flex items-center gap-2">
            <div className="bg-purple-200 p-2 rounded-md">ประกาศ</div>
            <marquee>{msg}</marquee>
        </div>
    )
}
