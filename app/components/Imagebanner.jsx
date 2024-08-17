'use client'

import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Imagebanner({msg, img}) {
    return(
        <div className="relative overflow-hidden rounded-lg">
            <p className="hidden md:block absolute bottom-0 p-4 text-white text-xl z-[2]">{msg}</p>
            <div className="absolute bg-gradient-to-t from-black h-full w-full opacity-80 z-[1]"></div>
            <Image src={img} width={5000} height={5000} className="h-40 md:h-96 object-cover rounded-lg" />
        </div>
    )
}

Imagebanner.PropTypes = {
    msg: PropTypes.string.isRequired,
    img: PropTypes.string
}
