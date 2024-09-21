'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Cardlink({engtext, thtext, img, goto}) {
    return(
        <Link href={goto} className="relative hover:scale-[98%] duration-300 h-24 md:h-36 rounded-lg overflow-hidden">
          <div className="absolute text-white z-[2] p-2 bottom-0">
            <p className="text-purple-400 font-bold">{engtext}</p>
            <p className="text-xl md:text-4xl font-bold">{thtext}</p>
          </div>
          <div className="absolute bg-gradient-to-r from-black h-full w-full opacity-70 z-[1]"></div>
          <Image src={img} width={5000} height={5000} className="w-full h-full object-cover" />
        </Link>
    )
}