'use client'

import Proptypes from 'prop-types'
import Image from "next/image"
import Link from 'next/link'

export default function Productcard({name, price, img, view, buy}) {
    return(
        <div className="w-full border bg-white hover:border-purple-400 hover:scale-[98%] duration-300 p-4 rounded-lg">
            <Link href={view}>
                <Image src={img} width={700} height={700} className="w-full h-64 object-cover rounded-lg" />
                </Link>
                <p className="mt-2 text-xl">{name}</p>
                <Link href={buy}>
                <div className="block w-full bg-purple-400 hover:bg-purple-300 border duration-300 p-1 rounded-md mt-4">
                    <p className="text-center">ราคา {price} บาท</p>
                </div>
            </Link>
        </div>
    )
}

Productcard.Proptypes = {
    name: Proptypes.string,
    price: Proptypes.number,
    img: Proptypes.string,
    view: Proptypes.string,
    buy: Proptypes.string
}