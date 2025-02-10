'use client'

import Link from "next/link"
import { useState } from "react"

const SmallNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link href="/" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray block">
                        Beranda
                    </Link>
                    <Link href="/about" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray block">
                        Tentang Kami
                    </Link>
                    <Link href="/search/kerusakan/2-tak" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray block">
                        Kerusakan Mesin 2 Tak
                    </Link>
                    <Link href="/search/kerusakan/4-tak" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray block">
                        Kerusakan Mesin 4 Tak
                    </Link>
                </div>
            )}
        </>
    )
}

export default SmallNav