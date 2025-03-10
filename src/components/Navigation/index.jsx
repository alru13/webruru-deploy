import Link from "next/link"

import SmallNav from "./SmallNav"
import UserActionButton from "./UserActionButton"
import Head from "next/head"

const Navigation = () => {

  return (
    <>
      <nav className="bg-blue-600 p-4 ">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-extrabold text-xl">
            Engine SDS
          </Link>
          <div className="hidden md:flex space-x-3 rounded-md border-color-dark">
            <Link href="/" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray">
              Beranda
            </Link>
            <Link href="/about" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray">
              Tentang Kami
            </Link>
            <Link href="/search/kerusakan/2-tak" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray">
              Kerusakan Mesin 2 Tak
            </Link>
            <Link href="/search/kerusakan/4-tak" className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray">
              Kerusakan Mesin 4 Tak
            </Link>
            <UserActionButton/>
          </div>
            <SmallNav/>  
        </div>
      </nav>
      <div className="bg-color-header text-color-header">
        haha
      </div>
    </>

  )
}

export default Navigation