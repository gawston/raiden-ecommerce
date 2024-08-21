'use client'

import Image from "next/image"
import Link from 'next/link'

export default function Productcard({name, price, img, buy}) {
    return(
        <div className="w-full border bg-white hover:border-purple-400 hover:scale-[98%] duration-300 p-4 rounded-lg">
            <Link href={buy}>
                <Image src={img} width={700} height={700} className="w-full h-64 object-cover rounded-lg" />
            </Link>
            <p className="mt-2 text-xl overflow-hidden text-ellipsis">{name}</p>
            <p className=" text-md text-purple-500">{price} บาท</p>
            <Link href={buy}>
                <div className="block w-full bg-purple-400 hover:bg-purple-500 border duration-300 p-1 rounded-md mt-4">
                    <p className="font-bold text-center text-white">ซื้อสินค้า</p>
                </div>
            </Link>
        </div>
    )
}
