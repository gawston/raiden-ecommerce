'use client'

export default function Forminput({label, onchange}) {
    return(
        <div>
            <label className="text-sm font-medium leading-none">{label}</label>
            <input onChange={onchange} type="text" className="flex focus:border-gray-300 focus:border-2 h-9 md:h-10 w-full rounded-md
            border bg-gray-50 px-3 py-2 text-sm focus:outline-none"/>
        </div>
    )
}
